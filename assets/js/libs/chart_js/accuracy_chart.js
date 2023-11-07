const accuracyChart = document.getElementById('accuracy-chart');

new Chart(accuracyChart, {
    type: 'bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Daily',
                data: [70, 90, 86, 95],
                borderWidth: 1,
                backgroundColor: [
                    '#39CCCC',
                    '#484E80',
                    '#A960D6',
                    '#60D684',
                ],
                borderRadius: 20,
                barThickness: 12
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
        }
    }
});