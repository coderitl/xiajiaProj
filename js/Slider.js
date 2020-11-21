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
}, 5000);

// 鼠标移入移除
var rmTimer = document.querySelector("#Slider ");
rmTimer.addEventListener("mouseenter", function () {
    // 鼠标移入清除 定时器
    clearInterval(timer);
    // 清除定时器变量
    timer = null;
    console.log("鼠标移入,清除定时器···");
});
rmTimer.addEventListener("mouseleave", function () {
    // 鼠标移出开启定时器
    timer = setInterval(function () {
        nextSlider();
    }, 2000);
    console.log("鼠标移入,开启定时器···");
});


// 添加返回顶部功能

// 获取返回顶部按钮
var gotop = document.querySelector('.gotop');
// 获取 main 的偏移量
var cardShow = document.querySelector('#cardShow');
// 当 main 出现时,返回顶部按钮显示
var cardShowTop = cardShow.offsetTop;
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= cardShowTop) {
        gotop.style.opacity = 1;
        gotop.style.transition = "all .5s ease-in-out";

    } else {
        gotop.style.opacity = 0;
    }
});

// gotop 按钮点击事件
gotop.addEventListener('click', function () {
    // window.scroll(0, 0); 无动画状态
    /*
     * 添加动画函数:
     *  obj： window
     *  target: 返回顶部(0)
     *  callback 暂时不需要
     * */
    animation(window, 0);
});

// 封装动画函数
function animation(obj, target, callback) {
    /*
    * object: 目标对象
    * target: 目标位置
    * */
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset == target) {
            // 停止动画 即: 停止定时器
            clearInterval(obj.timer);
            callback && callback();
        }
        //  水平移动 obj.style.left = window.pageYOffset + step + 'px';
        window.scroll(0, window.pageYOffset + step);
    }, 15)
}