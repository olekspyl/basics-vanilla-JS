const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onformSubmit);

function onformSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const { email, password } = form.elements;

  if (password.value === "" || email.value === "") {
    alert("All fields are required");
  }

  const data = { email: email.value, password: password.value };
  console.log(data);

  form.reset();
}
