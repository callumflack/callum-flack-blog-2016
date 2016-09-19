$(document).ready(function() {

	// Toggle modal component
	// --------------------------------------------------------------------------

	// $('[data-toggle="modal"]').on('click', function(e) {
	//
	//     e.preventDefault();
	//
	//     $(".Modal").addClass('is-displayed');
	// });
	//
	// $('[data-dismiss="modal"]').on('click', function(e) {
	//
	//     e.preventDefault();
	//
	//     var modalClose = $(this),
	//         modalWindow = modalClose.parents(".Modal"),
	//         modalVideo = modalWindow.find("video");
	//
	//     $(".Modal").removeClass('is-displayed');
	//     // modalVideo.get(0).pause();
	// });


	// Animate input label on :focus
	// @url: http://codepen.io/oknoblich/pen/wFGIH
	// --------------------------------------------------------------------------

	$('input, textarea').each(function() {
		$(this).on('focus', function() {
			$(this).parent('.Form-group').addClass('is-active');
		});
		$(this).on('blur', function() {
			if ($(this).val().length == 0) {
				$(this).parent('.Form-group').removeClass('is-active');
			}
		});
		if ($(this).val() != '') {
			$(this).parent('.Form-group').addClass('is-active');
		}
	});

	$("label").click(function() {
		var labelID = $(this).attr("for");
		$("#" + labelID).focus()
	})


	// Navbar Scroll Event
	// See: http://codepen.io/Craig-Watson/pen/zGbNRL
	// --------------------------------------------------------------------------

	// $(document).ready( function() {
	//
	// 	var lastScrollTop = 0;
	// 	var navToggle     = $(".Nav-bar");
	// 	var navTransition = "Nav-bar--transition";
	//
	// 	$(window).scroll(function(event) {
	// 		var st = $(this).scrollTop();
	//
	// 		if (st > 250 && st > lastScrollTop){
	// 			navToggle.addClass(navTransition);
	// 		} else {
	// 			navToggle.removeClass(navTransition);
	// 		}
	//
	// 		lastScrollTop = st;
	//
	// 	});
	//
	// });


	// owl carousel config
	// @reqs: owl.carousel.min.js
	// @reqs: owl.carousel.css
	// @url: http://www.owlcarousel.owlgraphic.com/docs/started-installation.html
	// --------------------------------------------------------------------------

	// $(document).ready( function() {
	//
	// 	var owl = $('.owl-carousel');
	//
	// 	owl.owlCarousel({
	// 		animateOut: 'fadeOut',
	// 		autoplay: true,
	// 		autoplayTimeout: 5000,
	// 		// autoWidth:true,
	// 		items: 1,
	// 		loop: true,
	// 		smartSpeed: 1000
	// 	});
	//
	// });



	// modal
	// --------------------------------------------------------------------------

	// ( function($) {
	//
	// 	// Based on OUI's dropdown.js
	// 	// See also Todd Motto's data attribute manipulations: https://goo.gl/dFE49n
	// 	// Basics: http://stackoverflow.com/questions/2937227/what-does-function-jquery-mean
	//
	// 	function closeModal() {
	//
	// 		var MODAL        = "[data-modal]",
	// 			ACTIVE_CLASS = "is-active";
	//
	// 		$(MODAL).removeClass(ACTIVE_CLASS);
	// 	}
	//
	// 	// Show the modal in the DOM
	// 	$(document).on("click", "[data-modal-toggle]", function(e) {
	//
	// 		e.stopPropagation();
	//
	// 		// Close any open modals.
	// 		closeModal();
	//
	// 		var MODAL        = "[data-modal]",
	// 			ACTIVE_CLASS = "is-active";
	//
	// 		$(MODAL).addClass(ACTIVE_CLASS);
	//
	// 		// Clicking anywhere outside the modal nav closes the modal.
	// 		// Only attaches if a modal has been triggered.
	//
	// 		$(document).bind("click.modalNav", function() {
	//
	// 			var MODAL        = "[data-modal]",
	// 				ACTIVE_CLASS = "is-active";
	//
	// 			// If any modal is visible, close it.
	// 			if ( $(MODAL).hasClass(ACTIVE_CLASS) ) {
	// 				closeModal();
	// 			}
	//
	// 			$(document).unbind("click.modalNav");
	//
	// 		});
	//
	// 	});
	//
	//
	// })( jQuery );



	// https://github.com/hendriklammers/jquery-colorscroll
	// --------------------------------------------------------------------------

	// $('main').colorScroll({
	// 	colors: [{
	// 		color: '#FE5000',
	// 		position: '0%'
	// 	}, {
	// 		color: '#fdfdfd',
	// 		position: '10%'
	// 	}]
	// });


	// owl carousel config
	// @reqs: owl.carousel.min.js
	// @reqs: owl.carousel.css
	// @url: http://www.owlcarousel.owlgraphic.com/docs/started-installation.html
	// --------------------------------------------------------------------------

	$(document).ready( function() {

		var owl = $('.js-owl');

		owl.owlCarousel({
			animateOut: 'fadeOut',
			autoplay: true,
			autoplayTimeout: 5000,
			// autoWidth:true,
			items: 1,
			loop: true,
			smartSpeed: 1000
		});

	});



	// flickity carousel config
	// @external: flickity.pkgd.js
	// @url: http://flickity.metafizzy.co
	// @url: http://codepen.io/desandro/pen/dPdVNM
	// --------------------------------------------------------------------------

	$(document).ready( function() {

		var $gallery = $('.gallery').flickity({
			arrowShape: {
				x0: 10,
				x1: 60, y1: 50,
				x2: 63, y2: 50,
				x3: 13
			},
			pageDots: false,
			wrapAround: true,
			autoPlay: 5000,
			lazyLoad: true,
			pauseAutoPlayOnHover: false,
			prevNextButtons: false,
			imagesLoaded: true
		});

	});




});
