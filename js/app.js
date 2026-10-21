// Load the Vega-Lite charts onto the page.
// The chart designs are stored in the specs folder.
const charts = ['01','02','03','04','05','06','07','08','09','10','11','12','13'];
const names = {
  '01':'01_import_ranking', '02':'02_export_ranking',
  '03':'03_import_scatter', '04':'04_trade_heatmap',
  '05':'05_unit_value', '06':'06_quantity',
  '07':'07_export_scatter', '08':'08_trade_split',
  '09':'09_import_distribution', '10':'10_top_partner_share',
  '11':'11_choropleth', '12':'12_symbol_map',
  '13':'13_flow_map'
};
charts.forEach(function(id) {
  vegaEmbed('#chart' + id, 'specs/' + names[id] + '.json', {
    actions: false, renderer: 'svg'
  }).catch(function(error) {
    document.getElementById('chart' + id).textContent =
      'Chart could not load. Check Live Server and your internet connection.';
    console.error('Chart ' + id, error);
  });
});
