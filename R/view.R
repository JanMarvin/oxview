.ox_get_file <- function(path_or_url, kind = NULL) {
  ## Is this a file or URL (code taken from read.table())
  on.exit(try(close(fl), silent = TRUE), add = TRUE)
  fl <- file(description = path_or_url)
  ## If URL download
  if (inherits(fl, "url")) {
    ## Extension for the downloaded tempfile: prefer the known target kind
    ## (the caller already knows this is "docx"/"xlsx"/"pptx" - far more
    ## reliable than parsing it back out of the URL, which only works when
    ## the URL happens to end in the real extension).
    ext <- if (!is.null(kind)) kind else tools::file_ext(sub("[?#].*$", "", path_or_url))
    tmp <- tempfile(fileext = if (nzchar(ext)) paste0(".", ext) else "")
    utils::download.file(url = path_or_url, destfile = tmp, cacheOK = FALSE, mode = "wb", quiet = TRUE)
    if (!file.exists(tmp) || file.info(tmp)$size == 0) {
      stop("Download appeared to succeed but produced no file (or an empty file) at ",
           tmp, ". URL: ", path_or_url, call. = FALSE)
    }
    path_or_url <- tmp
  }
  path_or_url
}

.ox_resolve_source <- function(x, kind, allow_workbook = FALSE) {
  if (allow_workbook && inherits(x, "wbWorkbook")) {
    tmp <- tempfile(fileext = ".xlsx")
    x$clone()$save(tmp, flush = FALSE)
    return(normalizePath(tmp, mustWork = TRUE))
  }
  if (is.character(x) && length(x) == 1) {
    resolved <- .ox_get_file(x, kind = kind)
    if (!file.exists(resolved)) {
      stop("`x` did not resolve to an existing file (checked as a local path and as a URL).",
           call. = FALSE)
    }
    return(normalizePath(resolved, mustWork = TRUE))
  }
  msg <- "`x` must be a path or URL to a file"
  if (allow_workbook) msg <- paste0(msg, ", or an openxlsx2 wbWorkbook object")
  stop(msg, ".", call. = FALSE)
}

.ox_query_string <- function(params) {
  params <- params[!vapply(params, is.null, logical(1))]
  if (length(params) == 0) return("")
  pairs <- vapply(names(params), function(n) {
    paste0(utils::URLencode(n, reserved = TRUE), "=",
           utils::URLencode(as.character(params[[n]]), reserved = TRUE))
  }, character(1))
  paste0("?", paste(pairs, collapse = "&"))
}

.ox_build_session <- function(x, kind, template, allow_workbook = FALSE, debug = FALSE,
                               extra_params = list()) {
  src_path <- .ox_resolve_source(x, kind = kind, allow_workbook = allow_workbook)

  ox_start_server()
  sess <- .ox_new_session_dir()

  file.copy(src_path, file.path(sess$dir, paste0("workbook.", kind)), overwrite = TRUE)
  file.copy(file.path(.ox_template_root(), paste0(template, ".html")),
            file.path(sess$dir, "index.html"), overwrite = TRUE)
  file.copy(file.path(.ox_template_root(), paste0(template, ".js")),
            file.path(sess$dir, "viewer.js"), overwrite = TRUE)

  url <- sprintf("http://127.0.0.1:%d/session/%s/index.html", .ox_env$port, sess$id)
  if (isTRUE(debug)) extra_params$debug <- 1
  url <- paste0(url, .ox_query_string(extra_params))

  list(session = sess, url = url)
}

.ox_view <- function(x, kind, template, allow_workbook = FALSE, interactive = NA, browser = FALSE,
                      debug = FALSE, extra_params = list()) {
  if (is.na(interactive)) interactive <- interactive()
  if (!isTRUE(interactive)) {
    warning("will not open file when not interactive", call. = FALSE)
    return(invisible(x))
  }

  built <- .ox_build_session(x, kind = kind, template = template,
                              allow_workbook = allow_workbook, debug = debug,
                              extra_params = extra_params)

  viewer_fn <- if (!browser) getOption("viewer") else NULL
  if (!is.null(viewer_fn)) {
    viewer_fn(built$url)
  } else {
    utils::browseURL(built$url)
  }

  invisible(x)
}

