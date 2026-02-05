const ctx = document.getElementById('stocksChart').getContext('2d');
const dataCoke = [17, 1, 9, 0, 13, 10];
const dataPepsi = [9, 13, 5, 5, 10, 20];

const stocksChart = new Chart(ctx, {
    type: 'line',  // This makes it a line graph
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // X-axis labels
        datasets: [
          {
            label: 'Coca-Cola | Shares',  // Legend label
            data: dataCoke,  // Y-axis values (your dummy data)
            borderColor: 'rgb(255, 0, 0)',  // Line color
            tension: 0.1  // Makes the line slightly curved
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
        scales: {
          x: {
            title: {
              display: true,
              text: `Months | Current Value in ${dataCoke.at(-1)}$ USD`
            }
          },
          y: {
          title: {
            display: true,
            text: 'Number of Shares'
            }
          }
        }
      }
});

const ctx2 = document.getElementById('stocksChart2').getContext('2d');


const stocksChart2 = new Chart(ctx2, {
    type: 'line',  // This makes it a line graph
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // X-axis labels
        datasets: [
          {
            label: 'Pepsi | Shares',  // Legend label
            data: dataPepsi,  // Y-axis values (your dummy data)
            borderColor: 'rgb(0, 103, 246)',  // Line color
            tension: 0.1  // Makes the line slightly curved
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
        scales: {
          x: {
            title: {
              display: true,
              text: `Months | Current Value in ${dataPepsi.at(-1)}$ USD`
            }
          },
          y: {
          title: {
            display: true,
            text: 'Number of Shares'
            }
          }
        }
      }
});
