# requires curl
# vendors the @silurus/ooxml JS/WASM viewer (xlsx/docx/pptx canvas renderer)
# run from the package root: source("inst/prepare_lib.R")

ooxml_ver <- "0.76.1"

tarball_url <- sprintf("https://registry.npmjs.org/@silurus/ooxml/-/ooxml-%s.tgz", ooxml_ver)

unlink("inst/ooxml-dist", recursive = TRUE)
dir.create("inst/ooxml-dist", recursive = TRUE)

tmp_tar <- tempfile(fileext = ".tgz")
curl::curl_download(tarball_url, tmp_tar)

tmp_dir <- tempfile()
dir.create(tmp_dir)
utils::untar(tmp_tar, exdir = tmp_dir)

dist_dir <- file.path(tmp_dir, "package", "dist")
dist_files <- list.files(dist_dir, full.names = TRUE)
# drop TypeScript declarations, not needed at runtime
dist_files <- dist_files[basename(dist_files) != "types"]
file.copy(dist_files, "inst/ooxml-dist", recursive = TRUE)

upstream_license <- file.path(tmp_dir, "package", "LICENSE")
if (file.exists(upstream_license)) {
  file.copy(upstream_license, "inst/ooxml-dist/LICENSE.upstream", overwrite = TRUE)
}

writeLines(ooxml_ver, "inst/ooxml-dist/VERSION")

## bump the pinned version referenced in DESCRIPTION's vendored-library note, if present
description <- readLines("DESCRIPTION")
description <- gsub(
  pattern = "'@silurus/ooxml' [0-9.]+",
  replacement = sprintf("'@silurus/ooxml' %s", ooxml_ver),
  x = description
)
writeLines(description, "DESCRIPTION")

unlink(tmp_tar)
unlink(tmp_dir, recursive = TRUE)
