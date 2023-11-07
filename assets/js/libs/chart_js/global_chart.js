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