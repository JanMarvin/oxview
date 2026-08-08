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
    return(list(status = 404L, headers = list("Content-Type" = "text/plain"), body = "Not found"))
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

.ox_csp_header <- function() {
  # No network egress beyond this local server: blocks the vendored
  # library's optional Google Fonts substitution call along with any
  # other outbound request, enforced by the browser regardless of what
  # the bundled JS/WASM tries to do.
  list("Content-Security-Policy" = paste(
    "default-src 'self';",
    "script-src 'self' 'wasm-unsafe-eval';",
    "style-src 'self' 'unsafe-inline';",
    "img-src 'self' data: blob:;",
    "font-src 'self' data:;",
    "connect-src 'self' blob:;",
    "worker-src 'self' blob:;",
    "object-src 'none';",
    "base-uri 'none';"
    # "frame-ancestors 'self'"
  ))
}

.ox_app <- function() {
  list(
    call = function(req) {
      host_header <- req$HTTP_HOST
      if (is.null(host_header) || !grepl("^(127\\.0\\.0\\.1|localhost)(:[0-9]+)?$", host_header)) {
        return(list(status = 403L, headers = list("Content-Type" = "text/plain"), body = "Forbidden"))
      }
      path_info <- req$PATH_INFO
      if (is.null(path_info) || path_info == "" || path_info == "/") {
        return(list(status = 404L, headers = list("Content-Type" = "text/plain"), body = "Not found"))
      }
      rel <- sub("^/", "", path_info)
      if (startsWith(rel, "assets/")) {
        local_path <- file.path(.ox_asset_root(), sub("^assets/", "", rel))
      } else if (startsWith(rel, "session/")) {
        local_path <- file.path(.ox_env$session_root, sub("^session/", "", rel))
      } else {
        return(list(status = 404L, headers = list("Content-Type" = "text/plain"), body = "Not found"))
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
