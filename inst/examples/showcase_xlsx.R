# Showcase: build an .xlsx with a chart table + native chart using
# openxlsx2 and its encharter companion package, then preview it with
# oxview.
#
# Needs openxlsx2 and encharter, neither of which oxview itself depends on -
# they're only required to run this example.
#
#   install.packages(c("openxlsx2", "encharter"))
#   source(system.file("examples", "showcase_xlsx.R", package = "oxview"))

if (!requireNamespace("openxlsx2", quietly = TRUE) ||
    !requireNamespace("encharter", quietly = TRUE)) {
  stop("This example needs the 'openxlsx2' and 'encharter' packages: ",
       "install.packages(c('openxlsx2', 'encharter'))", call. = FALSE)
}

library(openxlsx2)
library(encharter)

df_bar <- data.frame(
  Product = c("Software", "Services", "Hardware", "Support"),
  Q1      = c(310, 195, 140, 85),
  Q2      = c(340, 210, 130, 90),
  Q3      = c(375, 225, 125, 95),
  Q4      = c(420, 250, 120, 105)
)

wb <- wb_workbook()
wb <- wb_add_worksheet(wb, "Bar", grid_lines = FALSE)
wb <- wb_add_data_table(
  wb, sheet = "Bar", x = df_bar,
  dims = "A1", table_style = "TableStyleMedium2"
)
wb <- wb_set_col_widths(wb, sheet = "Bar", cols = 1:5, widths = c(12, 8, 8, 8, 8))

wb_df <- wb_data(wb)
chart <- ec("barChart")
chart$set_chart_title("Quarterly Revenue by Product (EUR k)", bold = TRUE)
chart$set_y_axis(min = 0, format = "#,##0", grid_lines = TRUE, grid_color = "EEEEEE")

colors    <- c("2E4057", "048A81", "E84855", "F4A261")
quarters  <- c("Q1", "Q2", "Q3", "Q4")
variables <- names(wb_df)
for (i in seq_along(quarters)) {
  chart$add_series(
    name  = variables[i + 1L],
    label = variables[1L],
    data  = wb_df,
    color = colors[i]
  )
}
chart$set_legend_style(pos = "bottom")
wb <- wb_add_encharter(wb, sheet = "Bar", graph = chart, dims = "G1:P18")

out_file <- tempfile(fileext = ".xlsx")
wb_save(wb, out_file)

oxview::ox_view_xlsx(out_file)
