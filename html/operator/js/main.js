jQuery(document).ready(function($) {

	'use strict';

        $(function() {
  
          // Vars
          var time = $('#distribution');
          var timebefore=0;
          var timenow =0;
          var modBtn  = $('#modBtn'),
              modal   = $('#modal'),
              close   = modal.find('.close-btn img'),
              modContent = modal.find('.modal-content');
          
          // open modal when click on open modal button 
          modBtn.on('click', function() {
            modal.css('display', 'block');
            modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
          });
          
          time.on('click',function(){
            if(timenow ==0){
              timenow = Date.now();
            }
            else{
              timebefore = timenow;
              timenow = Date.now();
            }
            var flow = (timenow - timebefore)/40000000000;
            var day = parseInt(flow / 86400);
            var remainderDay = flow % 86400;
            var hour = parseInt(remainderDay / 3600);
            var remainderHour = remainderDay % 3600;
            var minute = parseInt(remainderHour /60);
            var second = remainderHour & 60;
            alert(day+"day "+hour+"hour "+minute+"min "+second+"sec has passed from last distribution");
          });

          // close modal when click on close button or somewhere out the modal content 
          $(document).on('click', function(e) {
            var target = $(e.target);
            if(target.is(modal) || target.is(close)) {
              modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                next();
              });
            }
          });
          
        });

        // on click event on all anchors with a class of scrollTo
        $('a.scrollTo').on('click', function(){
          
          // data-scrollTo = section scrolling to name
          var scrollTo = $(this).attr('data-scrollTo');
          
          
          // toggle active class on and off. added 1/24/17
          $( "a.scrollTo" ).each(function() {
            if(scrollTo == $(this).attr('data-scrollTo')){
              $(this).addClass('active');
            }else{
              $(this).removeClass('active');
            }
          });
          
          
          // animate and scroll to the sectin 
          $('body, html').animate({
            
            // the magic - scroll to section
            "scrollTop": $('#'+scrollTo).offset().top
          }, 1000 );
          return false;
          
        })
 

        $(".menu-icon").click(function() {
          $(this).toggleClass("active");
          $(".overlay-menu").toggleClass("open");
        });

});
