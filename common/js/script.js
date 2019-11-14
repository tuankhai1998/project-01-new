$(document).ready(function () {

    let menuMobile = $('.js-header-menu-mobile');
    let btnMenu = $('.js-header-btn');
    let win = $(window);

    $('.relate-posts-slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
    });

    win.click(function (e) {
		menuMobile.slideUp(200);
		$('.fa-times').replaceWith('<i class="fas fa-bars"></i>');
		menuForMobile.find('li i').nextAll("ul").slideUp(200);
		menuForMobile.find('li i').removeClass('active');
		filterItem.nextAll("ul").slideUp(200);
	})

    btnMenu.click(function (e) {
        e.stopPropagation();
        if (menuMobile.is(":hidden") === true) {
            menuMobile.slideDown(200);
            $('.fa-bars').replaceWith('<i class="fas fa-times"></i>');
        }
        else {
            menuMobile.slideUp(200);
            $('.fa-times').replaceWith('<i class="fas fa-bars"></i>');
            menuMobile.find('li i').nextAll("ul").slideUp(200);
            menuMobile.find('li i').removeClass('active');
        }
    });

    menuMobile.find('li').each(function () {
        if ($(this).find('ul li').length > 0) {
            $(this).prepend('<i class="has_sub fas fa-angle-down"></i>');
        }
    });

    menuMobile.find('li i').click(function (e) {
		e.stopPropagation();
		let ul = $(this).nextAll("ul");
		if (ul.is(":hidden") === true) {
			ul.slideDown(200);
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active');
			ul.slideUp(200);
		}
  });
});