const handlePriorityButton = () => {
    const priorityList = document.getElementById('priorityList');
    const priorityListStyle = priorityList.style.display;
    if(priorityListStyle != 'flex'){
        priorityList.style.display = 'flex';
    }
    else{
        priorityList.style.display = 'none';
    }
}

const handlePriorityList = (value) => {
    const priorityValue = document.getElementById('priority');
    const priorityList = document.getElementById('priorityList');
    priorityValue.innerText = value;
    priorityList.style.display = 'none';
}
const handleCategoryButton = () => {
    const categoryList = document.getElementById('categoryList');
    const categoryListStyle = categoryList.style.display;
    if(categoryListStyle != 'flex'){
        categoryList.style.display = 'flex';
    }
    else{
        categoryList.style.display = 'none';
    }
}

const handleCategoryList = (value) => {
    const categoryValue = document.getElementById('category');
    const categoryList = document.getElementById('categoryList');
    categoryValue.innerText = value;
    categoryList.style.display = 'none';
}
const handleSupportTypeButton = () => {
    const supportTypeList = document.getElementById('supportTypeList');
    const supportTypeListStyle = supportTypeList.style.display;
    if(supportTypeListStyle != 'flex'){
        supportTypeList.style.display = 'flex';
    }
    else{
        supportTypeList.style.display = 'none';
    }
}

const handleToList = (value) => {
    const supportTypeValue = document.getElementById('support-type');
    const supportTypeList = document.getElementById('supportTypeList');
    supportTypeValue.innerText = value;
    supportTypeList.style.display = 'none';
}
const handleTypeButton = () => {
    const typeList = document.getElementById('typeList');
    const typeListStyle = typeList.style.display;
    if(typeListStyle != 'flex'){
        typeList.style.display = 'flex';
    }
    else{
        typeList.style.display = 'none';
    }
}

const handleTypeList = (value) => {
    const typeValue = document.getElementById('type');
    const typeList = document.getElementById('typeList');
    typeValue.innerText = value;
    typeList.style.display = 'none';
}

const refreshSorting = () => {
    const fromValue = document.getElementById('from');
    const toValue = document.getElementById('to');
    const typeValue = document.getElementById('type');
    fromValue.innerText = 'From:';
    toValue.innerText = 'To:';
    typeValue.innerText = 'Type:';
}