library(testit)

if (!requireNamespace("httpuv", quietly = TRUE)) {
  message("httpuv not installed, skipping server tests")
} else {
  
  oxview::ox_stop_server() # start from a clean slate regardless of prior state
  server <- oxview::ox_start_server()
  
  assert(
    "ox_start_server returns a running httpuv server",
    server$isRunning()
  )
  
  assert(
    "calling ox_start_server again reuses the same server instead of starting a second one",
    identical(oxview::ox_start_server(), server)
  )
  
  ## Exercise the actual request-routing logic (.ox_app()$call) directly with
  ## a synthetic Rook-style request, rather than a real HTTP round trip.
  ## httpuv::startServer() is non-blocking and needs R's event loop serviced
  ## (via later) to process a request at all - a synchronous HTTP client call
  ## from within the same test process deadlocks waiting for a response that
  ## nothing is around to produce. Calling the handler directly tests the
  ## identical routing/header logic without that hazard.
  app <- oxview:::.ox_app()
  fake_req <- function(path_info, host = "127.0.0.1:9999") {
    list(PATH_INFO = path_info, HTTP_HOST = host)
  }
  
  resp_404 <- app$call(fake_req("/nonsense/path"))
  assert(
    "unrecognized paths return 404",
    resp_404$status == 404L
  )
  
  resp_bad_host <- app$call(fake_req("/assets/xlsx.mjs", host = "evil.example.com"))
  assert(
    "requests with a non-localhost Host header are rejected (DNS-rebinding guard)",
    resp_bad_host$status == 403L
  )
  
  if (!isTRUE(getOption("oxview.disable_csp", FALSE))) {
    assert(
      "responses carry a restrictive Content-Security-Policy header",
      !is.null(resp_404$headers[["Content-Security-Policy"]]),
      grepl("default-src 'self'", resp_404$headers[["Content-Security-Policy"]], fixed = TRUE)
    )
  }
  
  ## If the person has actually run prepare_lib.R, the vendored assets should
  ## be served with the correct content type. If not (this package
  ## deliberately ships without them, see inst/prepare_lib.R), skip rather
  ## than fail - that's expected, not a bug.
  xlsx_mjs <- system.file("ooxml-dist", "xlsx.mjs", package = "oxview")
  if (nzchar(xlsx_mjs) && file.exists(xlsx_mjs)) {
    resp_asset <- app$call(fake_req("/assets/xlsx.mjs"))
    assert(
      "vendored JS assets are served with 200 and the right content type",
      resp_asset$status == 200L,
      grepl("application/javascript", resp_asset$headers[["Content-Type"]], fixed = TRUE)
    )
  } else {
    message("inst/ooxml-dist not populated (run inst/prepare_lib.R), skipping asset-serving test")
  }
  
  oxview::ox_stop_server()
  assert(
    "ox_stop_server actually stops the server",
    !server$isRunning()
  )
}