


const handlePriorityButton = () => {
    const priorityList = document.getElementById('priorityList');
    const priorityListStyle = priorityList.style.display;
    if (priorityListStyle != 'flex') {
        priorityList.style.display = 'flex';
    }
    else {
        priorityList.style.display = 'none';
    }
}

const handlePriorityList = (value) => {
    const priorityValue = document.getElementById('priority');
    const priorityList = document.getElementById('priorityList');
    priorityValue.value = value;
    priorityList.style.display = 'none';
}
const handleCategoryButton = () => {
    const categoryList = document.getElementById('categoryList');
    const categoryListStyle = categoryList.style.display;
    if (categoryListStyle != 'flex') {
        categoryList.style.display = 'flex';
    }
    else {
        categoryList.style.display = 'none';
    }
}

const handleCategoryList = (value) => {
    const categoryValue = document.getElementById('category');
    const categoryList = document.getElementById('categoryList');
    categoryValue.value = value;
    categoryList.style.display = 'none';
}
const handleSupportTypeButton = () => {
    const supportTypeList = document.getElementById('supportTypeList');
    const supportTypeListStyle = supportTypeList.style.display;
    if (supportTypeListStyle != 'flex') {
        supportTypeList.style.display = 'flex';
    }
    else {
        supportTypeList.style.display = 'none';
    }
}

const handleSupportTypeList = (value) => {
    const supportTypeValue = document.getElementById('support-type');
    const supportTypeList = document.getElementById('supportTypeList');
    supportTypeValue.value = value;
    supportTypeList.style.display = 'none';
}
const handleTypeButton = () => {
    const typeList = document.getElementById('typeList');
    const typeListStyle = typeList.style.display;
    if (typeListStyle != 'flex') {
        typeList.style.display = 'flex';
    }
    else {
        typeList.style.display = 'none';
    }
}

const handleTypeList = (value) => {
    const typeValue = document.getElementById('type');
    const typeList = document.getElementById('typeList');
    typeValue.value = value;
    typeList.style.display = 'none';
}

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
            US: { gdp: 587, change: 4.73, color: 'green' },
            AU: { gdp: 4583, change: 11.09, color: 'red' },
            BD: { gdp: 4293, change: 10.01, color: 'blue' },
            // ...
        }
    }
});