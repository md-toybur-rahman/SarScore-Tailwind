const registrationsChart = document.getElementById('registrations-chart');

new Chart(registrationsChart, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt'],
        datasets: [
            {
                label: 'Daily',
                data: [600, 400, 500, 100, 600, 550, 650, 700, 500],
                borderWidth: 1,
                backgroundColor: '#39CCCC',
                borderRadius: 20,
                barThickness: 12
            },
            {
                label: 'Weekly',
                data: [750, 500, 650, 550, 500, 400, 400, 500, 700],
                borderWidth: 1,
                backgroundColor: '#484E80',
                borderRadius: 20,
                barThickness: 12
            },
            {
                label: 'Monthly',
                data: [300, 700, 400, 450, 550, 650, 750, 600, 650],
                borderWidth: 1,
                backgroundColor: '#A960D6',
                borderRadius: 20,
                barThickness: 12

            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});
const accessibilityChart = document.getElementById('accessibility-chart');

new Chart(accessibilityChart, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Daily',
                data: [20, 35, 15, 5, 30, 45, 10, 25, 50, 40, 15, 35],
                borderWidth: 1,
                backgroundColor: '#484E80',
                borderRadius: 5,
                barThickness: 25
            },
            {
                label: 'Weekly',
                data: [35, 15, 40, 50, 25, 10, 45, 30, 5, 15, 35, 20],
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
            }
        }
    }
});