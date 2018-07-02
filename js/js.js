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







$('.mobile-menu-wrap').on('click', function () {
    $(this).children('.mobile-menu').toggleClass('active')
    $('.public-header_public_nav-right .list').slideToggle();
})

$('.public-header_public_nav-right .list .menu-root').on('click', function (e) {
    // 
    if (window.innerWidth <= 992) {
        e.preventDefault();
        $(this).children('.child-menu').slideToggle();
        $(this).toggleClass('active');
    } else {
        // $('.public-header_public_nav-right .list .menu-root .child-menu').hide();
        // $(this).children('.child-menu').slideDown();
        ;
    }
}).on('mouseenter', function () {

    if (navigator.userAgent.indexOf('mobile') == -1 && window.innerWidth < 768) {;
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

$('.main-security-details .case .case-list a').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    var cost = $(this).attr('data-cost');
    $('.main-security-details .case .cost .value').text(cost);
})
$('.main-security-details .case .case-list a').eq(0).trigger('click');




$('*[data-js-tabs]').children().on('click', function () {
    var tabs_obj = $(this).parent().attr('data-js-tabs');
    $(tabs_obj).children().eq($(this).index()).show().siblings().hide();
    $(this).addClass('active').siblings().removeClass('active');
});
$.each($('*[data-js-tabs]'), function (index, el) {
    var arg = window.location.search;
    if (arg != '') {
        arg = arg.split('?')[1].split('=')[1];
        console.log(arg);
        $(el).children().eq(arg - 1).trigger('click');

    } else {
        $(el).children().first().addClass('active');
        $($(el).attr('data-js-tabs')).children().eq(0).show().siblings().hide();;
    }
});
// $('.check-login  .pic input').on('change', function () {
//     var url;
//     $(this).parent().addClass('active');
//     if (window.createObjectURL != undefined) { // basic
//         url = window.createObjectURL(this.files[0]);
//     } else if (window.URL != undefined) { // mozilla(firefox)
//         url = window.URL.createObjectURL(this.files[0]);
//     } else if (window.webkitURL != undefined) { // webkit or chrome
//         url = window.webkitURL.createObjectURL(this.files[0]);
//     }
//     $('.check-login .pic img').attr('src', url);
// });


$('.public-banner').length > 0 &&new Swiper('.public-banner .swiper-container', {
    pagination: '.swiper-pagination',
    autoplay: 3000,
    paginationClickable: true,
})

$(window).on('resize',function() {
    var value = parseInt($('.public-banner img.hidden-xs').height()>$('.public-banner img.visible-xs-block').height()?$('.public-banner img.hidden-xs').height():$('.public-banner img.visible-xs-block').height());
    $('.public-banner').height(value);
})
$(window).trigger('resize');