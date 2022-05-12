const burger = document.querySelector(".hamburger");
const burgerFirst = document.querySelector(".hamburger-line:first-child");
const burgerSecond = document.querySelector(".hamburger-line:nth-child(2)");
const burgerThird = document.querySelector(".hamburger-line:last-child");
const nav = document.querySelector(".main-header__nav");

burger.addEventListener("click", function (e) {
  burgerFirst.classList.toggle("line-1");
  burgerSecond.classList.toggle("line-2");
  burgerThird.classList.toggle("line-3");
  nav.classList.toggle("block");
  nav.classList.toggle("visible");
});
