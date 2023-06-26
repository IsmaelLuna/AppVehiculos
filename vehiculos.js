const addBtnVehicle = document.getElementById("add-btn");
const listBtnVehicle = document.getElementById("list-btn");
const updateBtnVehicle = document.getElementById("update-btn");
const cancelBtnVehicle = document.getElementById("cancel-btn");
let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
let currentVehicleId = null;





/* vehiculos */
function renderTableVehicle() {
 // divBody.innerHTML = "";
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";

//  if(sessionStorage.getItem('sessionRole')=="Administrador"){
  const trAddVehicle = document.createElement("tr");
  const tdAddVehicle= document.createElement("td");
  const addBtnVehicle =document.createElement("button");
  addBtnVehicle.id = "add-btn";
 addBtnVehicle.innerText = "Agregar Vehiculo";
trAddVehicle.appendChild(tdAddVehicle);
tdAddVehicle.appendChild(addBtnVehicle);
    addBtnVehicle.addEventListener("click", () => {
      windowAddVehicle();
    });



var dataRole = sessionStorage.getItem('sessionRole');
if(dataRole!="Administrador"){
  const tdCloseSession= document.createElement("td");
  const listBtnCloseSession =document.createElement("button");
  listBtnCloseSession.id = "add-btn";
 listBtnCloseSession.innerText = "Salir";
trAddVehicle.appendChild(tdCloseSession);
tdCloseSession.appendChild(listBtnCloseSession);
    listBtnCloseSession.addEventListener("click", () => {
      closeSession();
    });
}
    if(dataRole=="Administrador"){
    const tdListVhicle= document.createElement("td");

  const listBtnVehicle =document.createElement("button");
  listBtnVehicle.id = "add-btn";
 listBtnVehicle.innerText = "Ver Vehículos";
trAddVehicle.appendChild(tdListVhicle);
tdListVhicle.appendChild(listBtnVehicle);
    listBtnVehicle.addEventListener("click", () => {
      renderTableVehicle();
    });


    const tdListUsers= document.createElement("td");
  const listBtnUsers =document.createElement("button");
  listBtnUsers.id = "add-btn";
 listBtnUsers.innerText = "Ver Usuarios";
trAddVehicle.appendChild(tdListUsers);
tdListUsers.appendChild(listBtnUsers);
    listBtnUsers.addEventListener("click", () => {
      renderTable();
    });
    const tdCloseSession= document.createElement("td");
  const listBtnCloseSession =document.createElement("button");
  listBtnCloseSession.id = "add-btn";
 listBtnCloseSession.innerText = "Salir";
trAddVehicle.appendChild(tdCloseSession);
tdCloseSession.appendChild(listBtnCloseSession);
    listBtnCloseSession.addEventListener("click", () => {
      closeSession();
    });
  }
  //}
  // const thead = document.createElement("thead");
   const tr = document.createElement("tr");
   const thId = document.createElement("th");
   const textThId = document.createTextNode("Id");
   const thMarca = document.createElement("th");
   const textThMarca = document.createTextNode("Marca");
   const thModelo = document.createElement("th");
   const textThModelo = document.createTextNode("Modelo");
   const thAnio = document.createElement("th");
   const textThAnio = document.createTextNode("Año");
   const thUser = document.createElement("th");
   const textThUser = document.createTextNode("Usuario");
   const thActions = document.createElement("th");
   const textThActions = document.createTextNode("Activos");
   //thead.appendChild(trAddUser);
  // thead.appendChild(tr);
   tr.appendChild(thId);
   thId.appendChild(textThId);
   tr.appendChild(thMarca);
   thMarca.appendChild(textThMarca)
   tr.appendChild(thModelo);
   thModelo.appendChild(textThModelo);
   tr.appendChild(thAnio);
   thAnio.appendChild(textThAnio);
   tr.appendChild(thUser);
   thUser.appendChild(textThUser);
   tr.appendChild(thActions);
   thActions.appendChild(textThActions);
   //if(sessionStorage.getItem('sessionRole')=="Administrador"){
   tableHead.appendChild(trAddVehicle);
 //}
   tableHead.appendChild(tr);


    //divPass.appendChild(inputPass);
    //divLogin.appendChild(addBtn);
var dataRole = sessionStorage.getItem('sessionRole');
var dataId = sessionStorage.getItem('sessionId');
  for (let i = 0; i < vehicles.length; i++) {
     const vehicle = vehicles[i];
     console.log("vehiculo id es: ");
     console.log(vehicle.id);
    if(dataRole!="Administrador"){

      if(vehicle.user==dataId){
   
    const tr = document.createElement("tr");
    const idTd = document.createElement("td");
    const marcaTd = document.createElement("td");
    const modeloTd = document.createElement("td");
    const anioTd = document.createElement("td");
    const userTd = document.createElement("td");
    const actionsTd = document.createElement("td");
    const positionBtnVehicle = document.createElement("button");
    positionBtnVehicle.className = "position-btn";
    const editBtnVehicle = document.createElement("button");
    editBtnVehicle.className = "edit-btn";

    
    const deleteBtnVehicle = document.createElement("button");
    deleteBtnVehicle.className = "delete-btn";
    idTd.innerText = vehicle.id;
    marcaTd.innerText = vehicle.marca;
    modeloTd.innerText=vehicle.modelo;
    anioTd.innerText=vehicle.anio;
    
  users.find(element =>{
    const userId = element.id;
  //const foundPass = element.password;
 if(userId == vehicle.user ){
  nameUser= element.name;
 }
});
    
    userTd.innerText=nameUser;
    //emailTd.innerText = user.email;
    positionBtnVehicle.innerText = "Ver Posición";
    editBtnVehicle.innerText = "Edit";
    deleteBtnVehicle.innerText = "Delete";
    positionBtnVehicle.addEventListener("click", () => {
      windowPositionVehicle(vehicle.id);

      //showUpdateForm(user.id);
    });
    editBtnVehicle.addEventListener("click", () => {
      windowEditVehicle(null,vehicle.id);

      //showUpdateForm(user.id);
    });

    deleteBtnVehicle.addEventListener("click", () => {
      deleteVehicle(vehicle.id);
    });
    
    actionsTd.appendChild(positionBtnVehicle);
    actionsTd.appendChild(editBtnVehicle);
    //actionsTd.appendChild(addBtn);
    actionsTd.appendChild(deleteBtnVehicle);
    tr.appendChild(idTd);
    tr.appendChild(marcaTd);
    tr.appendChild(modeloTd);
    tr.appendChild(anioTd);
    tr.appendChild(userTd);
    tr.appendChild(actionsTd);
   
    tableBody.appendChild(tr);
  }
}
else{
 // const vehicle = vehicles[i];
    const tr = document.createElement("tr");
    const idTd = document.createElement("td");
    const marcaTd = document.createElement("td");
    const modeloTd = document.createElement("td");
    const anioTd = document.createElement("td");
    const userTd = document.createElement("td");
    const actionsTd = document.createElement("td");
    const positionBtnVehicle = document.createElement("button");
    const editBtnVehicle = document.createElement("button");
    positionBtnVehicle.className = "position-btn";
    editBtnVehicle.className = "edit-btn";

    
    const deleteBtnVehicle = document.createElement("button");
    deleteBtnVehicle.className = "delete-btn";
    idTd.innerText = vehicle.id;
    marcaTd.innerText = vehicle.marca;
    modeloTd.innerText=vehicle.modelo;
    anioTd.innerText=vehicle.anio;
    
  users.find(element =>{
    const userId = element.id;
  //const foundPass = element.password;
 if(userId == vehicle.user ){
  nameUser= element.name;
 }
});
    
    userTd.innerText=nameUser;
    //emailTd.innerText = user.email;
    positionBtnVehicle.innerText = "Ver Posición";
    editBtnVehicle.innerText = "Edit";
    deleteBtnVehicle.innerText = "Delete";
    positionBtnVehicle.addEventListener("click", () => {
      windowPositionVehicle(vehicle.id);

      //showUpdateForm(user.id);
    });
    editBtnVehicle.addEventListener("click", () => {
      windowEditVehicle(null,vehicle.id);

      //showUpdateForm(user.id);
    });

    deleteBtnVehicle.addEventListener("click", () => {
      deleteVehicle(vehicle.id);
    });
    actionsTd.appendChild(positionBtnVehicle);
    actionsTd.appendChild(editBtnVehicle);
    //actionsTd.appendChild(addBtn);
    actionsTd.appendChild(deleteBtnVehicle);
    tr.appendChild(idTd);
    tr.appendChild(marcaTd);
    tr.appendChild(modeloTd);
    tr.appendChild(anioTd);
    tr.appendChild(userTd);
    tr.appendChild(actionsTd);
   
    tableBody.appendChild(tr);
}


  }
}

