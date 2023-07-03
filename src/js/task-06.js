const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlur);

function onBlur(e) {
  const input = e.currentTarget;
  if (Number(input.dataset.length) === input.value.length) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
