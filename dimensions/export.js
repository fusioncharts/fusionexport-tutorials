const path = require('path');
const { ExportManager, ExportConfig } = require('fusionexport-node-client');

const exportConfig = new ExportConfig();
const exportManager = new ExportManager();

exportConfig.set('chartConfig', path.join(__dirname, 'chart_configs.json'));
exportConfig.set('templateFilePath', path.join(__dirname, 'template.html'));
exportConfig.set('templateWidth', 800)
// exportConfig.set('templateWidth', 1200)
// exportConfig.set('templateWidth', 1800)

async function run() {
  const files = await exportManager.export(exportConfig, '.', true);
  files.forEach((file) => console.log(file));
}

run();