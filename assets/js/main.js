function accessibilityDropdownHandler (id, arrow) {
    const dropdownContainer = document.getElementById(id);
    const dropdownArrow = document.getElementById(arrow);
    if(!dropdownArrow.classList.contains('rotate-180')){
        dropdownArrow.classList.add('rotate-180');
        dropdownContainer.classList.remove('h-0');
        dropdownContainer.classList.add('h-auto');
        dropdownContainer.classList.add('py-[23px]');
    }
    else{
        dropdownArrow.classList.remove('rotate-180')
        dropdownContainer.classList.add('h-0');
        dropdownContainer.classList.remove('h-auto');
        dropdownContainer.classList.remove('py-[23px]');
    }
}

function showPasswordHandler () {
    const show = document.getElementById('show');
    const hide = document.getElementById('hide');
    const password = document.getElementById('password')
    if(show.classList.contains('hidden')) {
        hide.classList.add('hidden');
        show.classList.remove('hidden');
        password.type= "text";

    }
    else{
        hide.classList.remove('hidden');
        show.classList.add('hidden');
        password.type= "password";

    }
}

function dropdownMouseOver (event) {
    const dropdownContent = event.parentNode.getElementsByClassName('dropdown-content')[0];
    dropdownContent.classList.add('hidden')
}
function dropdownToggleHandler(event) {
    const dropdownContent = event.parentNode.getElementsByClassName('dropdown-content')[0];
    if(dropdownContent.classList.contains('hidden')) {
        dropdownContent.classList.remove('hidden');
    }
    else {
        dropdownContent.classList.add('hidden');
    }
}

function dropdownPositionHandler(id) {
    const tbody = document.getElementById(id);
    const dropdown = tbody.getElementsByClassName('dropdown');
    dropdown[0].classList.remove('dropdown-top');
    dropdown[1].classList.remove('dropdown-top');
    dropdown[dropdown.length - 1].classList.add('dropdown-top');
    dropdown[dropdown.length - 2].classList.add('dropdown-top')
    dropdown[dropdown.length - 3].classList.add('dropdown-top')
}


function HandleInputChanger(contentId, inputId) {
    const phoneNumber = document.getElementById(contentId);
    const phoneNumberInput = document.getElementById(inputId);
    phoneNumberInput.value = phoneNumber.textContent;
    phoneNumber.classList.add('hidden');
    phoneNumberInput.classList.remove('hidden');
    phoneNumberInput.focus();
}

function ChangeInputFieldValue(inputValue, contentId, inputId) {
    const phoneNumber = document.getElementById(contentId);
    const phoneNumberInput = document.getElementById(inputId);
    phoneNumber.textContent = inputValue;
    phoneNumber.classList.remove('hidden');
    phoneNumberInput.classList.add('hidden');
}
function HandlePassword(passwordId, inputId) {
    const password = document.getElementById(passwordId);
    const passwordInput = document.getElementById(inputId);
    passwordInput.value = password.value;
    password.classList.add('hidden');
    passwordInput.classList.remove('hidden');
    passwordInput.focus();
}

function changePasswordField(inputValue, passwordId, inputId) {
    const password = document.getElementById(passwordId);
    const passwordInput = document.getElementById(inputId);
    password.value = inputValue;
    password.classList.remove('hidden');
    passwordInput.classList.add('hidden');
}
function handleToggle(containerId, id) {
    const toggleContainer = document.getElementById(containerId);
    const toggle = document.getElementById(id);
    if (toggleContainer.classList.contains('toggle-deactivate-container')) {
        toggleContainer.classList.remove('toggle-deactivate-container');
        toggleContainer.classList.add('toggle-activate-container');
        toggle.classList.remove('toggle-deactivate');
        toggle.classList.add('toggle-activate');
    }
    else {
        toggleContainer.classList.add('toggle-deactivate-container');
        toggleContainer.classList.remove('toggle-activate-container');
        toggle.classList.add('toggle-deactivate');
        toggle.classList.remove('toggle-activate');
    }
}

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

function menuButtonHandler() {
    const dashboard = document.getElementById('dashboard');
    // const dashboardStyle = dashboard.style.width;
    const logo = document.getElementById('logo');
    const menuTitle = document.querySelectorAll(".menuTitle");
    const menuButton = document.querySelectorAll(".menuButton");
    if (dashboard.classList.contains('min-w-[280px]')) {
        dashboard.classList.remove('min-w-[280px]');
        dashboard.classList.add('w-[81px]');
        logo.style.display = 'none';
        menuTitle.forEach(title => {
            title.style.display = 'none'
        })
        menuButton.forEach(button => {
            button.classList.add('justify-center')
        })
    }
    else {
        dashboard.classList.remove('w-[81px]');
        dashboard.classList.add('min-w-[280px]');
        logo.style.display = 'block';
        menuTitle.forEach(title => {
            title.style.display = 'flex'
        })
        menuButton.forEach(button => {
            button.classList.remove('justify-center')
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

