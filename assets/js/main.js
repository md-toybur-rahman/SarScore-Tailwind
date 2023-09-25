
const dropdownButtonHandler = (ListId) => {
    const List = document.getElementById(ListId);
    const ListStyle = List.style.display;
    if (ListStyle != 'flex') {
        List.style.display = 'flex';
    }
    else {
        List.style.display = 'none';
    }
}

const dropdownListHandler = (Id, ListId, value) => {
    const Value = document.getElementById(Id);
    const List = document.getElementById(ListId);
    Value.innerText = value;
    List.style.display = 'none';
}



new SlimSelect({
    select: '#selectElement'
  })


const refreshSorting = () => {
    const fromValue = document.getElementById('fromDatepicker');
    const toValue = document.getElementById('toDatepicker');
    const typeValue = document.getElementById('type');
    fromValue.value = '';
    toValue.value = '';
    typeValue.value = '';
}

// Air Datepicker function

new AirDatepicker('#fromDatepicker', {
    autoClose: true,
})
new AirDatepicker('#toDatepicker', {
    autoClose: true,
})
new AirDatepicker('#ticketDatepicker', {
    autoClose: true,
})

// Menu Button Handler

const menuButtonHandler = () => {
    const dashboard = document.getElementById('dashboard');
    const dashboardStyle = dashboard.style.width;
    const logo = document.getElementById('logo');
    const menuTitle = document.querySelectorAll(".menuTitle");
    if (dashboardStyle != '81px') {
        dashboard.style.width = '81px'
        logo.style.display = 'none';
        menuTitle.forEach(title => {
            title.style.display = 'none'
        })
    }
    else {
        dashboard.style.width = '350px'
        logo.style.display = 'block';
        menuTitle.forEach(title => {
            title.style.display = 'flex'
        })
    }
}


// Active NavLink
const header = document.getElementById("menubar");
const btns = header.getElementsByClassName("menuButton");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


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