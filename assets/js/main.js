function handleChangeStatusModal() {
    const changeStatusModal = document.getElementById('changeStatusModal');
    if (changeStatusModal.classList.contains('hidden')) {
        changeStatusModal.classList.remove('hidden');
    }
}
function HandleChangeStatusConfirmButton() {
    const changeStatusModal = document.getElementById('changeStatusModal');
    changeStatusModal.classList.add('hidden');
}
function handleUserCategoryModal () {
    const changeUserCategoryModal = document.getElementById('changeUserCategoryModal');
    if (changeUserCategoryModal.classList.contains('hidden')) {
        changeUserCategoryModal.classList.remove('hidden');
    }
}
function HandleChangeUserCategoryConfirmButton() {
    const changeUserCategoryModal = document.getElementById('changeUserCategoryModal');
    changeUserCategoryModal.classList.add('hidden');
}
function changeUserCategoryModal_viewUser () {
    const changeUserCategoryModal_viewUser = document.getElementById('changeUserCategoryModal_viewUser');
    if (changeUserCategoryModal_viewUser.classList.contains('hidden')) {
        changeUserCategoryModal_viewUser.classList.remove('hidden');
    }
}
function HandleChangeUserCategoryConfirmButton_viewUser() {
    const changeUserCategoryModal_viewUser = document.getElementById('changeUserCategoryModal_viewUser');
    changeUserCategoryModal_viewUser.classList.add('hidden');
}
function handleDeleteUserModal () {
    const deleteUserModal = document.getElementById('deleteUserModal');
    if (deleteUserModal.classList.contains('hidden')) {
        deleteUserModal.classList.remove('hidden');
    }
}
function HandleDeleteUserConfirmButton() {
    const deleteUserModal = document.getElementById('deleteUserModal');
    deleteUserModal.classList.add('hidden');
}
function HandleCloseButton(id) {
    const closeModal = document.getElementById(id);
    closeModal.classList.add('hidden')
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
    const dashboardStyle = dashboard.style.width;
    const logo = document.getElementById('logo');
    const menuTitle = document.querySelectorAll(".menuTitle");
    const menuButton = document.querySelectorAll(".menuButton");
    if (dashboardStyle != '81px') {
        dashboard.style.width = '81px'
        logo.style.display = 'none';
        menuTitle.forEach(title => {
            title.style.display = 'none'
        })
        menuButton.forEach(button => {
            button.classList.add('justify-center')
        })
    }
    else {
        dashboard.style.width = '350px'
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

