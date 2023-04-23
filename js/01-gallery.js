import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";
// const basicLightbox = require("basiclightbox");

// console.log(galleryItems);

const listImg = document.querySelector(".gallery");

const fragment = document.createDocumentFragment();

galleryItems.forEach(function (galleryItem) {
  const liEl = document.createElement("li");
  liEl.className = "gallery__item";
  const aEl = document.createElement("a");
  aEl.className = "gallery__link";
  const imgEl = document.createElement("img");
  imgEl.className = "gallery__image";
  imgEl.src = galleryItem.preview;
  imgEl.dataset.source = galleryItem.original;
  imgEl.alt = galleryItem.description;

  aEl.appendChild(imgEl);
  liEl.appendChild(aEl);
  fragment.appendChild(liEl);
});

listImg.append(fragment);

listImg.addEventListener("click", createBasicLightBox);

function createBasicLightBox(event) {
  // console.dir(event.target.src);
  event.target.src = event.target.dataset.source;
  // console.dir(event.target.src);
  showBasicLightBox(event.target.src);
}

function showBasicLightBox(img) {
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${img}" width="1100" height="700" >
    </div>
  `);
  instance.show();
  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close(() => removeEventListener);
      // console.log("Натиснули Escape");
    }
  });
}
