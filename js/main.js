const el = document.getElementById('wrapper');
const toggleButton = document.getElementById('menu-toggle');


toggleButton.addEventListener('click', () => {
    el.classList.toggle('toggled');
});
 
 // Tables sorting 
  $(document).ready(function() {
    $('#example').DataTable( {
        "scrollX": true
    } );
} );




const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: '# of Sales per day',
            data: [80, 87, 93, 55, 67, 90, 86],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.3)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('visits').getContext('2d');


const visits = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Direct', 'Social', 'Search engine', 'Referral', 'Other'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(46, 204, 113, 0.3)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(255, 99, 132, 0.9)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(46, 204, 113, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      }
    ]
  },
  
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Store Visits by Source'
      }
    }
  },
});

