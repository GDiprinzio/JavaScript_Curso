const formReg = document.getElementById("formRegister");
const inputs = document.querySelectorAll("#formRegister, input");


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
  const emailValidation=  usersListStorage.find(
    (Element) => Element.userEmail === e.target.userEmailR.value
  );
  if (emailValidation ? true : false) {
    
      Swal.fire({
        icon: 'error',
        title: 'Error de E-mail',
        text: 'El correo electrónico ya se encuentra registrado.'
      })
  } else {
    

    const newUser = new UserInfomation(
      e.target.userNameR.value,
      e.target.userLastNameR.value,
      e.target.userEmailR.value,
      e.target.password1.value
    );
    usersListStorage.push(newUser);
    const newUserStorage = JSON.stringify(usersListStorage);
    localStorage.setItem("users", newUserStorage);
    sessionUser(newUser); 
  }
});
