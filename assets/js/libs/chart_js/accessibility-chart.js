const accessibilityChart = document.getElementById('accessibility-chart');

new Chart(accessibilityChart, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Daily',
                data: [20, 35, 15, 5, 30, 45, 10, 25, 45, 40, 15, 35],
                borderWidth: 1,
                backgroundColor: '#484E80',
                borderRadius: 5,
                barThickness: 10
            },
            {
                label: 'Weekly',
                data: [35, 15, 40, 40, 25, 10, 45, 30, 5, 15, 35, 20],
                borderWidth: 1,
                backgroundColor: '#39CCCC',
                borderRadius: 5,
                barThickness: 10
            },
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 50
            },
        }
    }
});

const accessibilityChart2 = document.getElementById('accessibility-chart2');
new Chart(accessibilityChart2, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Daily',
                data: [20, 35, 15, 5, 30, 45, 10, 25, 45, 40, 15, 35],
                borderWidth: 1,
                backgroundColor: '#484E80',
                borderRadius: 5,
                barThickness: 25
            },
            {
                label: 'Weekly',
                data: [35, 15, 40, 40, 25, 10, 45, 30, 5, 15, 35, 20],
                borderWidth: 1,
                backgroundColor: '#39CCCC',
                borderRadius: 5,
                barThickness: 25
            },
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 50
            },
        }
    }
});