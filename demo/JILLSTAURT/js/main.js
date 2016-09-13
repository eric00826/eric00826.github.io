/**
 *
 * @authors Eric Hsiao
 *
 */

main = function (){

	//private menbers
	var productIntro_t;
	var productIntro_t2;
	var promoIntro_t;

	//private methods
	function init () {
		console.log('main is loaded.');

		if(!isMobile){

			topIntro();
			productIntro();
			productIntro_2();

			promoIntro_t = new TimelineMax();
			promoIntro_t.from('#btnpromo',1.5,{x:-20,width:0,autoAlpha:0,ease: Expo.easeInOut});
			promoIntro_t.stop();

			setSkrollr($('#video-content'), [[1300, 'opacity:0;top:200px'], [1750, 'opacity:1;top:100px'], [2000, 'opacity:1;top:0px']]);
			setSkrollr($('#blogger-content'), [[2100, 'opacity:0;top:100px'], [2600, 'opacity:1;top:50px'], [3200, 'opacity:1;top:-50px']]);
			setSkrollr($('#form-content'), [[2600, 'opacity:0;top:150px'], [3100, 'opacity:1;top:0px'], [3600, 'opacity:1;top:-100px']]);

			updateScrollTop();

			$(window).scroll(function(event) {
				updateScrollTop();
			});

			skrollr.init({
	      smoothScrolling: true
	    });

    }else{
    	TweenMax.to('.top-girl-img',5,{y:10, rotation:6 , yoyo:true,ease: Sine.easeInOut,repeat:-1});
			TweenMax.to('.top-girl-img-2',3,{y:-30, yoyo:true,ease: Sine.easeInOut,repeat:-1});

    	TweenMax.to('.loading-mask',2,{autoAlpha:0});
    	TweenMax.to('.btn-cta-arr',0.5,{x:5,yoyo:true,ease:Power2.easeOut,repeat:-1});
    }

    /**********************/

    $('.top-cta').click(function(event) {
    	TweenMax.to(window, 2, {scrollTo:{y:$("#form-page").offset().top-20},ease: Cubic.easeInOut});
    });

    TweenMax.set('.alert-mask',{autoAlpha:0});

    $('.input-7').click(function(event) {
    	 TweenMax.to('.alert-mask',0.8,{autoAlpha:1});
    });

    $('.alert-close').click(function(event) {
    	 TweenMax.to('.alert-mask',0.3,{autoAlpha:0});
    });
	}

	function updateScrollTop() {
		var _top = $(window).scrollTop();
		console.log(_top);

		if (_top == 0) {

		}else if(_top > 3600) {
			promoIntro_t.play();
		}else if (_top > 700) {
			console.log('productIntro_t2.play();');
			productIntro_t2.play();
		}else if(_top > 300) {
			productIntro_t.play();
		}else{
				// productIntro_t.seek(0);
				// productIntro_t.stop();
		}
	}

	function topIntro() {

		TweenMax.from('#logo',1,{y:10,autoAlpha:0});
		TweenMax.to('.btn-cta-arr',0.5,{x:5,yoyo:true,ease:Power2.easeOut,repeat:-1});

		TweenMax.to('.top-girl-img',5,{y:10, rotation:6 , yoyo:true,ease: Sine.easeInOut,repeat:-1});
		TweenMax.to('.top-girl-img-2',3,{y:-30, yoyo:true,ease: Sine.easeInOut,repeat:-1});
		
		var _topIntroAni = new TimelineMax();
		_topIntroAni.to('.loading-mask',2,{autoAlpha:0});
		// _topIntroAni.from('#logo',2,{scale:1.2,y:10,autoAlpha:0,ease: Expo.easeOut},"-=0.3");
		_topIntroAni.from('#top-title-copy-1',1.5,{y:10,autoAlpha:0},"-=0.5");
		_topIntroAni.from('#top-title-line',1,{scaleX:0},"-=1.3");
		_topIntroAni.from('#top-title-copy-2',0.8,{y:10,autoAlpha:0},"-=1");

		_topIntroAni.from('#top-girl',3,{x:-20,scale:1.1,y:100},"-=4.0");

		_topIntroAni.from('.top-cta',1.5,{x:-20,width:0,autoAlpha:0,ease: Expo.easeInOut},"-=0.8");
		_topIntroAni.from('#top-sub-copy',0.8,{autoAlpha:0},"-=0.6");

		setSkrollr($('#top-girl'), [[0, 'top:-173px'], [1500, 'top:-500px']]);
	}

	function productIntro () {
		productIntro_t = new TimelineMax();
		// productIntro_t.from('#product-page',1,{autoAlpha:0});
		// productIntro_t.from('#product1title',1.5,{y:30},"0");

		setSkrollr($('#product1title'), [[0, 'opacity:0;top:184px'], [500, 'opacity:1;top:114px']]);
		setSkrollr($('.product-copy'), [[200, 'opacity:0'], [400, 'opacity:1']]);
		setSkrollr($('#pro'), [[0, 'top:-380px'], [650, 'top:-412px']]);

		setSkrollr($('#product-page'), [[300, 'background-position:center -50px'], [1800, 'background-position:center 50px']]);

		productIntro_t.from('#product1line',1,{scaleX:0},"-=1.3");
		productIntro_t.from('#product1copya',1.5,{x:-50,autoAlpha:0,ease: Expo.easeOut},"-=0.5");
		productIntro_t.from('#product1copyb',1.5,{x:-50,autoAlpha:0,ease: Expo.easeOut},"-=1");
		productIntro_t.from('#product1copyc',1.5,{x:-50,autoAlpha:0,ease: Expo.easeOut},"-=1");

		productIntro_t.stop();
	}

	function productIntro_2 () {
		productIntro_t2 = new TimelineMax();

		setSkrollr($('#product2title'), [[400, 'top:800px'], [700, 'top:780px']]);

		productIntro_t2.from('#product2title',2,{y:50,autoAlpha:0,ease: Expo.easeOut},"");
		productIntro_t2.from('#product2line',1,{scaleX:0},"-=1.3");
		productIntro_t2.from('#product2copy1',1.5,{x:-50,autoAlpha:0,ease: Expo.easeOut},"-=0.5");
		productIntro_t2.from('#product2copy2',1.5,{x:-50,autoAlpha:0,ease: Expo.easeOut},"-=1");
		productIntro_t2.from('#product2copy3',1.5,{x:-50,autoAlpha:0,ease: Expo.easeOut},"-=1");
		productIntro_t2.from('#product2copy4',1.5,{x:-50,autoAlpha:0,ease: Expo.easeOut},"-=1");

		productIntro_t2.from('.product-num',1.5,{y:10,autoAlpha:0},"");

		productIntro_t2.stop();
	}


	function setSkrollr ($el, data) {
      for (var i = 0, l = data.length; i < l; i++) {
          $el.attr('data-' + data[i][0], data[i][1]);
      }
  }

	//constructor

	{
		$(document).ready(function() {
			init();
		});
	}

	//public

	return {

	}
}

main = new main();