library(testit)

if (!requireNamespace("httpuv", quietly = TRUE)) {
  message("httpuv not installed, skipping session-building tests")
} else {

  local_tmp <- tempfile(fileext = ".docx")
  writeLines("placeholder content", local_tmp)

  built <- oxview:::.ox_build_session(local_tmp, kind = "docx", template = "docx_viewer")

  assert(
    ".ox_build_session copies the source file in as workbook.<kind>",
    file.exists(file.path(built$session$dir, "workbook.docx"))
  )

  assert(
    ".ox_build_session copies the template as index.html and viewer.js",
    file.exists(file.path(built$session$dir, "index.html")),
    file.exists(file.path(built$session$dir, "viewer.js"))
  )

  assert(
    ".ox_build_session's URL points at the session directory it just built",
    grepl(built$session$id, built$url, fixed = TRUE)
  )

  assert(
    "debug = TRUE appends the debug query string; debug = FALSE (default) does not",
    grepl("?debug=1", oxview:::.ox_build_session(local_tmp, kind = "docx",
                                                   template = "docx_viewer", debug = TRUE)$url,
          fixed = TRUE),
    !grepl("?debug=1", built$url, fixed = TRUE)
  )

  unlink(local_tmp)
  oxview::ox_stop_server()
}
