// 获取元素
const slider = document.querySelector(".slider");
const acNav = document.querySelector(".ac-nav");
// 解决闪烁问题
var hiddenBox = document.querySelector(".hiddenBox");
// 获取 slider 的 offsetTop 高度
const sliderTop = slider.offsetTop;
document.addEventListener("scroll", function () {
  if (window.pageYOffset >= sliderTop) {
    acNav.style.position = "fixed";
    hiddenBox.style.display = "block";
  } else {
    acNav.style.position = "absolute";
    hiddenBox.style.display = "none";
  }
});
