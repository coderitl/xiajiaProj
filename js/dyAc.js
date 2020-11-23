var isFixed = false;
var acHeader = document.querySelector("#ac-header");
window.onscroll = function () {
    // https://caniuse.com/?search=pageYOffset 兼容查看
    // 滚动条兼容处理
    var scrollTop = window.pageYOffset || document.documentElement.offsetTop || document.body.offsetTop;
    isFixed = scrollTop > 100 ? true : false;

    isFixed
        ? acHeader.className = "acSticky"
        : acHeader.className = "";
// 取消
}