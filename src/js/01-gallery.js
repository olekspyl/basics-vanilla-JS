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

function onGalleryClick(e) {
  console.dir(e.target);
  if (!e.target.classList.contains("js-item")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      console.log(e.code);
      instance.close();
    }
  });
}
