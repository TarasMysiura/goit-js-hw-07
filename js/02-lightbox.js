import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const listImg = document.querySelector(".gallery");

// const fragment = document.createDocumentFragment();

// galleryItems.forEach(function (galleryItem) {
//   const liEl = document.createElement("li");
//   liEl.className = "gallery__item";
//   const aEl = document.createElement("a");
//   aEl.className = "gallery__link";
//   aEl.href = galleryItem.original;
//   const imgEl = document.createElement("img");
//   imgEl.className = "gallery__image";
//   imgEl.src = galleryItem.preview;
//   imgEl.alt = galleryItem.description;
//   aEl.appendChild(imgEl);
//   liEl.appendChild(aEl);
//   fragment.appendChild(liEl);
// });

// listImg.append(fragment);

listImg.insertAdjacentHTML("beforeend", createListImg(galleryItems));

function createListImg() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image"
                src="${preview}" 
                alt="${description}" />
            </a></li>`;
    })
    .join("");
}

const galleryLightBox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
