$('.ma-full-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	asNavFor: '.ma-mini-slider'
});
$('.ma-mini-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	infinite:true,
	asNavFor: '.ma-full-slider',
	focusOnSelect: true,
	centerMode: true,
	centerPadding: "0px"
});