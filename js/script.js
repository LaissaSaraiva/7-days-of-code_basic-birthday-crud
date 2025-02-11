const form = document.querySelector(".js-form");
console.log("🚀 ~ form:", form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = document.querySelector("#fname");
  const birthdayInput = document.querySelector("#birthday");
  console.log("~ Name:", nameInput.value);
  console.log("~ Birthday:", birthdayInput.value);
});
