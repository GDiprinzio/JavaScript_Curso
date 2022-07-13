const formulario = document.getElementById("formRegister");
const inputs = document.querySelectorAll("#cformRegister, input");

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

let userList = [
  { userName: null,
    userLastName: null,
    userEmail: "admin@admin.com",
    userPassword: "123456",
    userType:"admin",
  },
{ userName: "Gabriel",
  userLastName: "Di Prinzio",
  userEmail: "gdiprinzio@gmail.com",
  userPassword: "1976",
  userType:"admin",
}
];

class UserInfomation {
  constructor(userName, userLastName, userEmail, userPassword) {
    this.userName = userName;
    this.userLastName = userLastName;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
}
};

const formValidation = (e) => {
  switch (e.target.name) {
    case "nombre":
      validation("userNameR", e.target.value, expresiones.nombre);
      break;
    case "apellido":
      validation("userLastNameR", e.target.value, expresiones.nombre);
      break;
    case "email":
      validation("userEmailR", e.target.value, expresiones.correo);
      userList.forEach(Object => {
        if (Object.userEmail === e.target.value){
          document.querySelector(`userEmailR, .inputAlertaError2_userEmailR`).classList.add(`inputAlertaErrorActive2`);
        } else {
          document.querySelector(`userEmailR, .inputAlertaError2_userEmailR`).classList.remove(`inputAlertaErrorActive2`);
        };
      });
      break;
    case "password1":
      validation("password1", e.target.value, expresiones.password);
      validationPassword2();
      break;
    case "password2":
      validationPassword2();
      break;
  }
};

const validation = (campo, value, expretion) => {
  if (value.match(expretion)) {
    document.getElementById(`${campo}`).classList.remove("formValIncorrecto");
    document.getElementById(`${campo}`).classList.add("formValCorrecto");
    document.querySelector(`${campo}, .inputAlertaError_${campo}`).classList.remove(`inputAlertaErrorActive`);
  } else {
    document.getElementById(`${campo}`).classList.add("formValIncorrecto");
    document.getElementById(`${campo}`).classList.remove("formValCorrecto");
    document.querySelector(`${campo}, .inputAlertaError_${campo}`).classList.add(`inputAlertaErrorActive`);
  }
};

const validationPassword2=()=>{
  const pass1=document.getElementById('password1');
  const pass2=document.getElementById('password2');
  if(pass1.value!==pass2.value){
    document.getElementById(`password2`).classList.add("formValIncorrecto");
    document.getElementById(`password2`).classList.remove("formValCorrecto");
    document.querySelector(`password2, .inputAlertaError_password2`).classList.add(`inputAlertaErrorActive`);
  }else{
    document.getElementById(`password2`).classList.remove("formValIncorrecto");
    document.getElementById(`password2`).classList.add("formValCorrecto");
    document.querySelector(`password2, .inputAlertaError_password2`).classList.remove(`inputAlertaErrorActive`);
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", formValidation);
  input.addEventListener("blur", formValidation);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const email=document.getElementById('userEmailR');
  


});
