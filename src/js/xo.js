const container = document.querySelector(".js-content");
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let player = "X";
let historyX = [];
let historyO = [];
let result = false;

function createMarkup() {
  let markup = "";
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item js-item" data-id=${i}></div>`;
  }
  return (container.innerHTML = markup);
}
createMarkup();

container.addEventListener("click", onItemClick);

function onItemClick(e) {
  if (!e.target.classList.contains("js-item") || e.target.textContent) {
    return;
  }

  const id = Number(e.target.dataset.id);
  //   console.log(id);
  if (player === "X") {
    historyX.push(id);
    result = isWinner(historyX);
  } else {
    historyO.push(id);
    result = isWinner(historyO);
  }

  e.target.textContent = player;

  if (result) {
    console.log(`Winner is ${player}`);
    reset();
    return;
  } else if (historyX.length + historyO.length === 9) {
    console.log("Try again");
    reset();
    return;
  }

  player = player === "X" ? "O" : "X";
}

function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}

function reset() {
  createMarkup();
  historyO = [];
  historyX = [];
  player = "X";
}
