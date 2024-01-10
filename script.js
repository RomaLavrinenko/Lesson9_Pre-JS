let getId = (id) => document.getElementById(id);

let loginReg = /^[a-z]{4,16}$/i;
let passowrdReg = /^[\w_-]{4,16}$/i;
let emailReg = /^\w*@gmail\.com$/i;
let createDiv;
let loginTest, passwordTest, emailTest;
let countID = 0;
getId('addUser').addEventListener('click', addUser);
function addUser() {

    loginTest = loginReg.test(getId('userLogin').value);
    passwordTest = passowrdReg.test(getId('userPassword').value);
    emailTest = emailReg.test(getId('userEmail').value);
    if (loginTest && passwordTest && emailTest) {
        countID++;
        createDiv = document.createElement('div');
        createDiv.classList.add('create');
        let creatId = document.createElement('span');
        creatId.textContent = countID;
        let creatLogin = document.createElement('span');
        creatLogin.textContent = getId('userLogin').value;
        let creatPassword = document.createElement('span');
        creatPassword.textContent = getId('userPassword').value;
        let creatEmail = document.createElement('span');
        creatEmail.textContent = getId('userEmail').value;
        let creatEdit = document.createElement('button');
        creatEdit.textContent = 'Edit';
        creatEdit.style.width = '60px';
        creatEdit.style.height = '30px';
        creatEdit.classList.add('edit');
        let creatDelete = document.createElement('button');
        creatDelete.textContent = 'Delete';
        creatDelete.style.width = '90px';
        creatDelete.style.height = '30px';
        creatDelete.classList.add('delete');
        createDiv.append(creatId, creatLogin, creatPassword, creatEmail, creatEdit, creatDelete);
        document.querySelector('.right-bot').append(createDiv);
        let f1 = document.forms.f1;
        f1.reset();
    }
    else {
        alert("Заповніть правильно всі поля")
    }
}

document.querySelector('.right-bot').addEventListener('click', deleteUser);
function deleteUser(event) {

    if (event.target.className == 'delete') {
        let addDelete = event.target.closest("div");
        addDelete.remove();
    }
}
let addEdit;
document.querySelector('.right-bot').addEventListener('click', editUser);
function editUser(event) {
    if (event.target.className == 'edit') {
        addEdit = event.target.closest("div");
        getId('userLogin').value = addEdit.children[1].textContent;
        getId('userPassword').value = addEdit.children[2].textContent;
        getId('userEmail').value = addEdit.children[3].textContent;
        getId('addUser').style.display = 'none';
        getId('editUser').style.display = 'block';
       
    }
    
}
getId('editUser').addEventListener('click', addEditUser);
function addEditUser() {
    loginTest = loginReg.test(getId('userLogin').value);
    passwordTest = passowrdReg.test(getId('userPassword').value);
    emailTest = emailReg.test(getId('userEmail').value);
    if (loginTest && passwordTest && emailTest) {
        addEdit.children[1].textContent = getId('userLogin').value ;
        addEdit.children[2].textContent = getId('userPassword').value;
        addEdit.children[3].textContent = getId('userEmail').value;
        getId('addUser').style.display = 'block';
        getId('editUser').style.display = 'none';
        f1.reset();

    }
    else {
        alert("Заповніть правильно всі поля")
    }
}

