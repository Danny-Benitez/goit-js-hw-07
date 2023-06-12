import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}" 
      />
    </a>
  </li>`;
  })
  .join("");

gallery.innerHTML = galleryMarkup;

gallery.addEventListener("click", imageGalleryAction);

function imageGalleryAction(event) {
  if (event.target.classList.contains("gallery__image")) {
    const newImageURL = event.target.dataset.source;
    openModal(newImageURL);
  }
}

function openModal(newImageURL) {
  const instance = basicLightbox.create(`<img src= "${newImageURL}">`, {
    onShow: (instance) => {
      const modalImage = instance.element().querySelector("img");

      document.addEventListener("keydown", handleClick);

      function handleClick(event) {
        if (event.key === "Escape") {
          instance.close();
        }
      }
    },

    onClose: () => {
      document.removeEventListener("keydown", handleClick);
    },
  });

  instance.show();
}

console.log(galleryItems);
