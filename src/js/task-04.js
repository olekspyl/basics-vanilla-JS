const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

btnDecrement.addEventListener("click", onClick);
btnIncrement.addEventListener("click", onClick);

const counter = {
  value: 0,
  btnIncrement() {
    this.value += 1;
  },
  btnDecrement() {
    this.value -= 1;
  },
};

function onClick(e) {
  const btn = e.currentTarget;
  if (btn.dataset.action === "increment") {
    counter.btnIncrement();
    counterValue.textContent = counter.value;
  } else {
    counter.btnDecrement();
    counterValue.textContent = counter.value;
  }
}
