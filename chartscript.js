Papa.parse('netflix_series_edited.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,
 
  complete: function(results) {
 
    const labels = [];
    const values = [];
 
    results.data.forEach(row => {
      labels.push(row.country);
      values.push(cleanNumber(row.count));
    });
 
    new Chart(
      document.getElementById('revenueChart'),
      {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Number of Netflix Titles',
            data: values,
            backgroundColor: '#4e79a7'
          }]
        },
        options: {
          scales: {
            y: {
              type: 'linear',
              title: {
                display: true,
                text: 'Number of Netflix Titles'
              }
            }
          }
        }
      }
    );
  }
});
function cleanNumber(value) {
  return Number(
    String(value).replace(/[^0-9.-]/g, '')
  );
}
