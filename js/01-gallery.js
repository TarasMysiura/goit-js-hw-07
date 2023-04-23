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
  closeModalOnESC();
}

window.addEventListener("keydown", closeModalOnESC);

function closeModalOnESC(e) {
  return (
    !1 !== n.onClose(u) &&
    (function (e, n) {
      return (
        e.classList.remove("basicLightbox--visible"),
        setTimeout(function () {
          return !1 === i(e) || e.parentElement.removeChild(e), n();
        }, 410),
        !0
      );
    })(t, function () {
      if ("function" == typeof e) return e(u);
    })
  );
  
  
  
  
  // if (event.code === "Escape") {
  //   event.classList.remove("basicLightbox--visible"),
  //     setTimeout(function () {
  //       return !1 === i(event) || event.parentElement.removeChild(event), n();
  //     }, 410),
  //     !0;

  //   // document.body.classList.remove(openClass);
  //   // console.log("Натиснули Escape");
  // }
}

/*
1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
2. Додати в модалку логіку закриття при натисканні на кнопку **Escape**
*/

/*
    1. Отримуємо всі рефси
    2. Вішаємо обробник подій на кнопку - click
        2.1. Додаємо клас open до body
    3. Вішаємо обробник подій на оверлей і на крестик - click
        3.1. Забираємо клас open у body
*/

//! 1 варіант - викликати ф-цію toggleModalOpen тільки тоді, коли модалка відкрита

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const openClass = "open";

// refs.openModalBtn.addEventListener("click", toggleModalOpen);
// refs.overlay.addEventListener("click", toggleModalOpen);
// refs.modalCloseBtn.addEventListener("click", toggleModalOpen);
// window.addEventListener("keydown", closeModalOnESC);

// function toggleModalOpen() {
//   document.body.classList.toggle(openClass);
// }

// function closeModalOnESC(event) {
//   if (event.code === "Escape" && document.body.classList.contains(openClass)) {
//     toggleModalOpen();
//     console.log("Натиснули Escape");
//   }
// }

//! 2 варіант - вручну прибрати клас

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const openClass = "open";

// refs.openModalBtn.addEventListener("click", toggleModalOpen);
// refs.overlay.addEventListener("click", toggleModalOpen);
// refs.modalCloseBtn.addEventListener("click", toggleModalOpen);
// window.addEventListener("keydown", closeModalOnESC);

// function toggleModalOpen() {
//   document.body.classList.toggle(openClass);
// }

// function closeModalOnESC(event) {
//   if (event.code === "Escape") {
//     document.body.classList.remove(openClass);
//     console.log("Натиснули Escape");
//   }
// }

//! 3 варіант - розділити логіку і створити окремо ф-цію для відкриття і окремо для закриття

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const openClass = "open";

// refs.openModalBtn.addEventListener("click", modalOpen);
// refs.overlay.addEventListener("click", modalClose);
// refs.modalCloseBtn.addEventListener("click", modalClose);
// window.addEventListener("keydown", closeModalOnESC);

// function modalOpen() {
//   document.body.classList.add(openClass);
// }
// function modalClose() {
//   document.body.classList.remove(openClass);
// }

// function closeModalOnESC(event) {
//   if (event.code === "Escape") {
//     modalClose();
//     console.log("Натиснули Escape");
//   }
// }

//! ====================

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const openClass = "open";

// refs.openModalBtn.addEventListener("click", modalOpen);
// refs.overlay.addEventListener("click", modalClose);
// refs.modalCloseBtn.addEventListener("click", modalClose);

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
