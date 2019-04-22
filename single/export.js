const { ExportManager, ExportConfig } = require('fusionexport-node-client');

const exportManager = new ExportManager();
const exportConfig = new ExportConfig();

const chartConfig = {
  type: 'column2d',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Number of visitors last week',
      theme: 'ocean',
      subCaption: 'Bakersfield Central vs Los Angeles Topanga',
    },
    data: [
      {
        label: 'Mon',
        value: '15123',
      },
      {
        label: 'Tue',
        value: '14233',
      },
      {
        label: 'Wed',
        value: '25507',
      },
    ],
  },
};

exportConfig.set('chartConfig', chartConfig);

exportManager.export(exportConfig, '.', true).then((exportedFiles) => {
  exportedFiles.forEach(file => console.log(file));
}).catch((err) => {
  console.log(err);
});