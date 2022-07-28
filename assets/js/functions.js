

//Función de Validacion de inputs vs expresiones regulares

const validation = (campo, value, expretion) => {
  if (value.match(expretion)) {
    document.getElementById(`${campo}`).classList.remove("formValIncorrecto");
    document.getElementById(`${campo}`).classList.add("formValCorrecto");
    document
      .querySelector(`${campo}, .inputAlertaError_${campo}`)
      .classList.remove(`inputAlertaErrorActive`);
  } else {
    document.getElementById(`${campo}`).classList.add("formValIncorrecto");
    document.getElementById(`${campo}`).classList.remove("formValCorrecto");
    document
      .querySelector(`${campo}, .inputAlertaError_${campo}`)
      .classList.add(`inputAlertaErrorActive`);
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
  } else {
    document.getElementById(`password2`).classList.remove("formValIncorrecto");
    document.getElementById(`password2`).classList.add("formValCorrecto");
    document
      .querySelector(`password2, .inputAlertaError_password2`)
      .classList.remove(`inputAlertaErrorActive`);
  }
};


// Función para almacenar en el SessionStorage
const sessionUser = (user) => {
  const sessionLogin =JSON.stringify(user);
  sessionStorage.setItem("userSession", sessionLogin);
};

