console.log($)
var demoEle = $('.demo')[0]
var smallboxEle = $('.small-box')[0]
var markEle = $('.mark')[0]
var floatboxEle = $('.float-box')[0]
var bigboxEle = $('.big-box')[0]
var bigimg = $('.big-img')[0]

function bigger() {
    floatboxEle.style.display = 'block';
    bigboxEle.style.display = 'block'

}

function reback() {
    floatboxEle.style.display = 'none';
    bigboxEle.style.display = 'none'
}

markEle.onmouseover = bigger;
markEle.onmouseout = reback;

markEle.onmousemove = function(ev) {
    var _event = ev || window.event;
    var left = _event.clientX - demoEle.offsetLeft - smallboxEle.offsetLeft - floatboxEle.offsetWidth / 2;
    var top = _event.clientY - demoEle.offsetTop - smallboxEle.offsetTop - floatboxEle.offsetHeight / 2;
    if (left < 0) {
        left = 0;

    } else if (left > (markEle.offsetWidth - floatboxEle.offsetWidth)) {
        left = markEle.offsetWidth - floatboxEle.offsetWidth

    }
    if (top < 0) {
        top = 0;

    } else if (top > (markEle.offsetHeight - floatboxEle.offsetHeight)) {
        top = markEle.offsetHeight - floatboxEle.offsetHeight

    }
    floatboxEle.style.left = left + 'px';
    floatboxEle.style.top = top + 'px';
    var percentX = left / (smallboxEle.offsetWidth - floatboxEle.offsetWidth);
    var percentY = top / (smallboxEle.offsetHeight - floatboxEle.offsetHeight);
    bigimg.style.left = -percentX * (bigimg.offsetWidth - bigboxEle.offsetWidth) + 'px';
    bigimg.style.top = -percentY * (bigimg.offsetHeight - bigboxEle.offsetHeight) + 'px';
}