$(document).ready(function(){
  $(".hamberger_menu").on("click",function(){
    if($('#collapse_nav').css('display') == 'none')
      {
        $('#collapse_nav').css('display','block');
      }
      else{
        $('#collapse_nav').css('display','none');
      }
  });

    // $('.carousel').carousel();
    $('.carousel').on('slide.bs.carousel', function () {
		$('.myCarousel_caption').animate({
			marginLeft: "+=20%",
			opacity: 0
		});
	});

  $('.carousel').on('slid.bs.carousel', function () {
		$('.myCarousel_caption').animate({
			marginLeft: 0,
			opacity: 0.8
		});
	})


  // hover curtain menu
  // var parent = ".site-navigation";
  $('.hover_nav').hover(
      function(){
          $(".curtain_hidden").slideDown(350);
          // $('.site-navigation').css('background-color','#fff');
          // $('.site-navigation').css('border-bottom','1px solid #939493');
          $('.hover_toggle').css('color','#000');
          $('.hover_toggle').hover(function(){
            $(this).css("color", "#ff6709");
        },function()
         {
           $(this).css("color", "#fff");
        });
      },
      function(){
          $('.curtain_hidden').slideUp(350);
          $('.site-navigation').css('background-color','transparent');
          $('.site-navigation').css('border-bottom','none');
          // $('.hover_toggle').removeClass('white_bk', e.type === 'mouseenter');
          $('.hover_toggle').css('color','#fff');
      }
      // function(){ $(this).addClass('white_bk'); },
      // function(){ $(this).removeClass('white_bk'); }
  );

  // $(link2).hover(
  //     function(){
  //         $(content2).slideDown(350);
  //     },
  //     function(){
  //         $(content2).slideUp(350);
  //     }
  // );
  $('.first_child_li').hover(
      function(){
          $('img#fli1').attr('src','images/f_li.jpg');
          $('img#fli2').attr('src','images/fli3.jpg');
          $('img#fli3').attr('src','images/fli4.jpg');
          $('img#fli4').attr('src','images/fli4.jpg');
      }
  );
  $('.second_child_li').hover(
      function(){
        $('img#fli1').attr('src','images/fli25.jpg');
        $('img#fli2').attr('src','images/fli21.jpg');
        $('img#fli3').attr('src','images/fli22.jpg');
        $('img#fli4').attr('src','images/fli23.jpg');
      }
  );
  $('.third_child_li').hover(
      function(){
        $('img#fli1').attr('src','images/headphone1.jpg');
        $('img#fli2').attr('src','images/headphone2.jpg');
        $('img#fli3').attr('src','images/fli33.jpg');
        $('img#fli4').attr('src','images/fli34.jpg');
      }
  );
  $('.fourth_child_li').hover(
      function(){
        $('img#fli1').attr('src','images/ap08.jpg');
        $('img#fli2').attr('src','images/fli46.jpg');
        $('img#fli3').attr('src','images/fli41.jpg');
        $('img#fli4').attr('src','images/fli42.jpg');
      }
  );
  $('.fifth_child_li').hover(
      function(){
        $('img#fli1').attr('src','images/fli51.jpg');
        $('img#fli2').attr('src','images/fli55.jpg');
        $('img#fli3').attr('src','images/fli44.jpg');
        $('img#fli4').attr('src','images/fli4.jpg');
      }
  );

});
