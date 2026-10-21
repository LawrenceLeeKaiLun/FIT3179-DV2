# Coffee — From the World to Our Cup

FIT3179 Data Visualisation 2, October 2026. Open `index.html` using VS Code Live Server.

## Current project status

**Presentation prototype, NOT final HD-compliant assignment.** Contains 13 Vega-Lite charts, including three distinct map idioms: choropleth, proportional symbols and straight-line trade flow. Uses one statistical source (WITS/UN Comtrade), so the requirement for **two different data sources is not yet satisfied**. Several idioms are basic, so the requirement for **eight advanced idioms is not yet satisfied**. Tutor-approved hand-drawn sketch, What/Why/How documentation, authorship, AI acknowledgement and interview prep also require student review.

## Source and definitions

World Bank WITS / UN Comtrade, Malaysia, 2024, HS 0901 (coffee whether or not roasted or decaffeinated; husks and skins; coffee substitutes containing coffee in any proportion):

- Imports: https://wits.worldbank.org/trade/comtrade/en/country/MYS/year/2024/tradeflow/Imports/partner/ALL/product/0901
- Exports: https://wits.worldbank.org/trade/comtrade/en/country/MYS/year/2024/tradeflow/Exports/partner/ALL/product/0901

Data in `data/malaysia_coffee_trade_2024.csv` was manually transcribed from these official WITS country tables (selected leading partners only). Values are **thousand USD**; quantities are **kg**. Unit value = reported USD / reported kg. Unit values are **not retail prices**, coffee quality measures, or comparable unit prices for a uniform product. Source partner country does **not** necessarily mean country of cultivation. Maps use approximate country reference points, **not exact ports or routes**. The official world totals (imports US$452,010.30 thousand, exports US$38,877.57 thousand) are not sums of our truncated CSV. The 60.5% figure = (138511.59+134779.53)/452010.30 *100.

World boundaries loaded from `world-atlas@2` countries-110m via jsDelivr. Vega-Lite and Vega-Embed loaded from jsDelivr. Internet access is needed.

## Remaining steps before assignment submission

1. Add at least one independent verified coffee dataset (FAOSTAT or ICO) with year, unit, and metadata checks.
2. Replace redundant/basic charts with meaningful advanced idioms supported by lecture notes and the new data.
3. Validate chart rendering in the student's browser and inspect any errors.
4. Match tutor-approved A4 hand-drawn sketch. Include its scanned PDF in GitHub.
5. Add student's name, source/asset credits, AI acknowledgement, What/Why/How explanation.
6. Publish on GitHub Pages and test public URL on laptop, then practise interview.

No invented production/consumption values are included.

## Folder guide

- `index.html`: dashboard webpage
- `css/style.css`: colours, spacing and layout
- `js/app.js`: loads each chart with Vega-Embed
- `specs/`: one readable Vega-Lite JSON file per chart
- `data/`: coffee CSV files used by the charts
- `sketch/`: put your original hand-drawn sketch here

This reorganised version keeps the original prototype charts and figures; reorganising folders does not validate their accuracy or make the project HD-compliant.
