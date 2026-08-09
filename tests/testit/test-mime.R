library(testit)

assert(
  "mime map returns correct types for known extensions",
  oxview:::.ox_mime_for_ext("html") == "text/html; charset=utf-8",
  oxview:::.ox_mime_for_ext("js") == "application/javascript",
  oxview:::.ox_mime_for_ext("mjs") == "application/javascript",
  oxview:::.ox_mime_for_ext("wasm") == "application/wasm",
  oxview:::.ox_mime_for_ext("xlsx") == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  oxview:::.ox_mime_for_ext("docx") == "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  oxview:::.ox_mime_for_ext("pptx") == "application/vnd.openxmlformats-officedocument.presentationml.presentation"
)

assert(
  "mime map is case-insensitive and falls back for unknown extensions",
  oxview:::.ox_mime_for_ext("HTML") == oxview:::.ox_mime_for_ext("html"),
  oxview:::.ox_mime_for_ext("Xlsx") == oxview:::.ox_mime_for_ext("xlsx"),
  oxview:::.ox_mime_for_ext("somethingweird") == "application/octet-stream"
)
