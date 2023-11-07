const verificationChart = document.getElementById('verification-chart');

new Chart(verificationChart, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'My First Dataset',
            data: [30, 20, 50],
            backgroundColor: [
                '#28C66F',
                '#6259CE',
                '#63E2F1'
            ],
            hoverOffset: 4
        }]
    }
})