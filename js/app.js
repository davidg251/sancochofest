$(window).load(function() {

  $(".loader").fadeOut("slow");
  

  $( document ).ready(function(){

 
       
      $('.parallax').parallax();

        $('.programacionfest').slick({  
          autoplay: true,
         autoplaySpeed: 4000});
        
        $(' .programacionescuela').slick({  
          autoplay: true,
         autoplaySpeed: 4000,
         prevArrow:'<button  type="button" class="slick-prev slick-arrow-dark">Previous</button>',
         nextArrow:'<button  type="button" class="slick-next slick-arrow-dark">Next</button>'

       });

      
   
     var a = $( window ).height();
     $('.slider').slider({height: a+8});

     $('.button-collapse').sideNav({
          menuWidth:240,
          closeOnClick: true
        }
      );
       


       window.addEventListener('scroll', function(e){

         var distanceY = window.pageYOffset || document.documentElement.scrollTop,
             shrinkOn = 100
         
         if (distanceY > shrinkOn) {

             $('#bigmenu').addClass('menu-protected')
             $('#logo').css("display", "none")
         } else {
             if (  $('#bigmenu').hasClass('menu-protected')) {

                  $('#bigmenu').removeClass('menu-protected')
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
          //return;
        
        }else{
        $.post('php/mail.php',
          {
            nombre : nombre,
            correo : correo,
            mensaje : mensaje,
          },
          function(data, status){
              
              alert("Mensaje enviado con Exito !")
            
          }
        );

      }
      });





    });

});
