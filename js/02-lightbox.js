import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector(".gallery")

let allPictures = ""

galleryItems.forEach(obj  => {
    allPictures += `<li><a class="gallery__item" href="${obj.original}">
    <img class="gallery__image" src="${obj.preview}" alt="${obj.description}" />
  </a></li>`
})
galleryContainer.innerHTML= allPictures

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});


// console.log(lightbox)

// console.log(galleryItems);
