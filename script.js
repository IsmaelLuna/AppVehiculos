// Variables

//deleteAllCookies();


const addBtn = document.getElementById("add-btn");
const listBtn = document.getElementById("list-btn");
const divBody = document.getElementById("div-body");
const divPopup = document.getElementById("div-popup");
const tableBody = document.getElementById("table-body");
const tableHead = document.getElementById("table-head");
const updateNameInput = document.getElementById("update-name-input");
const updateEmailInput = document.getElementById("update-email-input");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUserId = null;
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(users==""){
  const user = {
        id: 1,
        name: "Ismael Luna",
        nick: "isma",
        password: "1234",
        role: "Administrador"
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
}

// Functions

/*function loginTable() {
  tableBody.innerHTML = "";
  
    const user = users[i];
    const tr = document.createElement("tr");
    const userTd = document.createElement("td");
    const tr = document.createElement("tr");
    const passwordlTd = document.createElement("td");
    const loginBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    idTd.innerText = user.id;
    nameTd.innerText = user.name;
    emailTd.innerText = user.email;
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";
    editBtn.addEventListener("click", () => {
      showUpdateForm(user.id);
    });
    deleteBtn.addEventListener("click", () => {
      deleteUser(user.id);
    });
    actionsTd.appendChild(editBtn);
    actionsTd.appendChild(deleteBtn);
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(emailTd);
    tr.appendChild(actionsTd);
    tableBody.appendChild(tr);

}
*/

function login(){

   divBody.innerHTML = "";
    tableHead.innerHTML = "";
  tableBody.innerHTML = "";
  //tableBody.innerHTML = "";

  
    const divUser= document.createElement("div");
    const inputName=document.createElement("input");
      
   const divPass= document.createElement("div");
    const inputPass= document.createElement("input");
    inputPass.type="password";
    const divLogin=document.createElement("div");
    const loginBtn= document.createElement("button");
  loginBtn.id = "login-btn";
   loginBtn.innerText = "Entrar";
   //  addBtn.addEventListener("click", () => {
    //  addUser();
    //});
    inputName.type = "text";
    inputName.id="usuario";
    inputName.placeholder="Usuario";
    divUser.className="Usuario";
    divUser.appendChild(inputName);
     divBody.appendChild(divUser);


    
    inputPass.id="password";
    inputPass.placeholder="Contraseña";
    divPass.className="password";
    divPass.appendChild(inputPass);
     divBody.appendChild(divPass);

     divLogin.appendChild(loginBtn);
     divBody.appendChild(divLogin);
      loginBtn.addEventListener("click", () => {
      loginValidation();
    });
}
function loginValidation(){ 
  const userInput = document.getElementById("usuario").value;
const passInput = document.getElementById("password").value;

  users.find(element =>{
    const foundName = element.nick;
  const foundPass = element.password;
 
  if(foundName == userInput && foundPass == passInput){
    
   /* var d = new Date;
    d.setTime(d.getTime() + (2 * 60 * 60 * 1000));
   document.cookie = "nombreCoockie="+ userInput +";path=/;expires=" + d.toGMTString();   */
   /*var expire=new Date();
    expire=new Date(expire.getTime()+(2 * 60 * 60 * 1000));
   document.cookie="cookiesName=aceptada; expires="+expire;
   document.cookie="roles="+ element.roles+"; expires="+expire;
*/

 divBody.innerHTML="";
   // renderTable();
//var miCookie= readCookie("cookiesName");
//console.log(miCookie);
  
sessionStorage.setItem('sessionName',element.name);
sessionStorage.setItem('sessionRole', element.role);
sessionStorage.setItem('sessionId', element.id);

var data = sessionStorage.getItem('sessionName');
var dataRole = sessionStorage.getItem('sessionRole');
var dataId = sessionStorage.getItem('sessionId');
console.log('data es:');
console.log(data);
if(data!=null){
  console.log(dataRole);
  if(dataRole=="Administrador"){
    
  updatePositionVehicle(dataId);
  renderTable();
  
}
else{
  updatePositionVehicle(dataId);
  renderTableVehicle();
  
}
document.getElementById("errorLogin").innerHTML="";
}
/*if (!document.cookie.split(";").find((item) => item.startsWith("cookiesName"))){
  console.log("encontrada cookie");
  renderTable();
  
}*/ 


   }
   else{
   document.getElementById("errorLogin").innerHTML="Acceso denegado, comprueba tu usuario y contraseña";
     
}

});
 }

function renderTable() {
 // divBody.innerHTML = "";
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";

//  if(sessionStorage.getItem('sessionRole')=="Administrador"){
  const trAddUser = document.createElement("tr");
  const tdAddUser= document.createElement("td");
  const addBtn =document.createElement("button");
  addBtn.id = "add-btn";
 addBtn.innerText = "Agregar usuario";
trAddUser.appendChild(tdAddUser);
tdAddUser.appendChild(addBtn);
    addBtn.addEventListener("click", () => {
      windowAddUser();
    });



    const tdListVhicle= document.createElement("td");
  const listBtnVehicle =document.createElement("button");
  listBtnVehicle.id = "add-btn";
 listBtnVehicle.innerText = "Ver Vehículos";
trAddUser.appendChild(tdListVhicle);
tdListVhicle.appendChild(listBtnVehicle);
    listBtnVehicle.addEventListener("click", () => {
      renderTableVehicle();
    });


    const tdCloseSession= document.createElement("td");
  const listBtnCloseSession =document.createElement("button");
  listBtnCloseSession.id = "add-btn";
 listBtnCloseSession.innerText = "Salir";
trAddUser.appendChild(tdCloseSession);
tdCloseSession.appendChild(listBtnCloseSession);
    listBtnCloseSession.addEventListener("click", () => {
      closeSession();
    });
  //}
  // const thead = document.createElement("thead");
   const tr = document.createElement("tr");
   const thId = document.createElement("th");
   const textThId = document.createTextNode("Id");
   const thName = document.createElement("th");
   const textThName = document.createTextNode("Nombre");
   const thNickname = document.createElement("th");
   const textThNickname = document.createTextNode("Usuario");
   const thRoles = document.createElement("th");
   const textThRoles = document.createTextNode("Permisos");
   const thActions = document.createElement("th");
   const textThActions = document.createTextNode("Activos");
   //thead.appendChild(trAddUser);
  // thead.appendChild(tr);
   tr.appendChild(thId);
   thId.appendChild(textThId);
   tr.appendChild(thName);
   thName.appendChild(textThName)
   tr.appendChild(thNickname);
   thNickname.appendChild(textThNickname);
   tr.appendChild(thRoles);
   thRoles.appendChild(textThRoles);
   tr.appendChild(thActions);
   thActions.appendChild(textThActions);
   if(sessionStorage.getItem('sessionRole')=="Administrador"){
   tableHead.appendChild(trAddUser);
 }

   tableHead.appendChild(tr);


    //divPass.appendChild(inputPass);
    //divLogin.appendChild(addBtn);
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const tr = document.createElement("tr");
    const idTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const nicknameTd = document.createElement("td");
    const roleTd = document.createElement("td");
    const actionsTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";

    
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    idTd.innerText = user.id;
    nameTd.innerText = user.name;
    nicknameTd.innerText=user.nick;
    roleTd.innerText=user.role;
    //emailTd.innerText = user.email;
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";
    editBtn.addEventListener("click", () => {
      windowEditUser(null,user.id);

      //showUpdateForm(user.id);
    });
    deleteBtn.addEventListener("click", () => {
      deleteUser(user.id);
    });
    
    actionsTd.appendChild(editBtn);
    //actionsTd.appendChild(addBtn);
    actionsTd.appendChild(deleteBtn);
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(nicknameTd);
    tr.appendChild(roleTd);
    tr.appendChild(actionsTd);
   
    tableBody.appendChild(tr);
  }
}




