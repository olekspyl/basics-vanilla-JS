function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
const inputEl = container.firstElementChild;
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

inputEl.addEventListener("input", onInputChange);
btnCreate.addEventListener("click", onBtnCreateClick);
btnDestroy.addEventListener("click", onBtnDestroyClick);

function onInputChange(e) {
  const input = e.currentTarget;
  inputValue = input.valueAsNumber;
}

function createBoxes(amount) {
  const boxes = [];

  let widthAndHeightValue = 30;

  for (let i = 0; i < amount; i += 1) {
    widthAndHeightValue += 10;

    const divElement = document.createElement("div");
    divElement.style.backgroundColor = getRandomHexColor();
    divElement.classList = "item";
    divElement.style.marginRight = "30px";
    divElement.style.width = `${widthAndHeightValue}px`;
    divElement.style.height = `${widthAndHeightValue}px`;
    boxes.push(divElement);
  }
  return boxesEl.append(...boxes);
}

function onBtnCreateClick() {
  createBoxes(inputValue);
}

function onBtnDestroyClick() {
  inputEl.value = 0;
  boxesEl.innerHTML = "";
}
