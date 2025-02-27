const form = document.querySelector(".js-form");

const nameInput = document.querySelector("#fname");
const birthdayInput = document.querySelector("#birthday");
const table = document.querySelector("#table");

let users = new Array();

window.onload = function (e) {
  users = JSON.parse(localStorage.getItem("users")) || [];
  console.log("🚀 ~ users:", users)
  users.forEach(user => {
    listNewUser(user)
  });
};

function listNewUser(user) {
  const userName = document.createElement("p")
  userName.innerHTML = user.name
  const userBirthday = document.createElement("p")
  userBirthday.innerHTML = user.birthday
  table.appendChild(userName)
  table.appendChild(userBirthday)
}


form.addEventListener("submit", function (event) {
  event.preventDefault();

  const person = {
    name: nameInput.value,
    birthday: birthdayInput.value
  }

  if (localStorage.hasOwnProperty("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }

  users.push(person)
  localStorage.setItem("users", JSON.stringify(users))
  listNewUser(person)
});