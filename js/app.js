// This file loads all 14 charts into the dashboard.

// List of chart numbers.
const charts = ['01', '02', '03', '04', '05', '06', '07',
                '08', '09', '10', '11', '12', '13', '14'];

// Match each chart number with its JSON filename.
const names = {
  '01': '01_import_ranking',
  '02': '02_export_ranking',
  '03': '03_import_scatter',
  '04': '04_trade_heatmap',
  '05': '05_unit_value',
  '06': '06_quantity',
  '07': '07_export_scatter',
  '08': '08_trade_split',
  '09': '09_import_distribution',
  '10': '10_top_partner_share',
  '11': '11_choropleth',
  '12': '12_symbol_map',
  '13': '13_flow_map',
  '14': '14_production'
};

// Go through each chart and display it on the page.
charts.forEach(function(id) {

  // Find the correct JSON file in the specs folder.
  const file = 'specs/' + names[id] + '.json';

  // Load the chart into its matching HTML container.
  vegaEmbed('#chart' + id, file, {
    actions: false,
    renderer: 'svg'
  }).catch(function(error) {

    // Show a message if the chart cannot load.
    document.getElementById('chart' + id).textContent =
      'Chart could not load. Check Live Server and your internet connection.';

    // Print the error in the browser console.
    console.error('Chart ' + id, error);
  });
});