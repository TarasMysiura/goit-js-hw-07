import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";
// const basicLightbox = require("basiclightbox");

// console.log(galleryItems);

const listImg = document.querySelector(".gallery");

// const fragment = document.createDocumentFragment();

// galleryItems.forEach(function (galleryItem) {
//   const liEl = document.createElement("li");
//   liEl.className = "gallery__item";
//   const aEl = document.createElement("a");
//   aEl.className = "gallery__link";
//   const imgEl = document.createElement("img");
//   imgEl.className = "gallery__image";
//   imgEl.src = galleryItem.preview;
//   imgEl.dataset.source = galleryItem.original;
//   imgEl.alt = galleryItem.description;

//   aEl.appendChild(imgEl);
//   liEl.appendChild(aEl);
//   fragment.appendChild(liEl);
// });

// listImg.append(fragment);
// const listImgMarcup = createListImg(galleryItems)

listImg.insertAdjacentHTML("beforeend", createListImg(galleryItems));

function createListImg() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link">
            <img class="gallery__image"
                src="${preview}" 
                data-source="${original}"
                alt="${description}" />
            </a></li>`;
    })
    .join("");
}

listImg.addEventListener("click", createBasicLightBox);

function createBasicLightBox(event) {
  event.target.src = event.target.dataset.source;
  showBasicLightBox(event.target.src);
}

function showBasicLightBox(img) {
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${img}" width="1100" height="700" >
    </div>
  `);
  instance.show(() => addListener());
  // instance.close(() =>
  //   )
  // );
}
function addListener() {
  window.addEventListener("keydown", onEscPress(instance));
}
const modalElement = document.querySelector(".modal");
modalElement.addEventListener("click", () => {
  instance.close();
});

// function modalOpen() {
//   document.body.classList.add(openClass);
//   window.addEventListener("keydown", closeModalOnESC);
// }

// function modalClose() {
//   document.body.classList.remove(openClass);
//   window.removeEventListener("keydown", closeModalOnESC);
// }

// function closeModalOnESC(event) {
//   if (event.code === "Escape") {
//     modalClose();
//     console.log("Натиснули Escape");
//   }
// }

// function closeBasicLightBoxOnExp(img) {
//   const instance = basicLightbox.create();
// }

// window.addEventListener("keydown", (event) => {
//   if (event.code === "Escape") {
//     instance.close(() => removeEventListener);
//     console.log("Натиснули Escape");
//   }
// });
const ESC_KEYCODE = "Escape";
const onEscPress = (evt, instance) => {
  if (evt.code === ESC_KEYCODE) {
    instance.close(() => removeListener);
  }
  const removeListener = window.removeEventListener("keydown", (evt) =>
    onEscPress(evt, instance)
  );
};
