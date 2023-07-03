const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChange);

function onInputChange(e) {
  const input = e.currentTarget;

  spanEl.style.fontSize = `${input.valueAsNumber}px`;
  console.dir(spanEl);
}
