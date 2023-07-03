const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);

const children = [...items].forEach((item) => {
  const category = item.firstElementChild.textContent;
  console.log("Category:", category);
  const quantity = item.lastElementChild.children.length;
  console.log("Elements:", quantity);
});
