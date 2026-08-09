# Preview a .docx file

Preview a .docx file

## Usage

``` r
ox_view_docx(
  x,
  page = NULL,
  zoom = NULL,
  background = NULL,
  interactive = NA,
  browser = FALSE,
  debug = FALSE
)
```

## Arguments

- x:

  Path or URL to an existing .docx file.

- page:

  Page to open initially (1-based).

- zoom:

  Initial zoom as a scale multiplier, e.g. `1.5` for 150%.

- background:

  Background color behind the page (any valid CSS color).

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
