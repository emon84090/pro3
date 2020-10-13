

 $(document).ready(function(){
    $(".nav-container").sticky({

    	topSpacing:0,
    	zIndex:9999


    });

      AOS.init({

      	duration:1000,
      	 offset: 200,
      	  delay: 20,
      });

  });


$(document).ready(function(){

      $('.owl-carousel').owlCarousel({

      	items:4,
      	margin:20,
      	autoplay:true,
      	 
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
           
        },
        1000:{
            items:4,
           
            loop:false
        }
    }
      });

})


 var preloader=document.querySelector('.loading');

 function myfun1(){

preloader.style.display="none";

 }