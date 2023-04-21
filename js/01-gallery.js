import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const listImg = document.querySelector(".gallery");

// const listContent = galleryItems
//   .map(
//     (image) =>
//       `<li class="gallery__item"><a class="gallery__link" href="large-image.jpg"><img src="${image.preview}"></a></li>`
//   )
//   .join("");

// listImg.insertAdjacentHTML("afterbegin", listContent);

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

