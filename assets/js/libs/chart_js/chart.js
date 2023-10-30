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
                // barThickness: 12
            },
            {
                label: 'Weekly',
                data: [750, 500, 650, 550, 500, 400, 400, 500, 700],
                borderWidth: 1,
                backgroundColor: '#484E80',
                borderRadius: 20,
                // barThickness: 12
            },
            {
                label: 'Monthly',
                data: [300, 700, 400, 450, 550, 650, 750, 600, 650],
                borderWidth: 1,
                backgroundColor: '#A960D6',
                borderRadius: 20,
                // barThickness: 12

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

const globalChart = document.getElementById('global-chart');

new Chart(globalChart, {
    type: 'bar',
    data: {
        datasets: [
            {
                // label: 'Daily',
                data: [{ id: 50, value: 'Time To Access From Vehicle' }, { id: 45, value: 'Parking Availability' }, { id: 46, value: 'Wheelchair Access' }, { id: 40, value: 'Road And Terrain Conditions' }, { id: 30, value: 'Building Type And Elevation' }, { id: 20, value: 'Exposure To Elements' }, { id: 30, value: 'Lift Availability' }, { id: 50, value: 'Risk Of Parking Penalties' }, { id: 55, value: 'ULEZ' }, { id: 25, value: 'Congestion Charge Zone' }, { id: 48, value: 'Public Transportation Access' }, { id: 27, value: 'Building Type' }, { id: 5, value: 'Sidewalk Conditions' }, { id: 70, value: 'Safety And Security' }, { id: 20, value: 'Signage And Way-Finding' },],
                borderWidth: 1,
                backgroundColor: [
                    '#FFAB00',
                    '#60D684',
                    '#484E80',
                    '#A960D6',
                    '#39CCCC',
                    '#656565',
                    '#EC5453',
                    '#1E1E1E',
                    '#48804A',
                    '#28A8C6',
                    '#804848',
                    '#98A3FF',
                    '#EA6CC8',
                    '#F4C459',
                    '#ACB76F'

                ],
                borderRadius: 20,
                barThickness: 10
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        parsing: {
            xAxisKey: 'id',
            yAxisKey: 'value',

        },
        indexAxis: 'y',
        scales: {
            x: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 100
            },
        }
    },
});