.ox_env <- new.env(parent = emptyenv())

.ox_asset_root <- function() {
  system.file("ooxml-dist", package = "oxview")
}

.ox_template_root <- function() {
  system.file("templates", package = "oxview")
}

.ox_mime_for_ext <- function(ext) {
  ext <- tolower(ext)
  switch(ext,
    html = "text/html; charset=utf-8",
    js   = "application/javascript",
    mjs  = "application/javascript",
    wasm = "application/wasm",
    xlsx = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    xlsm = "application/vnd.ms-excel.sheet.macroEnabled.12",
    docx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    pptx = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    json = "application/json",
    woff = "font/woff",
    woff2 = "font/woff2",
    "application/octet-stream"
  )
}

.ox_serve_file <- function(local_path) {
  if (!file.exists(local_path) || dir.exists(local_path)) {
    return(.ox_plain_response(404L, "Not found"))
  }
  ext <- tools::file_ext(local_path)
  bytes <- readBin(local_path, "raw", file.info(local_path)$size)
  list(
    status = 200L,
    headers = c(
      list("Content-Type" = .ox_mime_for_ext(ext)),
      .ox_csp_header()
    ),
    body = bytes
  )
}

.ox_plain_response <- function(status, body) {
  # Every response carries the CSP header, including error responses - the
  # earlier version only attached it in .ox_serve_file()'s success path,
  # leaving the 403/404 early-return paths below without it, which defeats
  # the point of applying it uniformly.
  list(
    status = status,
    headers = c(list("Content-Type" = "text/plain"), .ox_csp_header()),
    body = body
  )
}

.ox_csp_header <- function() {
  if (isTRUE(getOption("oxview.disable_csp", FALSE))) {
    return(list())
  }
  # No network egress beyond this local server: blocks any outbound
  # fetch/XHR/image/font/script/worker request the bundled JS/WASM could
  # attempt, enforced by the browser regardless of what that code contains.
  # (frame-ancestors/object-src/base-uri deliberately omitted: they're
  # anti-clickjacking/legacy-plugin hardening, not exfiltration-relevant,
  # and can interfere with how an IDE's viewer pane embeds the page.)
  list("Content-Security-Policy" = paste(
    "default-src 'self';",
    "script-src 'self' 'wasm-unsafe-eval';",
    "style-src 'self' 'unsafe-inline';",
    "img-src 'self' data: blob:;",
    "font-src 'self' data:;",
    "connect-src 'self' blob:;",
    "worker-src 'self' blob:"
  ))
}

## Resolve a request path underneath `root`, or NULL if it would escape.
## PATH_INFO arrives percent-decoded, so "..", backslashes and NUL all have to
## be handled here rather than trusted to the client: a browser normalises
## these away before sending, but the server is reachable by any local process
## that finds the port. normalizePath() also resolves symlinks, so a link
## planted inside the session directory cannot point out of it either.
.ox_confine <- function(root, rel) {
  if (is.null(rel) || !nzchar(rel)) return(NULL)
  ## R strings cannot carry an embedded NUL, so "..", backslashes and the
  ## normalized-prefix test below are the whole guard.
  if (grepl("\\.\\.", rel) || grepl("\\\\", rel)) return(NULL)
  root_norm <- normalizePath(root, winslash = "/", mustWork = FALSE)
  path_norm <- normalizePath(file.path(root, rel), winslash = "/", mustWork = FALSE)
  if (!startsWith(path_norm, paste0(root_norm, "/"))) return(NULL)
  path_norm
}

.ox_app <- function() {
  list(
    call = function(req) {
      host_header <- req$HTTP_HOST
      if (is.null(host_header) || !grepl("^(127\\.0\\.0\\.1|localhost)(:[0-9]+)?$", host_header)) {
        return(.ox_plain_response(403L, "Forbidden"))
      }
      path_info <- req$PATH_INFO
      if (is.null(path_info) || path_info == "" || path_info == "/") {
        return(.ox_plain_response(404L, "Not found"))
      }
      rel <- sub("^/", "", path_info)
      if (startsWith(rel, "assets/")) {
        local_path <- .ox_confine(.ox_asset_root(), sub("^assets/", "", rel))
      } else if (startsWith(rel, "session/")) {
        local_path <- .ox_confine(.ox_env$session_root, sub("^session/", "", rel))
      } else {
        return(.ox_plain_response(404L, "Not found"))
      }
      if (is.null(local_path)) {
        return(.ox_plain_response(403L, "Forbidden"))
      }
      .ox_serve_file(local_path)
    }
  )
}

#' Start (or reuse) the local oxview preview server
#'
#' Called automatically by \code{ox_view_*()}. Exposed for advance use, e.g.
#' warming up the server before the first preview.
#' @export
ox_start_server <- function() {
  if (!is.null(.ox_env$server) && .ox_env$server$isRunning()) {
    return(invisible(.ox_env$server))
  }
  if (!requireNamespace("httpuv", quietly = TRUE)) {
    stop("Package 'httpuv' is required. Install it with install.packages('httpuv').", call. = FALSE)
  }

  .ox_env$session_root <- tempfile("oxview_sessions_")
  dir.create(.ox_env$session_root, recursive = TRUE)

  server <- NULL
  port <- NULL
  for (i in seq_len(10)) {
    candidate_port <- httpuv::randomPort()
    server <- tryCatch(
      httpuv::startServer("127.0.0.1", candidate_port, .ox_app()),
      error = function(e) NULL
    )
    if (!is.null(server)) {
      port <- candidate_port
      break
    }
  }
  if (is.null(server)) {
    stop("Could not start local preview server.", call. = FALSE)
  }

  .ox_env$server <- server
  .ox_env$port <- port
  invisible(server)
}

#' Stop the local oxview preview server
#' @export
ox_stop_server <- function() {
  if (!is.null(.ox_env$server)) {
    .ox_env$server$stop()
    .ox_env$server <- NULL
    .ox_env$port <- NULL
  }
  invisible(NULL)
}

.ox_new_session_dir <- function() {
  id <- paste0(
    format(Sys.time(), "%Y%m%d%H%M%OS6"), "_",
    paste(sample(c(letters, LETTERS, 0:9), 16, replace = TRUE), collapse = "")
  )
  id <- gsub("[^A-Za-z0-9_]", "", id)
  dir <- file.path(.ox_env$session_root, id)
  dir.create(dir, recursive = TRUE)
  list(id = id, dir = dir)
}
