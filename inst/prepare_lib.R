# requires curl
# vendors the @silurus/ooxml JS/WASM viewer (xlsx/docx/pptx canvas renderer)
# run from the package root: source("inst/prepare_lib.R")

ooxml_ver <- "0.84.1"

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

## Prune anything not actually reachable from the xlsx/docx/pptx entry
## points we use (we never import '.', './math', or './node'). Traced via
## static `import ... from "./x"`, dynamic `import("./x")`, and the lazy
## `new URL("x.wasm", import.meta.url)` pattern the library uses for
## WASM/worker assets - re-derived here rather than hardcoded, since the
## content-hashed chunk filenames (e.g. "render-worker-host-B8HAb_sK.js")
## change on every upstream build and a hardcoded list would silently go
## stale and under-prune on the next version bump.
.prune_unreachable <- function(dist_root, entries) {
  all_files <- list.files(dist_root)
  import_pattern <- "(?:from|import)\\s*\\(?\\s*[\"']\\./([^\"']+)[\"']"
  url_pattern <- "[\"']([A-Za-z0-9_.-]+\\.(?:wasm|js|mjs))[\"']"

  reachable <- character(0)
  queue <- entries
  while (length(queue) > 0) {
    f <- queue[[1]]
    queue <- queue[-1]
    if (f %in% reachable || !(f %in% all_files)) next
    reachable <- c(reachable, f)
    if (!grepl("\\.(js|mjs)$", f)) next
    txt <- paste(readLines(file.path(dist_root, f), warn = FALSE), collapse = "\n")

    m1 <- regmatches(txt, gregexpr(import_pattern, txt, perl = TRUE))[[1]]
    deps1 <- gsub(import_pattern, "\\1", m1, perl = TRUE)

    m2 <- regmatches(txt, gregexpr(url_pattern, txt, perl = TRUE))[[1]]
    deps2 <- gsub('^["\']|["\']$', "", m2)
    deps2 <- deps2[deps2 %in% all_files]

    queue <- c(queue, deps1, deps2)
  }

  unreachable <- setdiff(all_files, reachable)
  if (length(unreachable) > 0) {
    unlink(file.path(dist_root, unreachable))
  }
  invisible(unreachable)
}

pruned <- .prune_unreachable("inst/ooxml-dist", c("xlsx.mjs", "docx.mjs", "pptx.mjs", "math.mjs", "region-map.mjs", "three-d.mjs", "chart-ex.mjs", "tiff.mjs"))
message("prepare_lib.R: pruned ", length(pruned), " unreachable file(s): ",
        paste(pruned, collapse = ", "))

upstream_license <- file.path(tmp_dir, "package", "LICENSE")
lic <- "inst/ooxml-dist/LICENSE.upstream"
if (file.exists(upstream_license)) {
  file.copy(upstream_license, lic, overwrite = TRUE)
}
writeLines(ooxml_ver, "inst/ooxml-dist/VERSION")

## Rewrite (not patch) the Dependabot tracking manifest so its pinned
## version stays in sync with ooxml_ver above - full rewrite rather than a
## targeted edit since it's a small, fully-generated file with nothing else
## in it worth preserving.
package_json <- sprintf('{
  "name": "oxview-vendored-deps",
  "private": true,
  "description": "Not a real Node project - this file exists solely so Dependabot has an npm manifest to track the version of @silurus/ooxml vendored into inst/ooxml-dist by inst/prepare_lib.R. Nothing here is installed or run; version bumps here are written automatically by prepare_lib.R.",
  "dependencies": {
    "@silurus/ooxml": "%s"
  }
}
', ooxml_ver)
writeLines(package_json, ".github/dependabot/package.json")

unlink(tmp_tar)
unlink(tmp_dir, recursive = TRUE)
