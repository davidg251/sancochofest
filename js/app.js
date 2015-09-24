$( document ).ready(function(){


  $('.button-collapse').sideNav({
      menuWidth: 500, // Default is 240

      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
   $('.parallax').parallax();

   window.addEventListener('scroll', function(e){
     var distanceY = window.pageYOffset || document.documentElement.scrollTop,
         shrinkOn = 400,
         header = $('#logo')
     if (distanceY > shrinkOn) {
         $('#logo').addClass('pequenio');
     } else {
         if ( $('#logo').hasClass('pequenio')) {
              $('#logo').removeClass('pequenio')
         }
     }
 });

 $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);


      $('html, body').stop().animate({
          'scrollTop': $target.offset().top

      }, 900, 'swing', function () {

          window.location.hash = target;
      });
  });

})
