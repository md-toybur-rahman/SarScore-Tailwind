function handleAddressModal() {
    const addressModal = document.getElementById('addressModal');
    if (addressModal.classList.contains('hidden')) {
        addressModal.classList.remove('hidden');
    }
}
function HandleAddressSearchButton() {
    const addressModal = document.getElementById('addressModal');
    addressModal.classList.add('hidden');
}

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

function handleDeleteAccountModal() {
    const deleteAccountModal = document.getElementById('deleteAccountModal');
    if (deleteAccountModal.classList.contains('hidden')) {
        deleteAccountModal.classList.remove('hidden');
    }
}
function HandleDeleteAccountConfirmButton() {
    const deleteAccountModal = document.getElementById('deleteAccountModal');
    deleteAccountModal.classList.add('hidden');
}


function handleNewTicketModal() {
    const newTicketModal = document.getElementById('newTicketModal');
    if (newTicketModal.classList.contains('hidden')) {
        newTicketModal.classList.remove('hidden');
    }
}
function HandleNewTicketConfirmButton() {
    const newTicketModal = document.getElementById('newTicketModal');
    newTicketModal.classList.add('hidden');
}

function handleUserCategoryModal() {
    const changeUserCategoryModal = document.getElementById('changeUserCategoryModal');
    if (changeUserCategoryModal.classList.contains('hidden')) {
        changeUserCategoryModal.classList.remove('hidden');
    }
}
function HandleChangeUserCategoryConfirmButton() {
    const changeUserCategoryModal = document.getElementById('changeUserCategoryModal');
    changeUserCategoryModal.classList.add('hidden');
}



function changeUserCategoryModal_User_viewUser() {
    const changeUserCategoryModal_User_viewUser = document.getElementById('changeUserCategoryModal_User_viewUser');
    if (changeUserCategoryModal_User_viewUser.classList.contains('hidden')) {
        changeUserCategoryModal_User_viewUser.classList.remove('hidden');
    }
}
function HandleChangeUserCategoryConfirmButton_User_viewUser() {
    const changeUserCategoryModal_User_viewUser = document.getElementById('changeUserCategoryModal_User_viewUser');
    changeUserCategoryModal_User_viewUser.classList.add('hidden');
}



function changeUserCategoryModal_Contribution_viewUser() {
    const changeUserCategoryModal_Contribution_viewUser = document.getElementById('changeUserCategoryModal_Contribution_viewUser');
    if (changeUserCategoryModal_Contribution_viewUser.classList.contains('hidden')) {
        changeUserCategoryModal_Contribution_viewUser.classList.remove('hidden');
    }
}
function HandleChangeUserCategoryConfirmButton_Contribution_viewUser() {
    const changeUserCategoryModal_Contribution_viewUser = document.getElementById('changeUserCategoryModal_Contribution_viewUser');
    changeUserCategoryModal_Contribution_viewUser.classList.add('hidden');
}


function handleDeleteUserModal() {
    const deleteUserModal = document.getElementById('deleteUserModal');
    if (deleteUserModal.classList.contains('hidden')) {
        deleteUserModal.classList.remove('hidden');
    }
}
// function HandleDeleteUserConfirmButton() {
//     const deleteUserModal = document.getElementById('deleteUserModal');
//     deleteUserModal.classList.add('hidden');
// }

function handleDeleteConfirmationModal(id) {
    const deleteConfirmationModal = document.getElementById('deleteConfirmationModal');
    const deleteUserModal = document.getElementById('deleteUserModal');
    const closeModal = document.getElementById(id);
    deleteUserModal.classList.add('hidden');
    if (deleteConfirmationModal.classList.contains('hidden')) {
        deleteConfirmationModal.classList.remove('hidden');
    }
    setTimeout(() => {
        closeModal.classList.add('hidden')
    }, 1500);
}


function HandleCloseButton(id) {
    const closeModal = document.getElementById(id);
    closeModal.classList.add('hidden')
}