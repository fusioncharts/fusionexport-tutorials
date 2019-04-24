const path = require('path');
const { ExportManager, ExportConfig } = require('fusionexport-node-client');

const exportConfig = new ExportConfig();
const exportManager = new ExportManager();

exportConfig.set('templateFilePath', path.join(__dirname, 'template.html'));
exportConfig.set('asyncCapture', true);

async function run() {
  const files = await exportManager.export(exportConfig, '.', true);
  files.forEach((file) => console.log(file));
}

run();