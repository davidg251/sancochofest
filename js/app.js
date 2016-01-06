$(window).load(function() {


         $(".loader").fadeOut("slow");
    $( document ).ready(function(){
      var counter = 0;
      timer = setInterval(function() {

       $("#contador").html(counter++);
       if(counter > 109){clearInterval(timer);}

     }, 10);

        $(document).ready(function(){
  
    });
       


 var a = $( window ).height();
 $('.slider').slider({height: a+8});

      $('.button-collapse').sideNav({
          menuWidth: 500,
          closeOnClick: true
        }
      );
       //$('.parallax').parallax();


       window.addEventListener('scroll', function(e){

         var distanceY = window.pageYOffset || document.documentElement.scrollTop,
             shrinkOn = 200,
             header = $('#menugrande')
         if (distanceY > shrinkOn) {

             $('#menu').removeClass('enlaces-trans')
             $('#logo').css("display", "none")
         } else {
             if ( ! $('#menu').hasClass('enlaces-trans')) {

                  $('#menu').addClass('enlaces-trans')
                  $('#logo').css("display", "initial")
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



      $('#enviar-formulario').click(function(){
        nombre = $('#nombre')[0].value;
        correo = $('#correo')[0].value;
        mensaje = $('#mensaje')[0].value;

        if(nombre === '' || correo === '' || mensaje === '' )
        {
          $('#error').removeClass('hide');

          return;
        }else{
        $.post('php/mail.php',
          {
            nombre : nombre,
            correo : correo,
            mensaje : mensaje,
          },
          function(data, status){
              alert("Data: " + data + "\nStatus: " + status);
              console.log(data);
          }
        );

      }
      });





    });

});
