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
    
galleryList.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    }

    let lightbox = new SimpleLightbox('.gallery a', { captionData: 'alt', captionDelay: 250 });
//як зробити, щоб підпис було видно?
}