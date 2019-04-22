const path = require('path');
const { ExportManager, ExportConfig } = require('fusionexport-node-client');

const exportConfig = new ExportConfig();
const exportManager = new ExportManager();

exportConfig.set('chartConfig', path.join(__dirname, 'chart_configs.json'));
exportConfig.set('templateFilePath', path.join(__dirname, 'template.html'));
exportConfig.set('type', 'pdf');
exportConfig.set('templateFormat', 'A4');

async function run() {
  const files = await exportManager.export(exportConfig, '.', true);
  files.forEach((file) => console.log(file));
}

run();