function windowAddVehicle(cerrar){
 
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
  h1ModalText=document.createTextNode("Agregar Vehículos");
  const divInputMarcaVehicle= document.createElement("div");
  const inputMarcaVehicle= document.createElement("input");
  inputMarcaVehicle.type="text";
  inputMarcaVehicle.id="marcaVehicleAdd";
  inputMarcaVehicle.className="marcaVehicleAdd";
  inputMarcaVehicle.placeholder="Marca";
  inputMarcaVehicle.require="required";
  const divInputModeloVehicle= document.createElement("div");
  const inputModeloVehicle= document.createElement("input");
  inputModeloVehicle.type="text";
  inputModeloVehicle.id="inputModeloVehicle";
  inputModeloVehicle.className="inputModeloVehicle";
  inputModeloVehicle.placeholder="Modelo"
  inputModeloVehicle.require="required";
  const divInputRegistroVehicle= document.createElement("div");
  const inputRegistroVehicle= document.createElement("input");
  inputRegistroVehicle.type="text";
  inputRegistroVehicle.id="inputRegistroVehicle";
  inputRegistroVehicle.className="inputRegistroVehicle";
  inputRegistroVehicle.placeholder="Registro IV"
  inputRegistroVehicle.require="required";
  const divSelectAnioVehicle= document.createElement("div");
  const selectAnioVehicle= document.createElement("select");
  selectAnioVehicle.id="selectAnioVehicle";
  selectAnioVehicle.className="selectAnioVehicle";
   const optionSelectAnioVehicle1=document.createElement("option");
  const optionSelectAnioVehicle1Text=document.createTextNode("Selecciona un Año"); 
  optionSelectAnioVehicle1.value="";
   var optionSelectAnioVehicle = new Array();
   var optionSelectAnioVehicleText = new Array();
   var k=10;
   for (let j = 0; j <= 13; j++) {
  optionSelectAnioVehicle[j]=document.createElement("option");
 optionSelectAnioVehicleText[j]=document.createTextNode("20"+k); 
 optionSelectAnioVehicle[j].value="20"+k;
 k++;
}
var dataRole = sessionStorage.getItem('sessionRole');
var dataId = sessionStorage.getItem('sessionId');
if(dataRole=="Administrador"){ 
  var divSelectUsers= document.createElement("div");
  var selectUsers= document.createElement("select");
  selectUsers.id="selectUsers";
  selectUsers.className="selectUsers";
 var optionSelectUsers1=document.createElement("option");
  var optionSelectUser1Text=document.createTextNode("Selecciona un Usuario"); 
  optionSelectUsers1.value="";


var optionSelectUsers= new Array();
  var optionSelectUsersText = new Array();
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
     optionSelectUsers[i]=document.createElement("option");
   optionSelectUsersText[i]=document.createTextNode(user.name); 
  optionSelectUsers[i].value=user.id; 
  }
}
const addModalBtn= document.createElement("button");
addModalBtnText= document.createTextNode("Agregar");
  
  addModalBtn.addEventListener("click",addVehicle);
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
  divModalContent.appendChild(divInputMarcaVehicle);
  divInputMarcaVehicle.appendChild(inputMarcaVehicle);
  divModalContent.appendChild(divInputModeloVehicle);
  divInputModeloVehicle.appendChild(inputModeloVehicle);
  divModalContent.appendChild(divInputRegistroVehicle);
  divInputRegistroVehicle.appendChild(inputRegistroVehicle);
  divModalContent.appendChild(divSelectAnioVehicle);
  divSelectAnioVehicle.appendChild(selectAnioVehicle);
  
  selectAnioVehicle.appendChild(optionSelectAnioVehicle1);
  optionSelectAnioVehicle1.appendChild(optionSelectAnioVehicle1Text);
 
   for (let j = 0; j <= 13; j++) {

 selectAnioVehicle.appendChild(optionSelectAnioVehicle[j]);
  optionSelectAnioVehicle[j].appendChild(optionSelectAnioVehicleText[j]);
}
 if(dataRole=="Administrador"){
 divModalContent.appendChild(divSelectUsers);
  divSelectUsers.appendChild(selectUsers);
 
  selectUsers.appendChild(optionSelectUsers1);
  optionSelectUsers1.appendChild(optionSelectUser1Text);
 for (let i = 0; i < users.length; i++){
  selectUsers.appendChild(optionSelectUsers[i]);
  optionSelectUsers[i].appendChild(optionSelectUsersText[i]);
}
}
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





