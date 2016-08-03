var time1=null,time2=null,time3=null;
$(function(){
  //time1=setInterval(act1,1000);
  //time2=setInterval(act2,1000);
  /*time3=setInterval(act3,1000);
  TweenMax.to($(".sub1 a img"),.3 ,{top:'+=5%',ease:Linear.easeOut ,yoyo:true ,repeat:-1});
  TweenMax.to($(".sub2 a img"),.3 ,{top:'+=5%',ease:Linear.easeOut ,yoyo:true ,repeat:-1});
  $(window).resize(function(){
	TweenMax.pauseAll();
	$(".sub1 a img").attr("style","");	
	$(".sub2 a img").attr("style","");	
	TweenMax.to($(".sub1 a img"),.3 ,{top:'+=5%',ease:Linear.easeOut ,yoyo:true ,repeat:-1});
	TweenMax.to($(".sub2 a img"),.3 ,{top:'+=5%',ease:Linear.easeOut ,yoyo:true ,repeat:-1});
  });*/

  TweenMax.to($(".ani"),.4 ,{x:'5',ease:Linear.easeOut ,yoyo:true ,repeat:-1});

  ('.lists .btn a').mouseover(function(event) {
    $(this).find('.ani').css('display', 'none');
    $(this).find('.over').css('display', 'inline');
  });

  $('.lists .btn a').mouseout(function(event) {
    $(this).find('.ani').css('display', 'inline');
    $(this).find('.over').css('display', 'none');
  });

  $('.sub1 a').mouseover(function(event) {
    $(this).find('.ani').css('display', 'none');
    $(this).find('.over').css('display', 'inline');
  });

  $('.sub1 a').mouseout(function(event) {
    $(this).find('.ani').css('display', 'inline');
    $(this).find('.over').css('display', 'none');
  });
});

function act1(){
  if($(".sub1 a").is(".on")){
	  $(".sub1 a").removeClass("on");
  }else{
	  $(".sub1 a").addClass("on");
  }
}
function act2(){
  if($(".sub2 a").is(".on")){
	  $(".sub2 a").removeClass("on");
  }else{
	  $(".sub2 a").addClass("on");
  }
}
function act3(){
  if($(".item a").is(".on")){
	  $(".item a").removeClass("on");
  }else{
	  $(".item a").addClass("on");
  }
}