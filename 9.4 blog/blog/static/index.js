let aEle = document.querySelectorAll('.header-right-a')
let flag = 1
$('.header-right-btn').click(
    function() {
        if (flag == 1) {
            // $(".header-right").css("display", "flex");
            $(".header-right").addClass("isShow");
            flag = 0
        } else {
            $(".header-right").removeClass("isShow");
            flag = 1
        }

    }
)
for (let i = 0; i < aEle.length; i++) {
    aEle[i].onclick = function(event) {

        event.preventDefault()
        $('.header-right-a').removeClass("yellow")
        console.log(this)
        $(this).addClass("yellow")
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


$(window).on('resize', function(e) {
        if ($(window).width() > 900) {
            $(".header-right").removeClass("isShow");
        }

        // if (flag == 0) {
        //     $(".header-right").addClass("");
        //     flag = 0
        // } else {
        //     $(".header-right").css("display", "none");
        //     flag = 1
        // }

    })
    // $(window).on('load', () => {
    //     setTimeout(() => {
    //         $('body').toggleClass('preload')
    //     }, 500)
    // })