# Preview an xlsx, docx, or pptx file

Dispatches to [`ox_view_xlsx`](ox_view_xlsx.md),
[`ox_view_docx`](ox_view_docx.md), or [`ox_view_pptx`](ox_view_pptx.md)
based on `type` if given, otherwise on `x`'s file extension (or, for an
openxlsx2 `wbWorkbook` object, always to the xlsx viewer).

## Usage

``` r
ox_view(
  x,
  interactive = NA,
  browser = FALSE,
  debug = FALSE,
  type = NULL,
  zoom = NULL,
  select = NULL
)
```

## Arguments

- x:

  Path or URL to an .xlsx/.xlsm/.docx/.pptx file, or an openxlsx2
  `wbWorkbook` object.

- interactive:

  Whether to actually open the viewer. Defaults to
  [`interactive()`](https://rdrr.io/r/base/interactive.html); set
  explicitly to avoid depending on session state.

- browser:

  If `TRUE`, force opening in the system browser instead of the RStudio
  Viewer pane.

- debug:

  If `TRUE`, show the in-viewer debug panel (dump the viewer instance,
  list its methods, call any method with an argument).

- type:

  Optionally force the format ("xlsx", "docx", or "pptx") instead of
  guessing it from `x`'s extension. Useful when `x` is a URL that
  doesn't end in the actual file extension (e.g. a download endpoint
  with an opaque or query-string path).

- zoom:

  Initial zoom as a scale multiplier, e.g. `1.5` for 150%.

- select:

  What to select/open initially - forwarded to the format-specific
  parameter that makes sense: sheet name/1-based index (`sheet`) for
  xlsx, or a 1-based page/slide number (`page`/`slide`) for docx/pptx.
  For finer control (e.g. xlsx's separate `cell` parameter), call
  [`ox_view_xlsx()`](ox_view_xlsx.md)/[`ox_view_docx()`](ox_view_docx.md)/[`ox_view_pptx()`](ox_view_pptx.md)
  directly instead.
