const form = document.querySelector(".js-form");
console.log("🚀 ~ form:", form);

const nameInput = document.querySelector("#fname");
const birthdayInput = document.querySelector("#birthday");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("~ Name:", nameInput.value);
  console.log("~ Birthday:", birthdayInput.value);
});
