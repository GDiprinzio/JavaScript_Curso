//-------------- LOGIN DE USUARIOS --------------//
const formLogin= document.getElementById("formLogin");
const inputsL= document.querySelectorAll("#formLogin, input");

const validationLogin= (e)=>{
switch (e.target.name) {
  case "userNameLogin":
    //validationL(e.target.name, e.target.value, expressions.correo);
    if (value.match(expressions.correo)) {
      console.log("VALIDO");

    }

    break;
    
  case "userPasswordL":
//    validationL(e.target.name, e.target.value, expressions.password);
break;
};
};

const validationL = (campo, value, expretion) => {
  if (value.match(expretion)) {
    document.getElementById(`${campo}`).classList.remove("formValIncorrecto");
    document.getElementById(`${campo}`).classList.add("formValCorrecto");
    document
      .querySelector(`${campo}, .inputAlertaError_${campo}`)
      .classList.remove(`inputAlertaErrorActive`);
    } else {
      document.getElementById(`password2`).classList.remove("formValIncorrecto");
      document.getElementById(`password2`).classList.add("formValCorrecto");
      document
        .querySelector(`password2, .inputAlertaError_password2`)
        .classList.remove(`inputAlertaErrorActive`);
    };
  };

inputsL.forEach((input) => {
  inputL.addEventListener("keyup", validationLogin);
  inputL.addEventListener("blur", validationLogin);
});

formLogin.addEventListener("submit", (e=> {
  e.preventDefault();
}));