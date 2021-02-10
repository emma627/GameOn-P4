function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const ShowForm = document.getElementById("showForm");
const closeModal = document.getElementById("closeModal");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.getElementsByName("location");

const firstNameErrMsg = document.getElementById("firstNameErrMsg");
const lastNameErrMsg = document.getElementById("lastNameErrMsg");
const emailErrMsg = document.getElementById("emailErrMsg");
const birthDateErrMsg = document.getElementById("birthDateErrMsg");
const quantityErrMsg = document.getElementById("quantityErrMsg")
const locationErrMsg = document.getElementById("locationErrMsg")

const cestParti = document.getElementById("cestParti");




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


closeModal.addEventListener("click",($event)=>{
$event.preventDefault();
closeModalForm();
});

function closeModalForm(){
  modalbg.style.display = "none";

  firstNameErrMsg.style.display="none";
  lastNameErrMsg.style.display="none";
  emailErrMsg.style.display="none";
  birthDateErrMsg.style.display="none"; 
  locationErrMsg.style.display="none";

};


// création fonctions de validité prénom, nom
function isValid(value) {
  return /^[A-Z-a-z\s]{3,40}$/.test(value);
};

firstName.addEventListener("change",($event)=>{
  if(isValid(firstName.value)==false){
    firstNameErrMsg.textContent="Veuillez saisir correctement votre prénom"
    firstNameErrMsg.style.display="block";
    return false;
  }else{
    firstNameErrMsg.style.display="none";
    return true;
  }
});

lastName.addEventListener("change",($event)=>{
  if(isValid(lastName.value)==false){
    lastNameErrMsg.textContent="Veuillez saisir correctement votre nom"
    lasttNameErrMsg.style.display="block";
    return false;
  }else{
    lastNameErrMsg.style.display="none";
    return true;
  }
});
// création fonctions de validité email
function isValidMail(value) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
};

email.addEventListener("change",($event)=>{
  if(isValidMail(email.value)==false){
    emailErrMsg.textContent="Veuillez saisir correctement votre Email"
    emailErrMsg.style.display="block";
    return false;
  }else{
    lemailErrMsg.style.display="none";
    return true;
  }
});


//date de naissance
function validBirthDate(){
if(!birthDate.value){
  birthDateErrMsg.style.display="block";
  birthDateErrMsg.textContent="Veuillez saisir correctement votre Date de naissance";
  return false;
}else{
  birthDateErrMsg.style.display="none";
  return true;
}
};

//trounois GameOn
function validQuantity(){
if(quantity.value<=0){
  quantityErrMsg.style.display="block";
  quantityErrMsg.textContent="Veuillez saisir au moins une fois votre participation ";
  return false;
}else{
  quantityErrMsg.style.display="none";
  return true;
}
};
 //ville
function validVille(){
  for(i=0;i<=location.length;i++){
    
  }
};
