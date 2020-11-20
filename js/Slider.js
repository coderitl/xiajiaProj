console.log("正在加载 Slider.js·········");

const sliders = document.querySelectorAll(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const nextSlider = function () {
  // get current class
  const current = document.querySelector(".current");
  if (current.nextElementSibling) {
    // add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // add current to start
    sliders[0].classList.add("current");
  }
  // clear current
  setTimeout(() => current.classList.remove("current"));
};

const prevSlider = function () {
  // get current class
  const current = document.querySelector(".current");
  if (current.previousElementSibling) {
    // add current to next sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // add current to start
    sliders[sliders.length - 1].classList.add("current");
  }
  // clear current
  setTimeout(() => current.classList.remove("current"));
};

// click Event
next.addEventListener("click", function () {
  nextSlider();
  
});
prev.addEventListener("click", function () {
  prevSlider();
});
