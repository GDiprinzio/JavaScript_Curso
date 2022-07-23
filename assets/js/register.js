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

inputs.forEach((input) => {
  input.addEventListener("keyup", formValidation);
  input.addEventListener("blur", formValidation);
});

//Declaracion de Buttons
formReg.addEventListener("submit", (e) => {
  e.preventDefault();
  const usersListStorage = JSON.parse(localStorage.getItem("users"));
  console.log(e.target.userEmailR.value);
  if (
    usersListStorage.find(
      (Element) => Element.userEmail === e.target.userEmailR.value
    )
  ) {
    document
      .querySelector(`userEmailR, .inputAlertaError2_userEmailR`)
      .classList.add(`inputAlertaErrorActive2`);
  } else {
    document
      .querySelector(`userEmailR, .inputAlertaError2_userEmailR`)
      .classList.remove(`inputAlertaErrorActive2`);

    const newUser = new UserInfomation(
      e.target.userNameR.value,
      e.target.userLastNameR.value,
      e.target.userEmailR.value,
      e.target.password1.value
    );
    console.log(newUser);
    usersListStorage.push(newUser);
    const newUserStorage = JSON.stringify(usersListStorage);
    localStorage.setItem("users", newUserStorage);
    const sessionUser = JSON.stringify(newUser);
    sessionStorage.setItem("userSession",sessionUser);
  }
});
