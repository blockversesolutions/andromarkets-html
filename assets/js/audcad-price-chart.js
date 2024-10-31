 // Initial Data
 const chartOptions = {
  chart: {
    type: 'line',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  series: [{
    name: 'Price',
    data: [1.3566, 1.3568, 1.3567, 1.3568, 1.3566]
  }],
  xaxis: {
    categories: ['2:53:00 AM', '2:54:00 AM', '2:55:00 AM', '2:56:00 AM', '2:57:00 AM'],
    labels: {
      style: {
        colors: '#6b7280'
      }
    }
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val.toFixed(4);
      }
    }
  },
  stroke: {
    curve: 'smooth',
    width: 3,
    colors: ['#fbbf24']
  },
  tooltip: {
    theme: 'light'
  },
  grid: {
    borderColor: '#e5e7eb',
    strokeDashArray: 5
  }
};

const chart = new ApexCharts(document.querySelector("#chart"), chartOptions);
chart.render();

// Update Chart Data Function (Simulating new intervals)
function updateChart(interval) {
  const newData = Array.from({ length: 5 }, () => (1.3565 + Math.random() * 0.0005).toFixed(4));
  chart.updateSeries([{ data: newData }]);
  document.querySelectorAll('.chart-btn-group button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}