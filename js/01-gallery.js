import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery')
const galleryItem = document.createElement('li')

function createElement(gallery) {
      return `
      <li class = "gallery__item">
      <a class="gallery__link" href="${gallery.original}">
      <img class="gallery__image" src = "${gallery.preview}" data-source = "${gallery.original}" alt = "${gallery.description}"></a></li>`
}

const element = galleryItems.map(createElement).join('')
galleryList.insertAdjacentHTML('beforeend', element)

galleryList.addEventListener('click', onClick)

function onClick(event) {
      event.preventDefault()
      if (event.target.nodeName !== 'IMG') {
        return
      }

      const instance = basicLightbox.create(`
      <img alt="${event.target.alt}" src="${event.target.dataset.source}" >
      `
       )
      
    instance.show()
}


