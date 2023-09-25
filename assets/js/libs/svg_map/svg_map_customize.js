new svgMap({
    targetElementID: 'svgMap',
    data: {
        data: {
            gdp: {
                name: 'GDP per capita',
                format: '{0} USD',
                thousandSeparator: ',',
                thresholdMax: 50000,
                thresholdMin: 1000
            },
            change: {
                name: 'Change to year before',
                format: '{0} %'
            }
        },
        applyData: 'gdp',
        values: {
            US: { gdp: 587, change: 4.73, color: '#36D399' },
            AU: { gdp: 4583, change: 11.09, color: '#3ABFF8' },
            BD: { gdp: 4293, change: 10.01, color: '#F000B8' },
            // ...
        }
    }
});