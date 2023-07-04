import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";

// Change code below this line
const galleryEl = document.querySelector(".gallery");

const gallery = galleryItems.map(
  (img) =>
    `<li class="gallery__item js-item" >
        <a class="gallery__link js-item" href="${img.original}">
        <img src="${img.preview}" data-source="${img.original}" alt="${img.description}" class="gallery__image js-item"/>
        </a>
        </li>`
);
galleryEl.insertAdjacentHTML("beforeend", gallery.join(""));

galleryEl.addEventListener("click", onGalleryClick);

let instance;

function onGalleryClick(e) {
  console.dir(e.target);
  if (!e.target.classList.contains("js-item")) {
    return;
  }

  instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );
  instance.show();
}

document.addEventListener("keydown", onEscPress);
function onEscPress(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}