#' Preview an .xlsx / .xlsm file or openxlsx2 workbook
#'
#' Opens a live spreadsheet preview (RStudio Viewer pane, or the default
#' browser with \code{browser = TRUE}) with a formula bar, cell reference
#' box, sheet-name search, and a status bar showing count/sum/average for
#' the current selection.
#'
#' @param x Path to an existing .xlsx/.xlsm file, or an openxlsx2
#'   \code{wbWorkbook} object.
#' @param sheet Sheet to open initially: a sheet name, or a 1-based index.
#'   If \code{NULL} (the default) and \code{x} is a \code{wbWorkbook}, the
#'   workbook's current sheet is used automatically via openxlsx2's private
#'   \code{current_sheet}/\code{get_sheet_index} R6 fields - this reaches
#'   into another package's undocumented internals (there's no public
#'   accessor for this), so it may break across openxlsx2 versions without
#'   notice; pass \code{sheet} explicitly to sidestep it entirely.
#' @param cell A cell reference (e.g. \code{"B2"} or \code{"B2:D5"}) to
#'   select and scroll to on open.
#' @param zoom Initial zoom as a scale multiplier, e.g. \code{1.5} for 150%.
#' @param interactive Whether to actually open the viewer. Defaults to
#'   \code{interactive()}; set explicitly to avoid depending on session state.
#' @param browser If \code{TRUE}, force opening in the system browser instead
#'   of the RStudio Viewer pane.
#' @param debug If \code{TRUE}, show the in-viewer debug panel (dump the
#'   viewer instance, list its methods, call any method with an argument).
#' @export
ox_view_xlsx <- function(x, sheet = NULL, cell = NULL, zoom = NULL,
                          interactive = NA, browser = FALSE, debug = FALSE) {
  if (is.null(sheet) && inherits(x, "wbWorkbook")) {
    sheet <- tryCatch({
      priv <- x$.__enclos_env__$private
      priv$get_sheet_index(priv$current_sheet)
    }, error = function(e) NULL)
  }
  .ox_view(x, kind = "xlsx", template = "xlsx_viewer", allow_workbook = TRUE,
           interactive = interactive, browser = browser, debug = debug,
           extra_params = list(sheet = sheet, cell = cell, zoom = zoom))
}

#' Preview a .docx file
#' @inheritParams ox_view_xlsx
#' @param x Path or URL to an existing .docx file.
#' @param page Page to open initially (1-based).
#' @param background Background color behind the page (any valid CSS color).
#' @export
ox_view_docx <- function(x, page = NULL, zoom = NULL, background = NULL,
                          interactive = NA, browser = FALSE, debug = FALSE) {
  .ox_view(x, kind = "docx", template = "docx_viewer",
           interactive = interactive, browser = browser, debug = debug,
           extra_params = list(page = page, zoom = zoom, background = background))
}

#' Preview a .pptx file
#' @inheritParams ox_view_docx
#' @param x Path or URL to an existing .pptx file.
#' @param slide Slide to open initially (1-based).
#' @export
ox_view_pptx <- function(x, slide = NULL, zoom = NULL, background = NULL,
                          interactive = NA, browser = FALSE, debug = FALSE) {
  .ox_view(x, kind = "pptx", template = "pptx_viewer",
           interactive = interactive, browser = browser, debug = debug,
           extra_params = list(slide = slide, zoom = zoom, background = background))
}

#' Preview an xlsx, docx, or pptx file
#'
#' Dispatches to \code{\link{ox_view_xlsx}}, \code{\link{ox_view_docx}}, or
#' \code{\link{ox_view_pptx}} based on \code{type} if given, otherwise on
#' \code{x}'s file extension (or, for an openxlsx2 \code{wbWorkbook} object,
#' always to the xlsx viewer). For per-format options like starting sheet,
#' page, or zoom, call the format-specific function directly instead.
#'
#' @inheritParams ox_view_xlsx
#' @param x Path or URL to an .xlsx/.xlsm/.docx/.pptx file, or an
#'   openxlsx2 \code{wbWorkbook} object.
#' @param type Optionally force the format ("xlsx", "docx", or "pptx")
#'   instead of guessing it from \code{x}'s extension. Useful when \code{x}
#'   is a URL that doesn't end in the actual file extension (e.g. a download
#'   endpoint with an opaque or query-string path).
#' @export
ox_view <- function(x, interactive = NA, browser = FALSE, debug = FALSE, type = NULL) {
  if (inherits(x, "wbWorkbook")) {
    return(ox_view_xlsx(x, interactive = interactive, browser = browser, debug = debug))
  }
  if (!is.character(x) || length(x) != 1) {
    stop("`x` must be a path or URL to a file, or an openxlsx2 wbWorkbook object.", call. = FALSE)
  }
  ext <- if (!is.null(type)) tolower(type) else tolower(tools::file_ext(sub("[?#].*$", "", x)))
  switch(ext,
         xlsx = ,
         xlsm = ox_view_xlsx(x, interactive = interactive, browser = browser, debug = debug),
         docx = ox_view_docx(x, interactive = interactive, browser = browser, debug = debug),
         pptx = ox_view_pptx(x, interactive = interactive, browser = browser, debug = debug),
         stop("Unrecognized file extension '.", ext, "' - expected xlsx, xlsm, docx, or pptx. ",
              "If `x` doesn't end in its real extension (e.g. a URL with an opaque path), ",
              "pass `type = \"docx\"` (or \"xlsx\"/\"pptx\") explicitly.", call. = FALSE)
  )
}
