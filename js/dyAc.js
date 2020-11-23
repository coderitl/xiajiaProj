
// 添加返回顶部功能

// 获取返回顶部按钮
var gotop = document.querySelector('.gotop');
// 获取 cardShow 的偏移量
var slider = document.querySelector('.slider');
// 当 cardShow 出现时,返回顶部按钮显示
var sliderTop = slider.offsetTop;
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= sliderTop) {
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