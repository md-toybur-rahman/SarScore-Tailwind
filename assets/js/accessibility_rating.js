
// Dropdown function
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
// End Dropdown function