const handleFromButton = () => {
    const fromList = document.getElementById('fromList');
    const fromListStyle = fromList.style.display;
    if(fromListStyle != 'flex'){
        fromList.style.display = 'flex';
    }
    else{
        fromList.style.display = 'none';
    }
}

const handleFromList = (value) => {
    const fromValue = document.getElementById('from');
    const fromList = document.getElementById('fromList');
    fromValue.innerText = value;
    fromList.style.display = 'none';
}
const handleToButton = () => {
    const toList = document.getElementById('toList');
    const toListStyle = toList.style.display;
    if(toListStyle != 'flex'){
        toList.style.display = 'flex';
    }
    else{
        toList.style.display = 'none';
    }
}

const handleToList = (value) => {
    const toValue = document.getElementById('to');
    const toList = document.getElementById('toList');
    toValue.innerText = value;
    toList.style.display = 'none';
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