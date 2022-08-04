const closeSession = document.getElementById("navItemCloseSession");

const { userName, userAdmin } = JSON.parse(
  sessionStorage.getItem("userSession")
);

if (userAdmin ? true : false) {
  document
    .querySelector(`navItemAdmin, .navItemAdminAct`)
    .classList.remove(`navItemAdminAct`);
} else {
  document.querySelector(`navItemAdmin`).classList.add(`navItemAdminAct`);
};

closeSession.addEventListener("click", CloseClean);

function CloseClean() {
  sessionStorage.clear();
  window.close();
};
