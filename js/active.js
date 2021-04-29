(function ($) {
	"use strict";
	/* Header-area */
    jQuery(document).ready(function($){
        $(".header-slider-area").owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			navText:['<i class="fa fa-angle-left"></i>',
		'<i class="fa fa-angle-right"></i>'],
			dots:true,
			items:1,
			autoplay:false,
			autoplayTimeout:4000,
			animateIn:'fadeIn'
		});
		 /* ityped js */
	ityped.init("#ityped",{ 
		strings : ['Myself Muhammad Hassan    ' ,' I am Full  STACK Cross side  developer ' ,],
		loop:true,
		typeSpeed:55,
		backSpeed:20,
		});		
		/* Counter Up */
		$('.counter').counterUp({
                delay: 10,
                time: 1000
            }); 
			
		 /* Testimonial-area */
        $(".testimonial-slider-area").owlCarousel({
			loop:true,
			margin:10,
			items:1,
			dots:true,
			nav:true,
			navText:['<i class="fa fa-angle-left"></i>',
		'<i class="fa fa-angle-right"></i>'],
			autoplay:true,
			autoplayTimeout:3000,
			animateIn:'fadeIn'
		});
    });

    jQuery(window).load(function(){
			/* TOP Menu Stick  */
			$(window).on('scroll',function() {
			if ($(this).scrollTop() > 1){  
				$('.header-top-area').addClass("sticky");
			  }
			  else{
				$('.header-top-area').removeClass("sticky");
			  }
			}); 
		});
}(jQuery));	
