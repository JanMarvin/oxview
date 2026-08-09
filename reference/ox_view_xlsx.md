# Preview an .xlsx / .xlsm file or openxlsx2 workbook

Opens a live spreadsheet preview (RStudio Viewer pane, or the default
browser with `browser = TRUE`) with a formula bar, cell reference box,
sheet-name search, and a status bar showing count/sum/average for the
current selection.

## Usage

``` r
ox_view_xlsx(
  x,
  sheet = NULL,
  cell = NULL,
  zoom = NULL,
  interactive = NA,
  browser = FALSE,
  debug = FALSE
)
```

## Arguments

- x:

  Path to an existing .xlsx/.xlsm file, or an openxlsx2 `wbWorkbook`
  object.

- sheet:

  Sheet to open initially: a sheet name, or a 1-based index. If `NULL`
  (the default) and `x` is a `wbWorkbook`, the workbook's current sheet
  is used automatically via openxlsx2's private
  `current_sheet`/`get_sheet_index` R6 fields - this reaches into
  another package's undocumented internals (there's no public accessor
  for this), so it may break across openxlsx2 versions without notice;
  pass `sheet` explicitly to sidestep it entirely.

- cell:

  A cell reference (e.g. `"B2"` or `"B2:D5"`) to select and scroll to on
  open.

- zoom:

  Initial zoom as a scale multiplier, e.g. `1.5` for 150%.

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
