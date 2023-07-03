const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(e) {
  const input = e.currentTarget;
  console.log(input.value);
  return (outputEl.textContent = input.value);
}
