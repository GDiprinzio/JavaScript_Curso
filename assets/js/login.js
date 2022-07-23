//-------------- LOGIN DE USUARIOS --------------//
const formLogin = document.getElementById("formLogin");
const inputsL = document.querySelectorAll("#formLogin, input");

const validationLogin = (e) => {
  switch (e.target.name) {
    case "userNameLogin":
      validation(e.target.name, e.target.value, expressions.correo);
      break;

    case "userPasswordL":
      validation(e.target.name, e.target.value, expressions.password);
      break;
  }
};

inputsL.forEach((input) => {
  input.addEventListener("keyup", validationLogin);
  input.addEventListener("blur", validationLogin);
});

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const usersListStorage = JSON.parse(localStorage.getItem("users"));
  console.log(usersListStorage);
  console.log(e.target.userNameLogin.value);
  console.log(e.target.userPasswordL.value);
  if( usersListStorage.find((Element)=> Element.userEmail === e.target.userNameLogin.value && Element.userPassword === e.target.userPasswordL.value)){
  console.log("PASO");
  document.querySelector(`userPasswordL, .inputAlertaError_Login`)
  .classList.remove(`inputAlertaErrorActive2`);
  }else{
    document.querySelector(`userPasswordL, .inputAlertaError_Login`)
    .classList.add(`inputAlertaErrorActive2`);
  }
});
