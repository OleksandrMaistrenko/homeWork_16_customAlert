const submitBtn = document.getElementById("submit_btn");
const form = document.getElementById("form");
const showModalBtn = document.getElementById("showModalBtn");

showModalBtn.addEventListener("click", showAlert);

function onFormSubmit(event) {
  event.preventDefault();
  showModalBtn.click();
}

function showAlert() {
  const firstNameInput = form.elements["first_name"];
  const lastNameInput = form.elements["last_name"];

  const modalForFirstName = document.getElementById("modal_first_name");
  const modalForLastName = document.getElementById("modal_last_name");

  modalForFirstName.textContent = `First Name: ${firstNameInput.value}`;
  modalForLastName.textContent = `Last Name: ${lastNameInput.value}`;
}
