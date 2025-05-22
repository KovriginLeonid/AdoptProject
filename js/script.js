const leftBlock = document.querySelector(".left__block");
const rightBlock = document.querySelector(".right__block");
const textBeetle = document.querySelector(".beetle__textblock");
const textQuotes = document.querySelector(".quotes__block");
const openLeft = document.querySelector(".flower__button");
const openRight = document.querySelector(".butterfly__button");
const openBeetle = document.querySelector(".beetle__button");
const openQuotes = document.querySelector(".quotes__button");
const openShrooms = document.querySelector(".shrooms__button");
const openHome = document.querySelector(".home_button");

let timeout;

const editModal = document.querySelector(".edit-location__modal");
const openModal = document.querySelector(".create-location__button");
const openEditModal = document.querySelector(".location__edit-button");
const closeModal = document.querySelector(".modal__close-button");

openLeft.addEventListener ('click', () => {
  leftBlock.classList.toggle('left__block--active');
  openLeft.classList.toggle('flower__button--active');
})

openRight.addEventListener ('click', () => {
  rightBlock.classList.toggle('right__block--active');
  openRight.classList.toggle('butterfly__button--active');
})

openBeetle.addEventListener ('click', () => {
  textBeetle.classList.toggle('beetle__textblock--active');
  openBeetle.classList.toggle('beetle__button--active');
})

openQuotes.addEventListener ('click', () => {
  textQuotes.classList.toggle('quotes__block--active');
  openQuotes.classList.toggle('quotes__button--active');
})

openShrooms.addEventListener ('click', () => {
  openShrooms.classList.toggle('shrooms__button--active');
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    openShrooms.classList.remove('shrooms__button--active');
  }, 3000); // 3000 milliseconds = 3 seconds
});

openHome.addEventListener ('click', () => {
  openHome.classList.toggle('home_button--active');
})


import Viewer from '../node_modules/viewerjs/dist/viewer';


// View an image.
const viewer = new Viewer(document.getElementById('image'), {
  inline: true,
  viewed() {
    viewer.zoomTo(1);
  },
});
// Then, show the image by clicking it, or call `viewer.show()`.

// View a list of images.
// Note: All images within the container will be found by calling `element.querySelectorAll('img')`.
const gallery = new Viewer(element.querySelectorAll('img'));
// Then, show one image by click it, or call `gallery.show()`.
gallery.show()



const mainContainer = document.querySelector('.locations-managment__container')
mainContainer.addEventListener('click', function (e) {
  // Элемент, на котором был выполнен клик
  const targetElem = e.target
  // Определяем был ли выполнен клик
  // на одной из кнопок или внутри её
  const buttonElem = targetElem.closest('.location__open-button')
  // Если клик был выполнен вне кнопки, buttonElem === null
  if (buttonElem === null) {
    // Если клик выполнен не на кнопке, ничего не делаем
    e.stopPropagation()
    return
  }
  const containerElem = targetElem.closest('.main-location__container')
  // Выводим в консоль контейнер, содержащий нажатую кнопку
  const subLocations = () => {
    containerElem.querySelector(".open-button__line-2").classList.toggle('open-button--active');
    containerElem.querySelectorAll('.sub-location__container').forEach((sub, index) => {
    sub.classList.toggle('sub-location--active');
    });
};
  subLocations(containerElem);
})


mainContainer.addEventListener('click', function (e) {
  const targetElem = e.target
  const buttonElem = targetElem.closest('.location__details-button')
  if (buttonElem === null) {
    e.stopPropagation()
    return
  }
  const containerElem = targetElem.closest('.main-location__container')

  const editDeleteButtons = () => {
    containerElem.querySelector(".location__edit-button").classList.toggle('location__edit-button--active');
    containerElem.querySelector(".location__delete-button").classList.toggle('location__delete-button--active');
};
editDeleteButtons();
})

