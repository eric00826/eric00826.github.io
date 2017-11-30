function showLightbox(myTarget){
	$('.mobile-nav').hide();
	$('body').addClass('popupOpen');
	$(myTarget).show();	
}
	
	
function closeLightbox(){
	$('.lightbox').hide();
	$('body').removeClass('popupOpen');
}



function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return false;
}




$(document).ready(function(){

	if( detectIE() && detectIE() < 11 ){
    alert('網站最佳瀏覽環境為IE11，建議您升級您的IE瀏覽器，或使用其他瀏覽器軟體 Google Chrome、Firefox，以獲得最佳瀏覽體驗')
  }

  $('.mySlick').slick({
    infinite: true,
    speed: 800,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
  });

  $('header .entry-btn').css({'color':'white'});
  $('header .entry-btn .btn').css({'border-color':'white'});
  $('header.for_S1 .entry-btn.left .text').css({
    'color':'#f67c91',
    'text-shadow': '0px 0px 10px rgb(0, 0, 0)'
  });
  $('header.for_S2 .entry-btn.right .text').css({
    'color':'#f67c91',
    'text-shadow': '0px 0px 10px rgb(0, 0, 0)'
  });

  $('.lightbox .board').css({
    'padding': '15px',
    'padding-top': '60px',
  })

  $('.lightbox#winner .board').css({'max-width': '840px'});

  if( window.matchMedia("(max-width: 767px)").matches ){
    $('.winner_table img').css({'max-width': '110vw'});
  }else{
    $('.winner_table img').css({'max-width': '780px'});
  }

  
});
    
$(window).load(function() {

});