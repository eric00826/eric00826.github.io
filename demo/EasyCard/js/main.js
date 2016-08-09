/**
 *
 * @authors Eric Hsiao
 *
 */

main = function (){

	//private menbers


	//private methods
	function init () {
		console.log('main is loaded.');

		$('.fb-btn').click(function(event) {
			/* Act on the event */
			shareFB('http://eric00826.github.io/demo/EasyCard/');
		});

		TweenMax.set($('.blogger-box'),{autoAlpha:0});
		$('.blogger-box').css('display', 'block');

		$('.blogger-img-s').mouseover(function(event) {
			TweenMax.to($('.blogger-img-s'),0.3,{scale:1.02,alpha:1});
		});

		$('.blogger-img-s').mouseout(function(event) {
			TweenMax.to($('.blogger-img-s'),0.3,{scale:1,alpha:1});
		});

		$('.blogger-img-s').click(function(event) {
			TweenMax.to($('.blogger-box'),0.5,{autoAlpha:1});
			$('body').css('overflow', 'hidden');
		});

		$('.blogger-box').find('.blogger-close').click(function(event) {
			TweenMax.to($('.blogger-box'),0.3,{autoAlpha:0});
			$('body').css('overflow', 'auto');
		});

		TweenMax.set($('.menu'),{autoAlpha:0});
		$('.menu').css('display', 'block');

		$('.menu-btn').click(function(event) {
			TweenMax.to($('.menu'),0.5,{autoAlpha:1});
			// $('#wrapper').css('display', 'none');
		});

		$('.menu').find('.menu-close').click(function(event) {
			TweenMax.to($('.menu'),0.3,{autoAlpha:0});
			// $('#wrapper').css('display', 'block');
		});

		//////////////////////////

		$('.menu-option-0').click(function(event) {
			if(!isMobile){
	      ga_ButtonClick('bt_navi_home');
	    }else{
	      ga_ButtonClick('bt_m_navi_home');
	    }

			location.href = 'index.html#top-page';
			TweenMax.to($('.menu'),0.3,{autoAlpha:0});
		});

		$('.menu-option-1').click(function(event) {
			if(!isMobile){
	      ga_ButtonClick('bt_navi_blogger');
	    }else{
	      ga_ButtonClick('bt_m_navi_blogger');
	    }

			location.href = 'index.html#comic-page';
			TweenMax.to($('.menu'),0.3,{autoAlpha:0});
		});

		$('.menu-option-2').click(function(event) {

			if(!isMobile){
	      ga_ButtonClick('bt_navi_rule');
	    }else{
	      ga_ButtonClick('bt_m_navi_rule');
	    }

			location.href = 'index.html#rule-page';
			TweenMax.to($('.menu'),0.3,{autoAlpha:0});
		});

		$('.menu-option-3').click(function(event) {
			if(!isMobile){
	      ga_ButtonClick('bt_navi_winner');
	    }else{
	      ga_ButtonClick('bt_m_navi_winner');
	    }

			location.href = 'winner.html';
			// TweenMax.to($('.menu'),0.3,{autoAlpha:0});
		});

		if(nowPage == "index" ) initScrollTop();
	}

	function shareFB(_url) {
    open('https://www.facebook.com/sharer/sharer.php?u=' + _url,'share','width=576px,height=610px');
  }

  var nowScrollTop = 0;
  var nowPageCount = 0;
  var pageTopArray = [];

  function initScrollTop() {

    console.log('initScrolltop');
    updateScrollTop();

    $(window).scroll(function(event) {
      nowScrollTop = $(window).scrollTop();

      // console.log(nowScrollTop);

      updateScrollTop();
    });
  }

  function updateScrollTop() {
    pageTopArray[0] = $('#top-page').offset().top;
    pageTopArray[1] = $('#comic-page').offset().top;
    pageTopArray[2] = $('#tvc-page').offset().top;
    pageTopArray[3] = $('#rule-page').offset().top;

    var _count;

    for (var i = 0; i < pageTopArray.length; i++) {
      if(nowScrollTop > pageTopArray[i] - 300){
        _count =i;
      }
    };

    if(_count != nowPageCount){
      nowPageCount = _count;
      updatePageview();
    }
  }

  function updatePageview() {
    var nextIndex = nowPageCount+1;
    var _tag;
    if(nextIndex == 1){
      _tag = 'index';
    }else if(nextIndex == 2){
      _tag = 'blogger';
    }else if(nextIndex == 3){
      _tag = 'tvc';
    }else if(nextIndex == 4){
      _tag = 'rule';
    }

    if(!isMobile){
      ga_pageView('pv_' + _tag);
    }else{
      ga_pageView('pv_m_' + _tag);
    }
  };

	//constructor

	{
		$(document).ready(function() {

			var iOS = /iPad|iPhone|iPod/.test(navigator.platform);

	    if(iOS){
	    	// alert('iOS line-height');

	    	$('.rule-notice').find('p').css({
	        'font-size': '26px',
	        'line-height': '32px'
	      });

	      $('.no-li').css({
	        'font-size': '26px',
	        'line-height': '32px'
	      });
	    }

			init();
		});
	}

	//public

	return {

	}
}

main = new main();