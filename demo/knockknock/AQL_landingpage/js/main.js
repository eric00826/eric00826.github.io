/**
 *
 * @authors Eric Hsiao
 *
 */

main = function (){

	//private menbers
	var myScroll = false;

	var kvIntro;
	var tvcIntro;
	var spIntro;
	var productIntro;
	var bloggerIntro;
	var mediaIntro;

	//private methods
	function init () {
		console.log('main is loaded.');

		myScroll = $("html").niceScroll({
			autohidemode: false,
			cursorcolor:'#269bd8'
		});

		initAnimation();
		initMenu();
		initProduct();

		updateScrollTop();

		$(window).scroll(function(event) {
			updateScrollTop();
		});
	}

	function updateScrollTop () {
		var _top = $(window).scrollTop();
		console.log(_top);

		if (_top == 0) {
			updateNavPoint(0);
		}else if(_top > 4300) {
			updateNavPoint(6);
		}else if(_top > 3700) {
			mediaIntro.play();
			updateNavPoint(5);
		}else if(_top > 2400) {
			bloggerIntro.play();
			updateNavPoint(4);
		}else if(_top > 1500) {
			productIntro.play();
			updateNavPoint(3);
		}else if(_top > 900) {
			spIntro.play();
			updateNavPoint(2);
		}else if(_top > 100) {
			tvcIntro.play();
			updateNavPoint(1);
		}
	}

	function initAnimation() {
		//TVC Page
		kvIntro = new TimelineMax();
		kvIntro.from('.kv-image-large',4,{y:20,scale:1.05,autoAlpha:0,ease: Expo.easeOut});
		// kvIntro.from('.tvc-title',2.5,{y:-20,autoAlpha:0,ease: Expo.easeOut},"-=3");
		
		//TVC Page
		tvcIntro = new TimelineMax();
		tvcIntro.from('.tvc-title',2.5,{y:-20,autoAlpha:0,ease: Expo.easeOut});
		tvcIntro.from('.tvc-player',2.5,{y:50,autoAlpha:0,ease: Expo.easeOut},"-=2.2");
		tvcIntro.from('.player-btn-list',2.0,{y:10,autoAlpha:0},"-=2.2");
		tvcIntro.stop(0);

		TweenMax.to('.sp-wave-1',50,{x:-1920,repeat:-1,ease: Power0.easeNone});
		TweenMax.to('.sp-wave-2',50,{x:-1920,repeat:-1,ease: Power0.easeNone});

		spIntro = new TimelineMax();
		spIntro.from('.sp-icon',3,{y:-20,ease: Expo.easeOut});
		spIntro.from('.sp-text',3,{x:-50,autoAlpha:0,ease: Expo.easeOut},"-=2.8");
		spIntro.from('.sp-dialogue',1.2,{scale:.2,autoAlpha:0,ease: Elastic.easeOut.config(1, 0.5)},"-=2.5");
		spIntro.stop(0);

		productIntro = new TimelineMax();
		productIntro.from('.product-title',2.5,{y:-20,autoAlpha:0,ease: Expo.easeOut});
		productIntro.from('.product-banner-list',3,{y:50,autoAlpha:0,ease: Expo.easeOut},"-=2.8");
		productIntro.stop(0);

		/****************************************/

		bloggerIntro = new TimelineMax();
		bloggerIntro.from('.blogger-title',2.5,{y:-20,autoAlpha:0,ease: Expo.easeOut});
		bloggerIntro.from('.blogger-content-01',2.5,{y:50,autoAlpha:0,ease: Elastic.easeOut.config(1, 0.5)},"-=2.2");
		bloggerIntro.from('.blogger-content-02',2.5,{y:50,autoAlpha:0,ease: Elastic.easeOut.config(1, 0.5)},"-=2.2");
		bloggerIntro.from('.blogger-content-03',2.5,{y:50,autoAlpha:0,ease: Elastic.easeOut.config(1, 0.5)},"-=2.2");
		bloggerIntro.from('.blogger-content-04',2.5,{y:50,autoAlpha:0,ease: Elastic.easeOut.config(1, 0.5)},"-=2.2");
		bloggerIntro.stop(0);

		var _bubble = $('.blogger-content-01').find('.blogger-bubble');
	
		for (var i = 1; i <= 4; i++) {
			var _target = $('.blogger-content-0' + i)
			var _bubble = _target.find('.blogger-bubble');
			var _pic = _target.find('.blogger-pic');
			var _product = _target.find('.blogger-product');

			var t = 1;
			if(i%2 == 0){
				var t = -1;
			}

			var _delay = Math.random()*3;
			TweenMax.to(_bubble,3.5,{y:30*t - _delay*5, rotation:2, yoyo:true,ease: Sine.easeInOut,repeat:-1});
			_delay = Math.random()*3;
			TweenMax.to(_pic,2.5,{y:20*t - _delay*5, rotation:2, yoyo:true,ease: Sine.easeInOut,repeat:-1});
			_delay = Math.random()*3;
			TweenMax.to(_product,3,{y:10*t - _delay*5, rotation:2, yoyo:true,ease: Sine.easeInOut,repeat:-1});
		};

		mediaIntro = new TimelineMax();
		mediaIntro.from('.media-title',2.5,{y:-20,autoAlpha:0,ease: Expo.easeOut});
		mediaIntro.from('.media-list',2.5,{y:50,autoAlpha:0,ease: Expo.easeOut},"-=2.2");	
		mediaIntro.stop(0);


		//hide preloading
		TweenMax.to('.preloading',1,{autoAlpha:0});
	}

	function initMenu() {
		/*for (var i = 1; i <= 6; i++) {
			var _nav = $('.top-menu-nav-' + i);
			_nav.data('count', i);
		};*/

		var menuHeight = 120;

		$('.top-menu-nav-1').click(function(event) {
			$('html').getNiceScroll(0).doScrollTop($('#tvc-page').offset().top - menuHeight);
		});

		$('.top-menu-nav-2').click(function(event) {
			$('html').getNiceScroll(0).doScrollTop($('#bady-sp-page').offset().top - menuHeight);
		});

		$('.top-menu-nav-3').click(function(event) {
			$('html').getNiceScroll(0).doScrollTop($('#product-page').offset().top - menuHeight);
		});

		$('.top-menu-nav-4').click(function(event) {
			$('html').getNiceScroll(0).doScrollTop($('#blogger-page').offset().top - menuHeight);
		});

		$('.top-menu-nav-5').click(function(event) {
			$('html').getNiceScroll(0).doScrollTop($('#media-page').offset().top - menuHeight);
		});

		$('.top-menu-nav-6').click(function(event) {
			$('html').getNiceScroll(0).doScrollTop($('.store-footer').offset().top - menuHeight);
		});
	}

	var autoPlay;
	var nowProductBannerCount = 2;

	function initProduct() {
		gotoProductBanner(nowProductBannerCount);

		$('.product-banner-nav-1').click(function(event) {
			gotoProductBanner(1);
			clearTimeout(autoPlay);

			/*setTimeout(function () {
				// body...
			},5000);*/

			startTimeout();
		});

		$('.product-banner-nav-2').click(function(event) {
			gotoProductBanner(2);
			clearTimeout(autoPlay);
			startTimeout()
		});

		$('.product-banner-nav-3').click(function(event) {
			gotoProductBanner(3);
			clearTimeout(autoPlay);
			startTimeout()
		});

		$('.product-banner-pre').click(function(event) {
			preProductBanner();
			clearTimeout(autoPlay);
			startTimeout()
		});

		$('.product-banner-next').click(function(event) {
			nextProductBanner();
			clearTimeout(autoPlay);
			startTimeout()
		});

		startTimeout();
	}

	function startTimeout() {
		autoPlay = setInterval(function () {
			nextProductBanner();
		},5000);
	}

	function preProductBanner() {
		if(nowProductBannerCount > 1){
			nowProductBannerCount--;
		}else{
			nowProductBannerCount = 3;
		}

		gotoProductBanner(nowProductBannerCount);
	}

	function nextProductBanner () {
		if(nowProductBannerCount < 3){
			nowProductBannerCount++;
		}else{
			nowProductBannerCount = 1;
		}

		gotoProductBanner(nowProductBannerCount);
	}


	function gotoProductBanner (_count) {
		if(_count == 1){
			TweenMax.to('.product-banner-all',2,{x:1024,ease: Expo.easeOut});
			$('.product-banner-nav-1').find('.product-banner-nav-point').addClass('active');
			$('.product-banner-nav-2').find('.product-banner-nav-point').removeClass('active');
			$('.product-banner-nav-3').find('.product-banner-nav-point').removeClass('active');
		}else if(_count == 2){
			TweenMax.to('.product-banner-all',2,{x:0,ease: Expo.easeOut});
			$('.product-banner-nav-1').find('.product-banner-nav-point').removeClass('active');
			$('.product-banner-nav-2').find('.product-banner-nav-point').addClass('active');
			$('.product-banner-nav-3').find('.product-banner-nav-point').removeClass('active');
		}else if(_count == 3){
			TweenMax.to('.product-banner-all',2,{x:-1030,ease: Expo.easeOut});
			$('.product-banner-nav-1').find('.product-banner-nav-point').removeClass('active');
			$('.product-banner-nav-2').find('.product-banner-nav-point').removeClass('active');
			$('.product-banner-nav-3').find('.product-banner-nav-point').addClass('active');
		}

		nowProductBannerCount = _count;
	}

	function updateNavPoint (_count) {
		if(_count > 0){
			var _x = $('.top-menu-nav-' + _count).offset().left - $('.top-menu-list').offset().left;
			var _w = $('.top-menu-nav-' + _count).width();
			TweenMax.to('.nav-point',0.5,{autoAlpha:1,x:_x});
		}else{
			TweenMax.to('.nav-point',0.3,{autoAlpha:0,x:-120});
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