$('.lanuage').on('click', function () {
    $('.lanuage_child-menu').slideDown(300);
}).on('click', '.lanuage_child-menu span', function (e) {
    e.preventDefault();
    $('.lanuage_child-menu').hide();
    $('.lanuage .text').text($(this).text());
    return false;
})

document.querySelectorAll('.public-banner').length > 0 && new Swiper('.public-banner .swiper-container', {
    pagination : '.swiper-pagination',
    autoplay:3000,
    paginationClickable :true,
})