const formReg = document.getElementById("formRegister");
const inputs = document.querySelectorAll("#formRegister, input");
//const register= document.getElementById("registrar");

const expressions = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const fields = {
  userNameR: false,
  userLastNameR: false,
  emailR: false,
  password: false,
};

const userList = [
  {
    userName: null,
    userLastName: null,
    userEmail: "admin@admin.com",
    userPassword: "123456",
    userType: "admin",
  },
  {
    userName: "Gabriel",
    userLastName: "Di Prinzio",
    userEmail: "gdiprinzio@gmail.com",
    userPassword: "1976",
    userType: "admin",
  },
];

const usersList = JSON.stringify(userList);
localStorage.setItem("users", usersList);

class UserInfomation {
  constructor(userName, userLastName, userEmail, userPassword) {
    this.userName = userName;
    this.userLastName = userLastName;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
  }
}

const formValidation = (e) => {
  switch (e.target.name) {
    case "userNameR":
      validation("userNameR", e.target.value, expressions.nombre);
      break;
    case "userLastNameR":
      validation("userLastNameR", e.target.value, expressions.nombre);
      break;
    case "emailR":
      validation("userEmailR", e.target.value, expressions.correo);
      /* userList.forEach((Object) => {
        if (Object.userEmail === e.target.value) {
          document
            .querySelector(`userEmailR, .inputAlertaError2_userEmailR`)
            .classList.add(`inputAlertaErrorActive2`);
        } else {
          document
            .querySelector(`userEmailR, .inputAlertaError2_userEmailR`)
            .classList.remove(`inputAlertaErrorActive2`);
        }
      }); */
      break;
    case "password1":
      validation("password1", e.target.value, expressions.password);
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

formReg.addEventListener("submit", (e) => {
  e.preventDefault();
  const usersListStorage = JSON.parse(localStorage.getItem("users"));
  console.log(e.target.emailR.value);
   if(usersListStorage.find(Element => Element.userEmail === e.target.emailR.value)){
    document.querySelector(`userEmailR, .inputAlertaError2_userEmailR`).classList.add(`inputAlertaErrorActive2`);
        } else {
          document.querySelector(`userEmailR, .inputAlertaError2_userEmailR`).classList.remove(`inputAlertaErrorActive2`);

          const newUser= new UserInfomation(e.target.userNameR.value,e.target.userLastNameR.value,e.target.emailR.value,e.target.password1.value);
          console.log(newUser);
          usersListStorage.push(newUser);
          const newUserStorage=JSON.stringify(usersListStorage);
          localStorage.setItem("users",newUserStorage);
        };
});
