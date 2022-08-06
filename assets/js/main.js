const closeSession = document.getElementById("navItemCloseSession");
const adminSession = document.getElementById("navItemAdmin")

const { userName, userAdmin } = JSON.parse(
  sessionStorage.getItem("userSession")
);

if (userAdmin ? true : false) {
  document
    .querySelector(`#navItemAdmin, .navItemAdminAct`)
    .classList.remove(`navItemAdminAct`);
} else {
  document.querySelector(`#navItemAdmin`).classList.add(`navItemAdminAct`);
};

closeSession.addEventListener("click", CloseClean);

function CloseClean() {
  sessionStorage.clear();
  window.open('./../../pages/login.html',"_self");
};

document.querySelector("#btn").addEventListener("click", takeData);

function takeData() {
  /* const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "./../assets/data/db.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      console.log(data);
      let tableUsers = document.querySelector("#tableUsers");
      tableUsers.innerHTML = "";

      for (let user of data) {
        tableUsers.innerHTML += `
        <tr>
        <td>${user.userName}</td>
        <td>${user.userLastName}</td>
        <td>${user.userEmail}</td>
        <td>${user.userAdmin}</td>
        </tr>        
        `;
      }
    }
  };  */
 
 fetch("./../assets/data/db.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let tableUsers = document.querySelector("#tableUsers");
      tableUsers.innerHTML = "";

      for (let user of data) {
        tableUsers.innerHTML += `
        <tr>
        <td>${user.userName}</td>
        <td>${user.userLastName}</td>
        <td>${user.userEmail}</td>
        <td>${user.userAdmin}</td>
        </tr>
        <hr>   
        `;
      }
    });
}
