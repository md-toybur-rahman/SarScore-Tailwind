


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

new AirDatepicker('#fromDatepicker', {
    autoClose: true,
})
new AirDatepicker('#toDatepicker', {
    autoClose: true,
})
new AirDatepicker('#ticketDatepicker', {
    autoClose: true,
})