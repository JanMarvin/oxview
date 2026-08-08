.ox_get_file <- function(path_or_url) {
  ## Is this a file or URL (approach taken from read.table())
  fl <- file(description = path_or_url)
  on.exit(try(close(fl), silent = TRUE), add = TRUE)
  if (inherits(fl, "url")) {
    ext <- tools::file_ext(sub("[?#].*$", "", path_or_url))
    tmp <- tempfile(fileext = if (nzchar(ext)) paste0(".", ext) else "")
    utils::download.file(url = path_or_url, destfile = tmp, cacheOK = FALSE, mode = "wb", quiet = TRUE)
    return(tmp)
  }
  path_or_url
}

.ox_resolve_source <- function(x, allow_workbook = FALSE) {
  if (allow_workbook && inherits(x, "wbWorkbook")) {
    tmp <- tempfile(fileext = ".xlsx")
    x$clone()$save(tmp, flush = FALSE)
    return(normalizePath(tmp, mustWork = TRUE))
  }
  if (is.character(x) && length(x) == 1) {
    resolved <- .ox_get_file(x)
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

.ox_view <- function(x, kind, template, allow_workbook = FALSE, interactive = NA, browser = FALSE) {
  if (is.na(interactive)) interactive <- interactive()
  if (!isTRUE(interactive)) {
    warning("will not open file when not interactive", call. = FALSE)
    return(invisible(x))
  }
  
  src_path <- .ox_resolve_source(x, allow_workbook = allow_workbook)
  
  ox_start_server()
  sess <- .ox_new_session_dir()
  
  file.copy(src_path, file.path(sess$dir, paste0("workbook.", kind)), overwrite = TRUE)
  file.copy(file.path(.ox_template_root(), paste0(template, ".html")),
            file.path(sess$dir, "index.html"), overwrite = TRUE)
  file.copy(file.path(.ox_template_root(), paste0(template, ".js")),
            file.path(sess$dir, "viewer.js"), overwrite = TRUE)
  
  url <- sprintf("http://127.0.0.1:%d/session/%s/index.html", .ox_env$port, sess$id)
  
  viewer_fn <- if (!browser) getOption("viewer") else NULL
  if (!is.null(viewer_fn)) {
    viewer_fn(url)
  } else {
    utils::browseURL(url)
  }
  
  invisible(x)
}

#' Preview an .xlsx / .xlsm file or openxlsx2 workbook
#'
#' Opens a live spreadsheet preview (RStudio Viewer pane, or the default
#' browser with \code{browser = TRUE}) with a formula bar, cell reference
#' box, and a status bar showing count/sum/average for the current
#' selection.
#'
#' @param x Path to an existing .xlsx/.xlsm file, or an openxlsx2
#'   \code{wbWorkbook} object.
#' @param interactive Whether to actually open the viewer. Defaults to
#'   \code{interactive()}; set explicitly to avoid depending on session state.
#' @param browser If \code{TRUE}, force opening in the system browser instead
#'   of the RStudio Viewer pane.
#' @export
ox_view_xlsx <- function(x, interactive = NA, browser = FALSE) {
  .ox_view(x, kind = "xlsx", template = "xlsx_viewer", allow_workbook = TRUE,
           interactive = interactive, browser = browser)
}

#' Preview a .docx file
#' @inheritParams ox_view_xlsx
#' @param x Path to an existing .docx file.
#' @export
ox_view_docx <- function(x, interactive = NA, browser = FALSE) {
  .ox_view(x, kind = "docx", template = "docx_viewer",
           interactive = interactive, browser = browser)
}

#' Preview a .pptx file
#' @inheritParams ox_view_xlsx
#' @param x Path to an existing .pptx file.
#' @export
ox_view_pptx <- function(x, interactive = NA, browser = FALSE) {
  .ox_view(x, kind = "pptx", template = "pptx_viewer",
           interactive = interactive, browser = browser)
}

#' Preview an xlsx, docx, or pptx file
#'
#' Dispatches to \code{\link{ox_view_xlsx}}, \code{\link{ox_view_docx}}, or
#' \code{\link{ox_view_pptx}} based on \code{x}'s file extension (or, for an
#' openxlsx2 \code{wbWorkbook} object, always to the xlsx viewer).
#'
#' @inheritParams ox_view_xlsx
#' @param x Path or URL to an .xlsx/.xlsm/.docx/.pptx file, or an
#'   openxlsx2 \code{wbWorkbook} object.
#' @export
ox_view <- function(x, interactive = NA, browser = FALSE) {
  if (inherits(x, "wbWorkbook")) {
    return(ox_view_xlsx(x, interactive = interactive, browser = browser))
  }
  if (!is.character(x) || length(x) != 1) {
    stop("`x` must be a path or URL to a file, or an openxlsx2 wbWorkbook object.", call. = FALSE)
  }
  ext <- tolower(tools::file_ext(sub("[?#].*$", "", x)))
  switch(ext,
         xlsx = ,
         xlsm = ox_view_xlsx(x, interactive = interactive, browser = browser),
         docx = ox_view_docx(x, interactive = interactive, browser = browser),
         pptx = ox_view_pptx(x, interactive = interactive, browser = browser),
         stop("Unrecognized file extension '.", ext, "' - expected xlsx, xlsm, docx, or pptx.", call. = FALSE)
  )
}