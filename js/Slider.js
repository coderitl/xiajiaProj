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

// 定时器
var timer = setInterval(function () {
  nextSlider();
}, 2000);

// 鼠标移入移除
var rmTimer = document.querySelector("#Slider ");
rmTimer.addEventListener("mouseenter", function () {
  // 鼠标移入清除 定时器
  clearInterval(timer);
  // 清除定时器变量
  timer = null;
  console.log('鼠标移入,清除定时器···');
});
rmTimer.addEventListener("mouseleave", function () {
  // 鼠标移出开启定时器
  timer = setInterval(function () {
    nextSlider();
  }, 2000);
  console.log('鼠标移入,开启定时器···');
});
