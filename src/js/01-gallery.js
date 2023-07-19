// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const gallery = galleryItems.map(
  img =>
    `<li class="gallery__item js-item" >
        <a class="gallery__link js-item" href="${img.original}">
        <img src="${img.preview}" alt="${img.description}" class="gallery__image js-item" title="${img.description}"/>
        </a>
        </li>`
);
galleryEl.insertAdjacentHTML('beforeend', gallery.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  if (!e.target.classList.contains('js-item')) {
    return;
  }
}

console.log(galleryItems);