function windowEditVehicle(cerrar,vehicleId){
 
  if(cerrar!=null){
    
    const closeModalBtn2=document.getElementById("closeModal").click();
    closeModalBtn2.addEventListener("click", () => {
     closeModal();
    });
  }

 const vehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);
  
  const currentVehicleId = vehicle.id;


  divPopup.innerHTML="";
  const divModal = document.createElement("div");
  divModal.className="jw-modal";
  divModal.id="modal-1";
  const divModalContent= document.createElement("div");
  divModalContent.className="jw-modal-body";
  const h1Modal= document.createElement("h1");
  h1ModalText=document.createTextNode("Editar Vehículos");
  const divInputMarcaVehicle= document.createElement("div");
  const inputMarcaVehicle= document.createElement("input");
  inputMarcaVehicle.type="text";
  inputMarcaVehicle.id="marcaVehicleAdd";
  inputMarcaVehicle.className="marcaVehicleAdd";
  inputMarcaVehicle.placeholder="Marca";
  inputMarcaVehicle.require="required";
  inputMarcaVehicle.value= vehicle.marca;
  const divInputModeloVehicle= document.createElement("div");
  const inputModeloVehicle= document.createElement("input");
  inputModeloVehicle.type="text";
  inputModeloVehicle.id="inputModeloVehicle";
  inputModeloVehicle.className="inputModeloVehicle";
  inputModeloVehicle.placeholder="Modelo"
  inputModeloVehicle.require="required";
  inputModeloVehicle.value= vehicle.modelo;
  const divInputRegistroVehicle= document.createElement("div");
  const inputRegistroVehicle= document.createElement("input");
  inputRegistroVehicle.type="text";
  inputRegistroVehicle.id="inputRegistroVehicle";
  inputRegistroVehicle.className="inputRegistroVehicle";
  inputRegistroVehicle.placeholder="Registro IV"
  inputRegistroVehicle.require="required";
  inputRegistroVehicle.value= vehicle.registro;
  const divSelectAnioVehicle= document.createElement("div");
  const selectAnioVehicle= document.createElement("select");
  selectAnioVehicle.id="selectAnioVehicle";
  selectAnioVehicle.className="selectAnioVehicle";
   const optionSelectAnioVehicle1=document.createElement("option");
  const optionSelectAnioVehicle1Text=document.createTextNode("Selecciona un Año"); 
  optionSelectAnioVehicle1.value="";
   var optionSelectAnioVehicle = new Array();
   var optionSelectAnioVehicleText = new Array();
   var k=10;
   for (let j = 0; j <= 13; j++) {
  optionSelectAnioVehicle[j]=document.createElement("option");
 optionSelectAnioVehicleText[j]=document.createTextNode("20"+k); 
 optionSelectAnioVehicle[j].value="20"+k;
 if(optionSelectAnioVehicle[j].value==vehicle.anio){
  optionSelectAnioVehicle[j].selected="selected";
 }
 k++;
}
var dataRole = sessionStorage.getItem('sessionRole');
var dataId = sessionStorage.getItem('sessionId');
if(dataRole=="Administrador"){ 
  var divSelectUsers= document.createElement("div");
  var selectUsers= document.createElement("select");
  selectUsers.id="selectUsers";
  selectUsers.className="selectUsers";
 var optionSelectUsers1=document.createElement("option");
  var optionSelectUser1Text=document.createTextNode("Selecciona un Usuario"); 
  optionSelectUsers1.value="";


var optionSelectUsers= new Array();
  var optionSelectUsersText = new Array();
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
     optionSelectUsers[i]=document.createElement("option");
   optionSelectUsersText[i]=document.createTextNode(user.name); 
  optionSelectUsers[i].value=user.id; 
  if(optionSelectUsers[i].value==vehicle.user){
    optionSelectUsers[i].selected="selected";
  }
  }
}
const editModalBtn= document.createElement("button");
editModalBtnText= document.createTextNode("Actualizar");
  
    editModalBtn.addEventListener("click", function(){
   updateVehicle(currentVehicleId);
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
  divModalContent.appendChild(divInputMarcaVehicle);
  divInputMarcaVehicle.appendChild(inputMarcaVehicle);
  divModalContent.appendChild(divInputModeloVehicle);
  divInputModeloVehicle.appendChild(inputModeloVehicle);
  divModalContent.appendChild(divInputRegistroVehicle);
  divInputRegistroVehicle.appendChild(inputRegistroVehicle);
  divModalContent.appendChild(divSelectAnioVehicle);
  divSelectAnioVehicle.appendChild(selectAnioVehicle);
  
  selectAnioVehicle.appendChild(optionSelectAnioVehicle1);
  optionSelectAnioVehicle1.appendChild(optionSelectAnioVehicle1Text);
 
   for (let j = 0; j <= 13; j++) {

 selectAnioVehicle.appendChild(optionSelectAnioVehicle[j]);
  optionSelectAnioVehicle[j].appendChild(optionSelectAnioVehicleText[j]);
}
 if(dataRole=="Administrador"){
 divModalContent.appendChild(divSelectUsers);
  divSelectUsers.appendChild(selectUsers);
 
  selectUsers.appendChild(optionSelectUsers1);
  optionSelectUsers1.appendChild(optionSelectUser1Text);
 for (let i = 0; i < users.length; i++){
  selectUsers.appendChild(optionSelectUsers[i]);
  optionSelectUsers[i].appendChild(optionSelectUsersText[i]);
}
}
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


function windowPositionVehicle(vehicleId){
 
   const vehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);
  divPopup.innerHTML="";
  const divModal = document.createElement("div");
  divModal.className="jw-modal";
  divModal.id="modal-1";
  const divModalContent= document.createElement("div");
  divModalContent.className="jw-modal-body";
  const h1Modal= document.createElement("h1");
  h1ModalText=document.createTextNode("Última Posición");
  const divMapaVehicle= document.createElement("div");
  const divFrameVehicle= document.createElement("iframe");
  divFrameVehicle.src="https://maps.google.com/maps?q="+vehicle.poicion+"&z=17&output=embed";
  divFrameVehicle.width="100%";
  divFrameVehicle.height="400px";
  
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
  divModalContent.appendChild(divMapaVehicle);
  divMapaVehicle.appendChild(divFrameVehicle);
  
  closeModalBtn.appendChild(closeModalBtnText);
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




function addVehicle() { 
const marcaVehicleAdd = document.getElementById("marcaVehicleAdd");
const inputModeloVehicle = document.getElementById("inputModeloVehicle");
const inputRegistroVehicle = document.getElementById("inputRegistroVehicle");
const selectAnioVehicle = document.getElementById("selectAnioVehicle");
const selectUsers = document.getElementById("selectUsers");



  const marcavehicle = marcaVehicleAdd.value.trim();
  const modelovehicle = inputModeloVehicle.value.trim();
  const registrovehicle = inputRegistroVehicle.value.trim();
  const aniovehicle=selectAnioVehicle.value.trim();
 var dataRole = sessionStorage.getItem('sessionRole');
var dataId = sessionStorage.getItem('sessionId');
if(dataRole=="Administrador"){
  var uservehicle=selectUsers.value.trim();
 }
 else{
  var uservehicle=dataId;
 }


    if(marcavehicle && modelovehicle && registrovehicle && aniovehicle && uservehicle != null){
      var id = 1;
      var val = vehicles.map(function(x){return x.id; }).indexOf(id);
      while(val != -1){
      id++;
      val = vehicles.map(function(x){return x.id; }).indexOf(id);
  }
      const vehicle = {
        id: id,
        marca: marcavehicle,
        modelo: modelovehicle,
        registro: registrovehicle,
        anio: aniovehicle,
        user: uservehicle
      };
      vehicles.push(vehicle);
      localStorage.setItem("vehicles", JSON.stringify(vehicles));
      marcaVehicleAdd.value = "";
      inputModeloVehicle.value = "";
      selectAnioVehicle.value = "";
      if(dataRole=="Administrador"){
      selectUsers.value = "";
    }
      //closeModal();
      renderTableVehicle();
      windowAddVehicle(1);
    }
  
}
function updateVehicle(currentVehicleId) { 
const marcaVehicleAdd = document.getElementById("marcaVehicleAdd");
const inputModeloVehicle = document.getElementById("inputModeloVehicle");
const inputRegistroVehicle = document.getElementById("inputRegistroVehicle");
const selectAnioVehicle = document.getElementById("selectAnioVehicle");
const selectUsers = document.getElementById("selectUsers");




 const marcavehicle = marcaVehicleAdd.value.trim();
  const modelovehicle = inputModeloVehicle.value.trim();
  const registrovehicle = inputRegistroVehicle.value.trim();
  const aniovehicle=selectAnioVehicle.value.trim();
 var dataRole = sessionStorage.getItem('sessionRole');
var dataId = sessionStorage.getItem('sessionId');
if(dataRole=="Administrador"){
  var uservehicle=selectUsers.value.trim();
 }
 else{
  var uservehicle=dataId;
 }


    const index = vehicles.findIndex((vehicle) => vehicle.id === currentVehicleId);
    console.log(index);
    if (index !== -1) {
      vehicles[index].marca = marcavehicle;
      vehicles[index].modelo = modelovehicle;
      vehicles[index].anio = aniovehicle;
      vehicles[index].registro = registrovehicle;
      vehicles[index].usuario = uservehicle;
      localStorage.setItem("vehicles", JSON.stringify(vehicles));
      
      renderTableVehicle();
      windowEditVehicle(1,null);
    }
 
}

function updatePositionVehicle(currentUserId) { 
  console.log("entrando a posiciones");

 var dataRole = sessionStorage.getItem('sessionRole');
var dataId = sessionStorage.getItem('sessionId');
var dataLat = sessionStorage.getItem('sessionLat');
var dataLon = sessionStorage.getItem('sessionLon');


    const index = vehicles.findIndex((vehicle) => vehicle.user === currentUserId);
    console.log('index es');
    console.log(currentUserId);
    console.log("posiciones");
    console.log(dataLat);
    console.log(dataLon);
    if (index !== -1) {console.log('guardando posiciones');
      vehicles[index].poicion = ""+dataLat+","+dataLon;
      localStorage.setItem("vehicles", JSON.stringify(vehicles));

      console.log("Posicion guardada es:");
      console.log(vehicles[index].poicion);
      if(dataRole=="Administrador"){
      renderTable();
    }
    else{
      renderTableVehicle()
    }

      //windowEditVehicle(1,null);
    }
 
}

function deleteVehicle(vehicleId) { 
  vehicles = vehicles.filter((vehicle) => vehicle.id !== vehicleId);
  localStorage.setItem("vehicles", JSON.stringify(vehicles));
  
  if (vehicles.length == 0){
    hideUpdateFormVehicle();
  };
  renderTableVehicle();
}

function showUpdateFormVehicle(vehicleId) {
  const vehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);
  if (vehicle) {
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