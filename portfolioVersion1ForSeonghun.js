
// 스크롤 내일때 네비바 색상변경
window.onscroll = function() {
    var nav = document.querySelector('.nav');
    if (window.pageYOffset > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};