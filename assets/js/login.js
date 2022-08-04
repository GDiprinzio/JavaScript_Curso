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
  const userValidation= usersListStorage.find((Element)=> Element.userEmail === e.target.userNameLogin.value && Element.userPassword === e.target.userPasswordL.value);
  if( userValidation ? true : false){
    const position= usersListStorage.findIndex(user=>user.userEmail ===e.target.userNameLogin.value);
    console.log(position);
    const userLogin = usersListStorage[position];
    sessionUser(userLogin); 
    open('./../../pages/main.html',"Pagina de Usurio");
    window.close();
  
  }else{
  
Swal.fire({
  icon: 'error',
  title: 'Error de Login',
  text: 'Usuario o contraseña incorrecto!'
})
  }
});
