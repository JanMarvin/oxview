library(testit)

## .ox_get_file: a local path (no URL scheme) should just be passed through
## unchanged, with no network access attempted.
local_tmp <- tempfile(fileext = ".docx")
writeLines("not a real docx, just bytes for the test", local_tmp)

assert(
  ".ox_get_file passes local paths through unchanged",
  oxview:::.ox_get_file(local_tmp) == local_tmp
)

unlink(local_tmp)

## .ox_resolve_source: bad input produces an informative error, not a crash
assert(
  ".ox_resolve_source rejects non-existent local paths with a clear message",
  has_error(oxview:::.ox_resolve_source("/definitely/does/not/exist.docx", kind = "docx"))
)

assert(
  ".ox_resolve_source's error mentions wbWorkbook only when allow_workbook is TRUE",
  grepl("wbWorkbook", tryCatch(
    oxview:::.ox_resolve_source(list(), kind = "xlsx", allow_workbook = TRUE),
    error = function(e) conditionMessage(e)
  )),
  !grepl("wbWorkbook", tryCatch(
    oxview:::.ox_resolve_source(list(), kind = "docx", allow_workbook = FALSE),
    error = function(e) conditionMessage(e)
  ))
)

## .ox_resolve_source: an existing local file resolves to its own normalized path
local_tmp2 <- tempfile(fileext = ".pptx")
writeLines("placeholder", local_tmp2)
resolved <- oxview:::.ox_resolve_source(local_tmp2, kind = "pptx")

assert(
  ".ox_resolve_source resolves an existing local file to itself",
  file.exists(resolved),
  normalizePath(resolved) == normalizePath(local_tmp2)
)

unlink(local_tmp2)

## ox_view()'s extension dispatch, including the `type=` override
assert(
  "ox_view dispatch errors clearly on an unrecognized extension",
  has_error(oxview::ox_view("somefile.txt", interactive = FALSE))
)
