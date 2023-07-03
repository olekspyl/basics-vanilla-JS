function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanEl = document.querySelector(".color");

btnEl.addEventListener("click", onColorChange);

function onColorChange(e) {
  const btn = e.currentTarget;
  console.dir(btn);
  btn.value = getRandomHexColor();
  body.style.backgroundColor = btn.value;
  spanEl.textContent = btn.value;
}
