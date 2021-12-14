// popUp How to Play

$(function(){ 
  $('.btn1').on('click',function(){
    $('.popupRule').css({
      'transform':'translateY(0)',
      'z-index':'999'
    });
    
    $('.rule').addClass('overlay');
    
    $('.popupRule').animate({
      left:'0'
    },1000);
    
    $(this).css({
      'z-index':'-1'
    });
    
    $('.popupRule > .close').on('click',function(){
      $(this).parent().css({
      'transform':'translateY(-800%)'
     });
     
      $('.rule').removeClass('overlay');
      $(this).parent().siblings('.btn1').css({
        'z-index':'1'
      });
    });
  });
});