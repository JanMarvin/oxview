
<!-- README.md is generated from README.Rmd. Please edit that file -->

# oxview

<!-- badges: start -->

[![R-CMD-check.yaml](https://github.com/JanMarvin/oxview/actions/workflows/check-standard.yaml/badge.svg)](https://github.com/JanMarvin/oxview/actions/workflows/check-standard.yaml)
[![r-universe](https://janmarvin.r-universe.dev/badges/oxview)](https://janmarvin.r-universe.dev/oxview)
<!-- badges: end -->

`oxview` is an R package that bundles the
[office-open-xml-viewer](https://github.com/yukiyokotani/office-open-xml-viewer)
to provide preview functionality for `.docx`, `.pptx`, and `.xlsx` files
directly within the RStudio Viewer pane.

## Installation

You can install the development version of `oxview` from
[GitHub](https://github.com/) with:

``` r
# install.packages("remotes")
remotes::install_github("JanMarvin/oxview")
```

Or from [r-universe](https://janmarvin.r-universe.dev/oxview) with:

``` r
# Enable repository from janmarvin
options(repos = c(
  janmarvin = 'https://janmarvin.r-universe.dev',
  CRAN = 'https://cloud.r-project.org'))
# Download and install oxview in R
install.packages('oxview')
```

## Usage

``` r
if (interactive()) {
  oxview::ox_view(x = "https://github.com/JanMarvin/msoc/raw/refs/heads/main/inst/extdata/Untitled1.docx")
  oxview::ox_view(x = "https://github.com/JanMarvin/msoc/raw/refs/heads/main/inst/extdata/Untitled1.pptx")
  oxview::ox_view(x = "https://github.com/JanMarvin/msoc/raw/refs/heads/main/inst/extdata/Untitled1.xlsx")
}
```

## Screenshots

### xlsx

<figure>
<img src="man/figures/xlsx.png" alt="xlsx viewer screenshot" />
<figcaption aria-hidden="true">xlsx viewer screenshot</figcaption>
</figure>

### docx

<figure>
<img src="man/figures/docx.png" alt="docx viewer screenshot" />
<figcaption aria-hidden="true">docx viewer screenshot</figcaption>
</figure>

### pptx

<figure>
<img src="man/figures/pptx.png" alt="pptx viewer screenshot" />
<figcaption aria-hidden="true">pptx viewer screenshot</figcaption>
</figure>

## License

This package is licensed under the MIT license and is based on
[`office-open-xml-viewer`](https://github.com/yukiyokotani/office-open-xml-viewer)
(by Yuki Yokotani; COPYRIGHT 2026) released under the MIT license.
