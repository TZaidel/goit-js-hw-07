import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector('.gallery')
const galleryItem = document.createElement('li')

function createElement(gallery) {
      return `
      <li class = "gallery__item">
      <a class="gallery__link" href="${gallery.original}">
      <img class="gallery__image" src = "${gallery.preview}" alt = "${gallery.description}"></a></li>`
}

    const element = galleryItems.map(createElement).join('')
galleryList.insertAdjacentHTML('beforeend', element)
    

    let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
