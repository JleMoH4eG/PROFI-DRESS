$(document).ready(function(){
	$('.reviews__slider').slick({
		slidesToShow: 2,
		speed: 600,
		draggable: true,
		swipeToSlide: true,
		responsive: [{
			breakpoint: 901,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 769,
			settings: {
				dots: true,
				slidesToShow: 1,
				arrows: false,
			}
		}],
	}),
	$('.goods__row').slick({
		slidesToShow: 3,
		rows: 2,
		draggable: true,
		swipeToSlide: true,
		responsive: [{
			breakpoint: 1250,
			settings: {
				rows: 1,
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
			}
		},
		{
			breakpoint: 851,
			settings: {
				rows: 1,
				slidesToShow: 1,
				dots: true,
			}
		},
		{
			breakpoint: 780,
			settings: {
				rows: 1,
				slidesToShow: 1,
				dots: true,
				arrows: false,
			}
		}],
	})
})