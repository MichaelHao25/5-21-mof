$('.lanuage').on('click', function () {
    $('.lanuage_child-menu').slideDown(300);
}).on('click', '.lanuage_child-menu span', function (e) {
    e.preventDefault();
    $('.lanuage_child-menu').hide();
    $('.lanuage .text').text($(this).text());
    return false;
}).on('mouseleave', function () {
    $('.lanuage_child-menu').hide();
})



$('.main-product .table-wrapper a').on('click', function (e) {
    e.preventDefault();
    $('.main-product .layout-box').fadeIn();
})
$('.main-product .layout-box a').on('click', function (e) {
    e.preventDefault();
    $('.main-product .layout-box').hide();
})
document.querySelectorAll('.public-banner').length > 0 && new Swiper('.public-banner .swiper-container', {
    pagination: '.swiper-pagination',
    autoplay: 3000,
    paginationClickable: true,
})



$('.mobile-menu-wrap').on('click', function () {
    $(this).children('.mobile-menu').toggleClass('active')
    $('.public-header_public_nav-right .list').slideToggle();
})

$('.public-header_public_nav-right .list .menu-root').on('click', function (e) {
    e.preventDefault();
    if (window.innerWidth <= 992) {
        $(this).children('.child-menu').slideToggle();
        $(this).toggleClass('active');
    } else {
        $('.public-header_public_nav-right .list .menu-root .child-menu').hide();
        $(this).children('.child-menu').slideDown();
    }
})
$('.public-header_public-nav').on('mouseleave', function () {
    if (window.innerWidth <= 992) {
        return 0;
    } else {
        $('.public-header_public_nav-right .list .menu-root .child-menu').hide();
    }
})