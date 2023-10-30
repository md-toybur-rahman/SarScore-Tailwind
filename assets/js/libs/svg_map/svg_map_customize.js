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
            US: { gdp: 587, change: 4.73, color: '#60D684' },
            AU: { gdp: 4583, change: 11.09, color: '#39CCCC' },
            CN: { gdp: 4293, change: 10.01, color: '#A960D6' },
            DZ: { gdp: 4293, change: 10.01, color: '#484E80' },
            // ...
        }
    }
});

new svgMap({
    targetElementID: 'heatSvgMap',
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
            US: { gdp: 587, change: 4.73, color: '#28C66F' },
            AU: { gdp: 4583, change: 11.09, color: '#484E80' },
            CN: { gdp: 4293, change: 10.01, color: '#EC5453' },
            DZ: { gdp: 4293, change: 10.01, color: '#FFAB00' },
            // ...
        }
    }
});