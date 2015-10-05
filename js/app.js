$(window).load(function() {

    $(".loader").fadeOut("slow");

    $( document ).ready(function(){


      $('.slider').slider({
        interval:2500
      });
      $('.materialboxed').materialbox();

      $('.button-collapse').sideNav({
          menuWidth: 500,
          closeOnClick: true
        }
      );
       $('.parallax').parallax();

       window.addEventListener('scroll', function(e){
         var distanceY = window.pageYOffset || document.documentElement.scrollTop,
             shrinkOn = 400,
             header = $('#logo')
         if (distanceY > shrinkOn) {
             $('#logo').addClass('pequenio')
             $('#menu').addClass('blue z-depth-5')
             $('#logo2').removeClass('invisible')
         } else {
             if ( $('#logo').hasClass('pequenio')) {
                  $('#menu').removeClass('blue z-depth-5')
                  $('#logo').removeClass('pequenio')
                  $('#logo2').addClass('invisible')
             }

         }
     });

     $('a[href^="#"]').on('click',function (e) {
          e.preventDefault();
          var target = this.hash;
          if(target == "#2013" || target == "#2014" || target == "#2015")
          {
            return;
          }
          var $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top

          }, 900, 'swing', function () {

              window.location.hash = target;
          });
      });
      $( '#2013').mouseenter( function(){  $(this)[0].src = 'img/color2013.png';} ).mouseleave( function(){  $(this)[0].src = 'img/bn2013.png';});
      $( '#2014').mouseenter( function(){  $(this)[0].src = 'img/color2014.png';} ).mouseleave( function(){  $(this)[0].src = 'img/bn2014.png';});
      $( '#2015').mouseenter( function(){  $(this)[0].src = 'img/color2014.png';} ).mouseleave( function(){  $(this)[0].src = 'img/bn2014.png';});
      $('#enviar-formulario').click(function(){
        nombre = $('#nombre')[0].value;
        correo = $('#correo')[0].value;
        mensaje = $('#mensaje')[0].value;

        if(nombre === '' || correo === '' || mensaje === '' )
        {
          $('#error').addClass('visible');
          return;
        }
        /*$.post('php/contacto.php',
          {

          },
          function(data, status){
              alert("Data: " + data + "\nStatus: " + status);
          }
        );*/


      });

    });

});
