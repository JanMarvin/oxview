# oxview showcase examples

Three small examples, one per format, demonstrating `oxview` on files built
entirely in R rather than requiring you to bring your own.

## xlsx (openxlsx2 + encharter)

Builds a workbook with a data table and a native chart, then opens it.
Needs `openxlsx2` and `encharter` (not required by `oxview` itself):

```r
install.packages(c("openxlsx2", "encharter"))
source(system.file("examples", "showcase_xlsx.R", package = "oxview"))
```

## docx (R Markdown)

Needs `rmarkdown` (not required by `oxview` itself):

```r
docx_out <- file.path(tempdir(), "showcase.docx")
rmarkdown::render(
  system.file("examples", "showcase_docx.Rmd", package = "oxview"),
  output_file = docx_out
)
oxview::ox_view_docx(docx_out)
```

## pptx (R Markdown)

```r
pptx_out <- file.path(tempdir(), "showcase.pptx")
rmarkdown::render(
  system.file("examples", "showcase_pptx.Rmd", package = "oxview"),
  output_file = pptx_out
)
oxview::ox_view_pptx(pptx_out)
```
