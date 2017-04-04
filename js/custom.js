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

    $('.carousel').carousel();
    $('.carousel').on('slide.bs.carousel', function () {
		$('.myCarousel_caption').animate({
			marginLeft: "+=20%",
			opacity: 0
		}, 50);
	});

  $('.carousel').on('slid.bs.carousel', function () {
		$('.myCarousel_caption').animate({
			marginLeft: 0,
			opacity: 0.8
		}, 600);
	})
});
