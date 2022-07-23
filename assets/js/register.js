const formReg = document.getElementById("formRegister");
const inputs = document.querySelectorAll("#formRegister, input");

//Constantes y ARRAYS
const fields = {
  userNameR: false,
  userLastNameR: false,
  emailR: false,
  password: false,
};

//-------------- REGISTRO DE USUARIOS --------------//
//Validación de los Inputs
const formValidation = (e) => {
  switch (e.target.name) {
    case "userNameR":
      validation(e.target.name, e.target.value, expressions.nombre);
      break;
    case "userLastNameR":
      validation(e.target.name, e.target.value, expressions.nombre);
      break;
    case "userEmailR":
      validation(e.target.name, e.target.value, expressions.correo);
      break;
    case "password1":
      validation(e.target.name, e.target.value, expressions.password);
      validationPassword2();
      break;
    case "password2":
      validationPassword2();
      break;

  }
};

//Función de Validacion de inputs vs expresiones regulares
const validation = (campo, value, expretion) => {
  if (value.match(expretion)) {
    document.getElementById(`${campo}`).classList.remove("formValIncorrecto");
    document.getElementById(`${campo}`).classList.add("formValCorrecto");
    document
      .querySelector(`${campo}, .inputAlertaError_${campo}`)
      .classList.remove(`inputAlertaErrorActive`);
    fields[campo] = true;
  } else {
    document.getElementById(`${campo}`).classList.add("formValIncorrecto");
    document.getElementById(`${campo}`).classList.remove("formValCorrecto");
    document
      .querySelector(`${campo}, .inputAlertaError_${campo}`)
      .classList.add(`inputAlertaErrorActive`);
    fields[campo] = false;
  }
};

const validationPassword2 = () => {
  const pass1 = document.getElementById("password1");
  const pass2 = document.getElementById("password2");
  if (pass1.value !== pass2.value) {
    document.getElementById(`password2`).classList.add("formValIncorrecto");
    document.getElementById(`password2`).classList.remove("formValCorrecto");
    document
      .querySelector(`password2, .inputAlertaError_password2`)
      .classList.add(`inputAlertaErrorActive`);
    fields["password"] = false;
  } else {
    document.getElementById(`password2`).classList.remove("formValIncorrecto");
    document.getElementById(`password2`).classList.add("formValCorrecto");
    document
      .querySelector(`password2, .inputAlertaError_password2`)
      .classList.remove(`inputAlertaErrorActive`);
    fields["password"] = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", formValidation);
  input.addEventListener("blur", formValidation);
});

//Declaracion de Buttons
formReg.addEventListener("submit", (e) => {
  e.preventDefault();
  const usersListStorage = JSON.parse(localStorage.getItem("users"));
  console.log(e.target.userEmailR.value);
   if(usersListStorage.find(Element => Element.userEmail === e.target.userEmailR.value)){
    document.querySelector(`userEmailR, .inputAlertaError2_userEmailR`).classList.add(`inputAlertaErrorActive2`);
        } else {
          document.querySelector(`userEmailR, .inputAlertaError2_userEmailR`).classList.remove(`inputAlertaErrorActive2`);

          const newUser= new UserInfomation(e.target.userNameR.value,e.target.userLastNameR.value,e.target.userEmailR.value,e.target.password1.value);
          console.log(newUser);
          usersListStorage.push(newUser);
          const newUserStorage=JSON.stringify(usersListStorage);
          localStorage.setItem("users",newUserStorage);
          const sessionUser=JSON.stringify(newUser);
          sessionStorage.setItem("userSession");
        };    
});