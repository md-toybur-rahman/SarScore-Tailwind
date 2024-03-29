const ticketList = document.getElementById('supportTicketTbody');
const singleTicket = ticketList.getElementsByTagName('td');
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

function menuButtonHandler2() {
    const dashboard = document.getElementById('dashboard');
    // const dashboardStyle = dashboard.style.width;
    const logo = document.getElementById('logo');
    const menuTitle = document.querySelectorAll(".menuTitle");
    const menuButton = document.querySelectorAll(".menuButton");
    const hamburg = document.getElementById("hamburg");
    if (dashboard.classList.contains('min-w-[280px]')) {
        dashboard.classList.remove('min-w-[280px]');
        dashboard.classList.add('w-[81px]');
        logo.style.display = 'none';
        hamburg.classList.add('mx-auto');
        menuTitle.forEach(title => {
            title.style.display = 'none';
        })
        menuButton.forEach(button => {
            button.classList.add('justify-center');
        })
    }
    else {
        dashboard.classList.remove('w-[81px]');
        dashboard.classList.add('min-w-[280px]');
        logo.style.display = 'block';
        hamburg.classList.remove('mx-auto');
        menuTitle.forEach(title => {
            title.style.display = 'flex';
        })
        menuButton.forEach(button => {
            button.classList.remove('justify-center');
        })
    }
}