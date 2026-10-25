# Coffee — From the World to Our Cup

FIT3179 Data Visualisation 2  
Lawrence Lee  
October 2026

## About my dashboard

My dashboard is about Malaysia's coffee trade in 2024. It shows where Malaysia imports coffee from, where Malaysia exports coffee to, and how Malaysia's local coffee production has changed.

I created this dashboard to help people understand where our coffee comes from and how Malaysia trades coffee with other countries.

The dashboard has 14 charts, including three different maps. I used short explanations and interactive charts to make the information easier to understand.

## View my dashboard

GitHub Pages:  
https://lawrenceleekailun.github.io/FIT3179-DV2/

You can also open `index.html` using Live Server in Visual Studio Code.

An internet connection is needed because the project uses online libraries and map data.

## Data sources

**1. World Bank WITS / UN Comtrade**

I used Malaysia's 2024 coffee import and export data (HS 0901).

Imports:  
https://wits.worldbank.org/trade/comtrade/en/country/MYS/year/2024/tradeflow/Imports/partner/ALL/product/0901

Exports:  
https://wits.worldbank.org/trade/comtrade/en/country/MYS/year/2024/tradeflow/Exports/partner/ALL/product/0901

The trade data includes partner countries, trade values and quantities.

- Trade values are in thousands of US dollars.
- Trade quantities are in kilograms.
- The CSV contains selected trading partners, so its totals may be different from the full totals reported by WITS.

**2. FAOSTAT**

I used FAOSTAT data from the Food and Agriculture Organization of the United Nations (FAO) to show Malaysia's green coffee production from 2020 to 2024.

Website:  
https://www.fao.org/faostat/en/#data/QCL

Production is measured in tonnes.

## Charts and maps

I used Vega-Lite to create the charts and maps.

The dashboard is divided into four main sections:

1. World — Shows Malaysia's coffee trading partners using three different maps.
2. Production — Shows how Malaysia's green coffee production changed from 2020 to 2024.
3. Imports — Compares coffee import values, quantities and trading partners.
4. Exports — Compares coffee exports and shows the difference between imports and exports.

Some charts have tooltips so readers can hover to see more information. The donut chart also has a clickable legend.

The map lines show connections between countries. They do not show actual shipping routes.

## Project files

- `index.html` — Main dashboard page
- `css/style.css` — Dashboard colours and layout
- `js/app.js` — Loads the Vega-Lite charts
- `specs/` — Vega-Lite chart specifications
- `data/` — CSV datasets used in the charts
- `sketch/` — My hand-drawn dashboard sketch

## Tools used

- HTML
- CSS
- JavaScript
- Vega-Lite
- Vega-Embed
- Visual Studio Code
- GitHub Pages

Map boundaries are from world-atlas, loaded through jsDelivr.

## Notes about the data

The coffee trade data covers HS 0901, which includes different types of coffee products. The unit values shown in the charts are calculated from trade value and quantity. They are not retail coffee prices.

The country listed as a trading partner does not always mean the coffee was grown there.

The dashboard uses selected trading partners for some charts, so these results should not be treated as the full list of countries.

## Sketch

My original hand-drawn sketch is available here:

https://github.com/LawrenceLeeKaiLun/FIT3179-DV2/blob/main/sketch/FIT3179_DV2_Sketch.pdf