function windowAddUser(cerrar){
 
  if(cerrar!=null){
    
    const closeModalBtn2=document.getElementById("closeModal").click();
    closeModalBtn2.addEventListener("click", () => {
     closeModal();
    });
  }
  divPopup.innerHTML="";
  const divModal = document.createElement("div");
  divModal.className="jw-modal";
  divModal.id="modal-1";
  const divModalContent= document.createElement("div");
  divModalContent.className="jw-modal-body";
  const h1Modal= document.createElement("h1");
  h1ModalText=document.createTextNode("Agregar Usuarios");
  const divInputNameUser= document.createElement("div");
  const inputNameUser= document.createElement("input");
  inputNameUser.type="text";
  inputNameUser.id="nameUserAdd";
  inputNameUser.className="nameUserAdd";
  inputNameUser.placeholder="Nombre Completo";
  inputNameUser.require="required";
  const divImputNickname= document.createElement("div");
  const inputNickname= document.createElement("input");
  inputNickname.type="text";
  inputNickname.id="inputNickname";
  inputNickname.className="inputNickname";
  inputNickname.placeholder="Username"
  inputNickname.require="required";
  const divInputAddPass=document.createElement("div");
  const inputAddPass= document.createElement("input");
  inputAddPass.type="password";
  inputAddPass.id="inputAddPass";
  inputAddPass.className="inputAddPass";
  inputAddPass.placeholder="Contraseña";
  inputAddPass.require="required";
  const divSelectRole= document.createElement("div");
  const selectRole= document.createElement("select");
  selectRole.id="selectRole";
  selectRole.className="selectRole";
   const optionSelectRole=document.createElement("option");
  const optionSelectRoleText=document.createTextNode("Selecciona un permiso"); 
  optionSelectRole.value="";
  const optionSelectRole1=document.createElement("option");
  const optionSelectRole1Text=document.createTextNode("Administrador"); 
  optionSelectRole1.value="Administrador";
  const optionSelectRole2=document.createElement("option");
  const optionSelectRole2Text=document.createTextNode("User"); 
  optionSelectRole2.value="Usuario";
const addModalBtn= document.createElement("button");
addModalBtnText= document.createTextNode("Agregar");
  
  addModalBtn.addEventListener("click",addUser);
  const closeModalBtn= document.createElement("button");
  closeModalBtn.id="closeModal";
  closeModalBtn.addEventListener("click", () => {
     closeModal();
    });
   closeModalBtnText=document.createTextNode("Cerrar");
  divPopup.appendChild(divModal);
  divModal.appendChild(divModalContent);
  divModalContent.appendChild(h1Modal);
  h1Modal.appendChild(h1ModalText);
  divModalContent.appendChild(divInputNameUser);
  divInputNameUser.appendChild(inputNameUser);
  divModalContent.appendChild(divImputNickname);
  divImputNickname.appendChild(inputNickname);
  divModalContent.appendChild(divInputAddPass);
  divInputAddPass.appendChild(inputAddPass);
  divModalContent.appendChild(divSelectRole);
  divSelectRole.appendChild(selectRole);
  selectRole.appendChild(optionSelectRole);
  optionSelectRole.appendChild(optionSelectRoleText);
  selectRole.appendChild(optionSelectRole1);
  optionSelectRole1.appendChild(optionSelectRole1Text);
  selectRole.appendChild(optionSelectRole2);
  optionSelectRole2.appendChild(optionSelectRole2Text);
  addModalBtn.appendChild(addModalBtnText);
  closeModalBtn.appendChild(closeModalBtnText);
  divModalContent.appendChild(addModalBtn);
  divModalContent.appendChild(closeModalBtn);
openModal('modal-1');

function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}



// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});



}

function windowEditUser(cerrar,userId){
 
  if(cerrar!=null){
    
    const closeModalBtn2=document.getElementById("closeModal").click();
    closeModalBtn2.addEventListener("click", () => {
     closeModal();
    });
  }


  const user = users.find((user) => user.id === userId);
  const currentUserId = user.id;

  divPopup.innerHTML="";
  const divModal = document.createElement("div");
  divModal.className="jw-modal";
  divModal.id="modal-1";
  const divModalContent= document.createElement("div");
  divModalContent.className="jw-modal-body";
  const h1Modal= document.createElement("h1");
  h1ModalText=document.createTextNode("Agregar Usuarios");
  const divInputNameUser= document.createElement("div");
  const inputNameUser= document.createElement("input");
  inputNameUser.value=user.name;
  inputNameUser.type="text";
  inputNameUser.id="nameUserAdd";
  inputNameUser.className="nameUserAdd";
  inputNameUser.placeholder="Nombre Completo";
  inputNameUser.require="required";
  const divImputNickname= document.createElement("div");
  const inputNickname= document.createElement("input");
  inputNickname.type="text";
  inputNickname.id="inputNickname";
  inputNickname.className="inputNickname";
  inputNickname.placeholder="Username"
  inputNickname.require="required";
  inputNickname.value=user.nick;
  const divInputAddPass=document.createElement("div");
  const inputAddPass= document.createElement("input");
  inputAddPass.type="password";
  inputAddPass.id="inputAddPass";
  inputAddPass.className="inputAddPass";
  inputAddPass.placeholder="Contraseña";
  inputAddPass.require="required";
  inputAddPass.value=user.password;
  const divSelectRole= document.createElement("div");
  const selectRole= document.createElement("select");
  selectRole.id="selectRole";
  selectRole.className="selectRole";
   const optionSelectRole=document.createElement("option");
  const optionSelectRoleText=document.createTextNode("Selecciona un permiso"); 
  optionSelectRole.value="";
  const optionSelectRole1=document.createElement("option");
  const optionSelectRole1Text=document.createTextNode("Administrador"); 
  optionSelectRole1.value="Administrador";
  if(user.role=="Administrador"){
    optionSelectRole1.selected="selected";
  }
  const optionSelectRole2=document.createElement("option");
  const optionSelectRole2Text=document.createTextNode("User"); 
  optionSelectRole2.value="Usuario";
  if(user.role=="Usuario"){
    optionSelectRole2.selected="selected";
  }
const editModalBtn= document.createElement("button");
editModalBtnText= document.createTextNode("Editar");
  
  //editModalBtn.addEventListener("click",updateUser);

   editModalBtn.addEventListener("click", function(){
   updateUser(currentUserId);
}, false);

  const closeModalBtn= document.createElement("button");
  closeModalBtn.id="closeModal";
  closeModalBtn.addEventListener("click", () => {
     closeModal();
    });
   closeModalBtnText=document.createTextNode("Cerrar");
  divPopup.appendChild(divModal);
  divModal.appendChild(divModalContent);
  divModalContent.appendChild(h1Modal);
  h1Modal.appendChild(h1ModalText);
  divModalContent.appendChild(divInputNameUser);
  divInputNameUser.appendChild(inputNameUser);
  divModalContent.appendChild(divImputNickname);
  divImputNickname.appendChild(inputNickname);
  divModalContent.appendChild(divInputAddPass);
  divInputAddPass.appendChild(inputAddPass);
  divModalContent.appendChild(divSelectRole);
  divSelectRole.appendChild(selectRole);
  selectRole.appendChild(optionSelectRole);
  optionSelectRole.appendChild(optionSelectRoleText);
  selectRole.appendChild(optionSelectRole1);
  optionSelectRole1.appendChild(optionSelectRole1Text);
  selectRole.appendChild(optionSelectRole2);
  optionSelectRole2.appendChild(optionSelectRole2Text);
  editModalBtn.appendChild(editModalBtnText);
  closeModalBtn.appendChild(closeModalBtnText);
  divModalContent.appendChild(editModalBtn);
  divModalContent.appendChild(closeModalBtn);
openModal('modal-1');

function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}



// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});



}

function addUser() { 
const nameUserAdd = document.getElementById("nameUserAdd");
const inputNickname = document.getElementById("inputNickname");
const inputAddPass = document.getElementById("inputAddPass");
const selectRole = document.getElementById("selectRole");



  const nameus = nameUserAdd.value.trim();
  const nick = inputNickname.value.trim();
  const passus=inputAddPass.value.trim();
  const selectus=selectRole.value.trim();
 
    if(nameus && nick && passus && selectus != null){
      var id = 1;
      var val = users.map(function(x){return x.id; }).indexOf(id);
      while(val != -1){
      id++;
      val = users.map(function(x){return x.id; }).indexOf(id);
  }
      const user = {
        id: id,
        name: nameus,
        nick: nick,
        password: passus,
        role: selectus
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      nameUserAdd.value = "";
      inputNickname.value = "";
      inputAddPass.value = "";
      selectRole.value = "";
      //closeModal();
      renderTable();
      windowAddUser(1);
    }
  
}

function updateUser(currentUserId) { 
  const nameUserAdd = document.getElementById("nameUserAdd");
const inputNickname = document.getElementById("inputNickname");
const inputAddPass = document.getElementById("inputAddPass");
const selectRole = document.getElementById("selectRole");



  const nameus = nameUserAdd.value.trim();
  const nick = inputNickname.value.trim();
  const passus=inputAddPass.value.trim();
  const selectus=selectRole.value.trim();
 
    const index = users.findIndex((user) => user.id === currentUserId);
    
    if (index !== -1) {
      users[index].name = nameus;
      users[index].nick = nick;
      users[index].password = passus;
      users[index].role = selectus;
      localStorage.setItem("users", JSON.stringify(users));
      
      renderTable();
      windowEditUser(1,null);
    }
 
}

function showUpdateForm(userId) {
  const user = users.find((user) => user.id === userId);
  if (user) {
    updateNameInput.value = user.name;
    updateEmailInput.value = user.email;
    currentUserId = user.id;
    updateBtn.addEventListener("click", updateUser);
    cancelBtn.addEventListener("click", hideUpdateForm);
    updateBtn.style.display = "inline-block";
    cancelBtn.style.display = "inline-block";
    updateNameInput.style.display = "inline-block";
    updateEmailInput.style.display = "inline-block";
    document.getElementById("update-container").style.display = "block";
  }
}

function hideUpdateForm() {
  updateNameInput.value = "";
  updateEmailInput.value = "";
  currentUserId = null;
  updateBtn.removeEventListener("click", updateUser);
  cancelBtn.removeEventListener("click", hideUpdateForm);
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
  updateNameInput.style.display = "none";
  updateEmailInput.style.display = "none";
  document.getElementById("update-container").style.display = "none";
}

function deleteUser(userId) {
  users = users.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(users));
  if (users.length == 0){
    hideUpdateForm();
  };
  renderTable();
}




/* session*/

var dataSession = sessionStorage.getItem('sessionName');
var dataSessionRole=sessionStorage.getItem('sessionRole');

if(dataSession!= null){
  
  if(dataSessionRole=="Administrador"){
  renderTable();
}
else{
  renderTableVehicle();
}
}
else{

  login();
}

window.onbeforeunload = function() {
//  localStorage.removeItem(key);
sessionStorage.clear();
  return '';
};

function closeSession(){
  sessionStorage.clear();
  login();
  return '';
}  
//var nameCookie = "nombreCoockie=";




 /*   var ca = document.cookie.split(';');
    
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
    
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0){
          console.log(c.indexOf(name));
          console.log("existe cookie");
          renderTable();
        }
        else{ console.log("no existe cookie");
          login();
        }
    }
*/
