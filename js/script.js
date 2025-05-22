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


