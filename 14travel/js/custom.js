(function($) { "use strict";


	//Preloader

            Royal_Preloader.config({
                mode           : 'progress',
                background     : '#313131',
                showProgress   : true,
                showPercentage : false
            });
			
	
	//Navigation	

	$('ul.slimmenu').on('click',function(){
			var width = $(window).width(); 
			if ((width <= 1200)){ 
			$(this).slideToggle(); 
		}	
	});				
	$('ul.slimmenu').slimmenu(
			{
			resizeWidth: '1200',
			collapserTitle: '',
			easingEffect:'easeInOutQuint',
			animSpeed:'medium',
			indentChildren: true,
			childrenIndenter: '&raquo;'
	});

	
	/* Scroll animations */
	
      window.scrollReveal = new scrollReveal();
	
	
	//Home text fade on scroll	
	
	$(window).scroll(function () { 
        var $Fade = $('.fade-elements');
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop();
        //Slow scroll and fade it out 
        $Fade.css({
            'margin-top': -(windowScroll / 0) + "px",
            'opacity': 1 - (windowScroll / 400)
        });
    });	

	
	/* animated icons */
	
	var options = {
	  duration: 200, 
	  type: 'oneByOne',
	  animTimingFunction: Vivus.EASE
	};

	var vivus = new Vivus('svg-icon-1',	options, onComplete);
				new Vivus('svg-icon-2',	options, onComplete);
				new Vivus('svg-icon-3',	options, onComplete);
				new Vivus('svg-icon-4',	options, onComplete);
				new Vivus('svg-icon-5',	options, onComplete);
				new Vivus('svg-icon-6',	options, onComplete);
				new Vivus('svg-icon-7',	options, onComplete);
				new Vivus('svg-icon-8',	options, onComplete);
				new Vivus('svg-icon-9',	options, onComplete);
				new Vivus('svg-icon-10', options, onComplete);
				new Vivus('svg-icon-11', options, onComplete);
				new Vivus('svg-icon-12', options, onComplete);

	function onComplete() {}
	
	
	/* Scroll Too */
	
			$(window).load(function(){"use strict";
				
				/* Page Scroll to id fn call */
				$("ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
					highlightSelector:"ul.slimmenu li a",
					offset: 78,
					scrollSpeed:800,
					scrollEasing: "easeInOutCubic"
				});
				
				/* demo functions */
				$("a[rel='next']").click(function(e){
					e.preventDefault();
					var to=$(this).parent().parent("section").next().attr("id");
					$.mPageScroll2id("scrollTo",to);
				});
				
			});	



	
	$(document).ready(function() {

		//Tooltip

		$(".tipped").tipper();


		/* Logos Carousel */		
		
		$("#owl-logos").owlCarousel({
			items : 5,
			itemsDesktop : [1000,4], 
			itemsDesktopSmall : [900,3],
			itemsTablet: [600,2], 
			itemsMobile : false, 
			navigation: false,
			pagination : false,
			autoPlay : 3000,
			slideSpeed : 300
		});
	
		//Parallax
		
		$('.parallax-home').parallax("50%", 0.3); 
		$('.parallax-1').parallax("50%", 0.3); 
		$('.parallax-2').parallax("50%", 0.3); 
		$('.parallax-3').parallax("50%", 0.3); 
		$('.parallax-4').parallax("50%", 0.3); 
		$('.parallax-5').parallax("50%", 0.3); 

	
	});	


	
	
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	