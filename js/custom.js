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
});
