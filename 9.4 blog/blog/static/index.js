let aEle = document.querySelectorAll('.header-right-a')
let flag = 1
$('.header-right-btn').click(
    function() {
        if (flag == 1) {
            $(".header-right").css("display", "flex");
            flag = 0
        } else {
            $(".header-right").css("display", "none");
            flag = 1
        }

    }
)
for (let i = 0; i < aEle.length; i++) {
    aEle[i].onclick = (event) => {
        event.preventDefault()
        let href = aEle[i].getAttribute('href')
        if ($(`.${href}`).length > 0) {

            $('body,html').stop().animate({ scrollTop: $(`.${href}`).offset().top }, 400);
        }
    }
}




window.onscroll = () => {
    let height = document.documentElement.scrollTop
    if (height > 70) {

        $(".header-nav").addClass('scroll')

    } else {
        $(".header-nav").removeClass('scroll')
    }
}

// $(window).on('load', () => {
//     setTimeout(() => {
//         $('body').toggleClass('preload')
//     }, 500)
// })