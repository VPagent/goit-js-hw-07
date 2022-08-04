import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery")

let allPictures = ""

galleryItems.forEach(obj  => {
    allPictures += `<div class="gallery__item">
    <a class="gallery__link" href="${obj.original}">
      <img
        class="gallery__image"
        src="${obj.preview}"
        data-source="${obj.original}"
        alt="${obj.description}"
      />
    </a>
  </div>`
})

galleryContainer.innerHTML= allPictures

galleryContainer.addEventListener("click", onGalleryClick)

function onGalleryClick(event){

  event.preventDefault()
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.description}"/>`,{
      onShow: () => {window.addEventListener("keydown", closeIns)},
      onClose: () => {window.removeEventListener("keydown", closeIns)},
    });
  instance.show()
    
  
  function closeIns (event){
    if(event.code === "Escape"){
      instance.close()
    }
  } 
}



