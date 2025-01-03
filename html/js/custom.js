jQuery(document).ready(function(){
jQuery('.brands-slider').slick({
  arrows: true,	
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
 {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }	
]	
  
});	

jQuery('.testimonial-slider').slick({
  dots: true,
  arrows: false,  
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});	

//

Tu.tScroll({
't-element': '.ts'
});

//

Tu.tScroll({
't-element': '.main-banner .lightSpeedLeft',
't-duration': 0.07,
't-delay': 1
});

//
Tu.tScroll({
't-element': '.main-banner .fadeUp',
't-delay': 2
});


// Pricing switcher button
$(".switcher__button").on('click', function(e) { 
$(".switcher__button").toggleClass('switcher__button--enabled');
$(".pricing__value").removeClass('pricing__value--hidden');
$(".pricing__value").toggleClass('pricing__value--show pricing__value--hide');	
});

//
load_animation();
function load_animation(){
           jQuery( ".loader" ).animate({
               'border-radius': "50%",
               'top':  "-200%",
             }, 400, function() {
               // Animation complete.
             });
       }
	
});


//

 jQuery(document).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 80) {
        jQuery("body").addClass("header-sticked");
    }else{
    	jQuery("body").removeClass("header-sticked");
    }
});