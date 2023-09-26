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

// Refresh Button Handler
const refreshSorting = () => {
    const fromValue = document.getElementById('fromDatepicker');
    const toValue = document.getElementById('toDatepicker');
    const typeValue = document.getElementById('selectElement');
    fromValue.value = '';
    toValue.value = '';
    typeValue.value = '';
}
// End Refresh Button Handler


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
// End Menu Button Handler

// Mobile Menu button handler
const mobileMenuButtonHandler = () => {
    const menubar = document.getElementById('mobile_menubar');
    if(menubar.style.right != '0px'){
        // menubar.classList.add('right-0');
        // menubar.classList.remove('-right-72');
        menubar.style.right = '0px'
    }
    else{
        // menubar.classList.remove('right-0');
        // menubar.classList.add('-right-72');
        menubar.style.right = '-288px'
    }
}
// End Mobile Menu button handler

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
// End Active NavLink
// Active NavLink
const mobile_header = document.getElementById("mobile_menubar");
const mobile_btns = header.getElementsByClassName("mobile_menuButton");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
// End Active NavLink

