$(document).click(function () {
	$('.input-search').removeClass('active');
	$('.zing-play__header--mobile .navigation').removeClass('active')
})

/** search */
$('.search').click(function (e) {
	e.stopPropagation();
	$('.input-search').toggleClass('active')
})

$(window).on('scroll', function () {

	var temp = $(this).scrollTop();

	if (temp > 100) {
		$('.zing-play__header--pc').addClass('active-scroll')
	} else {
		$('.zing-play__header--pc').removeClass('active-scroll')
	}
});
// banner

/**
 * banner slider 
 */


$('.slider-banner').not('.slick-initialized').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	autoplay: true,
	responsive: [
		{

			breakpoint: 767,
			settings: {
				dots: true,
			}
		}
	]
})


$('.slider-casual').not('.slick-initialized').slick({
	slidesToShow: 4, 
	slidesToScroll: 1, 
	dots: false, 
	arrows: false,
	responsive: [
		{

			breakpoint: 767,
			settings: {
				slidesToShow: 1, 
				centerMode: true,
				infinite:false
			}
		}
	] 
})

$('.slider-card').not('.slick-initialized').slick({
	slidesToShow: 4, 
	slidesToScroll: 1, 
	dots: false, 
	arrows: false,
	responsive: [
		{

			breakpoint: 767,
			settings: {
				slidesToShow:1, 
			}
		}
	]  
})

/**
 * click tab for list games
 */

$('.list-game__tabs .tab').click(function(){
	var typeGame = $(this).attr('data-typeGame');
	$('.list-game__tabs .tab').removeClass('active');
	$(this).closest('.zing-play__list-game').find('.list-game__tabs .tab__'+ typeGame).addClass('active')

	$('.list-game__contents .list-game__item').removeClass('active')
	$(this).closest('.zing-play__list-game').find('.list-game__contents .list-game__'+ typeGame).addClass('active')
})

$('.list-eventsNews__tabs .tab').click(function(){
	var typeEvent = $(this).attr('data-typeEvent')
	$('.list-eventsNews__tabs .tab').removeClass('active');
	$(this).closest('.zing-play__eventsNews').find('.list-eventsNews__tabs .tab__'+ typeEvent).addClass('active')

	$('.list-eventsNews__contents .list-eventsNews__item').removeClass('active')
	$(this).closest('.zing-play__eventsNews').find('.list-eventsNews__contents .list-eventsNews__'+ typeEvent).addClass('active')
})

$('.gotoTop').click(function() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
})

$('.icon-toggle').click(function(e) {
	e.stopPropagation()
	$('.zing-play__header--mobile .navigation').toggleClass('active');
	$('.zing-play__header--mobile .input-search-mobile').removeClass('active');
})

$('.icon-toggle-search').click(function(e) {
	e.stopPropagation()
	$('.zing-play__header--mobile .input-search-mobile').toggleClass('active');
	$('.zing-play__header--mobile .navigation').removeClass('active')
})


onResize = function() {
    if($(window).width() < 767) {
        $('.list-eventsNews__item').removeClass('active');
		$('.list-eventsNews__events').addClass('active');
    } 
}
$(document).ready(onResize);
$(window).resize(onResize);