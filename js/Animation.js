// 水平 div 移动动画函数
function animation(object, target) {
    /*
    * object: 目标对象
    * target: 目标位置
    * */
    var timer = setInterval(function () {
        if (object.offsetTop >= target) {
            // 停止动画 即: 停止定时器
            clearInterval(timer);
        }
        object.style.top = object.offsetTop + 1 + 'px';
    }, 30)
}

var obj = document.querySelector('div');
animation(div, 300);