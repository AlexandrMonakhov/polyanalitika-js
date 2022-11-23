const data = w.series[0].data.map(({ name, y }) => ({ name, y }));

Highcharts.chart('chart', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  title: {
    text: 'Распределение рынка браузеров, 2021',
  },
  tooltip: {
    pointFormat: '<b>{point.percentage:.1f}%</b>',
  },
  accessibility: {
    point: {
      valueSuffix: '%',
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [{
    colorByPoint: true,
    data,
  }],
});