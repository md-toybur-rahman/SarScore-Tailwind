const ticketList = document.getElementById('ticketList');
const singleTicket = ticketList.getElementsByTagName('tr');
for (let i = 0; i < singleTicket.length; i++) {
    const element = singleTicket[i];

    element.addEventListener('click', function () {
        const ticketContainer = document.getElementById('supportTicketContainer');
        const singleTicket = document.getElementById('singlePage');
        ticketContainer.style.display = 'none';
        singleTicket.style.display = 'block';
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })
}

function handleBackButton() {
    const ticketContainer = document.getElementById('supportTicketContainer');
    const singleTicket = document.getElementById('singlePage');
    ticketContainer.style.display = 'block';
    singleTicket.style.display = 'none';
}


function optionActivate(id) {
    const buttonContainer = document.getElementById('buttonTest');
    const selectedButton = document.getElementById(id)
    const allButtons = buttonContainer.getElementsByTagName('button');
    for (let i = 0; i < allButtons.length; i++) {
        const element = allButtons[i];
        element.classList.remove('bg-[#39CCCC]')
    }
    selectedButton.classList.add('bg-[#39CCCC]')

}


function handleTicketMenu() {
    const menuContainer = document.getElementById('ticketMenu');
    const ticketArrow = document.getElementById('ticketArrow');
    if (menuContainer.classList.contains('h-[150px]')) {
        menuContainer.classList.remove('h-[150px]');
        menuContainer.style.height = 'auto';
        ticketArrow.style.rotate = '180deg';
    }
    else {
        menuContainer.classList.add('h-[150px]');
        menuContainer.style.height = '150px';
        ticketArrow.style.rotate = '0deg'
    }
}

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
const menuButtonHandler2 = () => {
    const dashboard = document.getElementById('dashboard');
    const dashboardStyle = dashboard.style.width;
    const logo = document.getElementById('logo');
    const menuTitle = document.querySelectorAll(".menuTitle");
    if (dashboardStyle != '350px') {
        dashboard.style.width = '350px'
        logo.style.display = 'block';
        menuTitle.forEach(title => {
            title.style.display = 'flex'
        })
    }
    else {
        dashboard.style.width = '81px'
        logo.style.display = 'none';
        menuTitle.forEach(title => {
            title.style.display = 'none'
        })
    }
}
// End Menu Button Handler

// Mobile Menu button handler
function mobileMenuButtonHandler() {
    const menubar = document.getElementById('mobile_menubar');
    if (menubar.style.left != '0px') {
        menubar.style.left = '0px'
    }
    else {
        menubar.style.left = '-288px'
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

