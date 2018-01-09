/**
 *
 * @authors Eric Hsiao, JWT TAIPEI (eric.hsiao@jwt.com)
 * @date    2014-01-27 16:42:55
 * @version $Id$
 */

scrollContainer = (function() {
	//private menbers
	var pageMenuTop = [];
	var myScroll;
	var mySkrollr;

	var tipScrollTop;
	var menuTop;

	var nowStageCount;
	var visitTimeout;

	//private methods
	function setSkrollr ($el, data) {
		for (var i = 0, l = data.length; i < l; i++) {
	        $el.attr('data-' + data[i][0], data[i][1]);
	    }
	}

	function initScroll () {

		var scrollStart = 0;
		var scrollEnd = 0;
		var stageHight = $('body').height();
		pageMenuTop = [];

		//.title-panel
		setSkrollr($('.title-panel'),[[0,'top:50%'],[stageHight,'top:30%']]);
		setSkrollr($('.btn-down'),[[0,'top:-40px'],[100,'top:100px'],[stageHight,'top:100px']]);
		setSkrollr($('.btn-top'),[[0,'bottom:-60px'],[100,'bottom:0px'],[stageHight,'bottom:0px']]);

		scrollStart = 0;
		pageMenuTop.push(scrollStart);
		scrollEnd += stageHight;
		setSkrollr($('.event-title'),[[scrollStart,'top:0px'],[scrollEnd,'top:0px']]);

		scrollStart = scrollEnd;
		pageMenuTop.push(scrollStart);
		scrollEnd += $('#event').height() + $('#review').height();
		setSkrollr($('#tip-title').find('.container'),[[scrollStart,'top:200px'],[scrollEnd*1.2,'top:-200px']]);

		scrollStart = scrollEnd;
		pageMenuTop.push(scrollStart);
		scrollEnd += $('#tip-title').height();

		setSkrollr($('.tip-menu-title'),[[scrollStart,'top:0px'],[scrollEnd - 150,'top:0px'],[scrollEnd,'top:-100px']]);

		menuTop = scrollEnd;
		checkTipMenu(menuTop);

		window.onscroll = function(){
			if(!isMobile){
				checkTipMenu(menuTop);
			}
		}

		if(isMobile){

			$('.btn-top').css({'display':'none'});
			checkScrollMobile();

			$('.wrapper').scroll(function(event) {
				checkScrollMobile();
			});
		}

		var heightFix = 200;

		if(isMobile) heightFix = -270;

		tipScrollTop = scrollEnd + 300;
		scrollStart = tipScrollTop;
		pageMenuTop.push(scrollStart + heightFix);

		scrollEnd = tipScrollTop + $('#tip-content-1').height();
		//setSkrollr($('#tip-content-1').find('.title-container'),[[scrollStart,'top:70%'],[scrollEnd,'top:100%']]);
		setSkrollr($('#tip-content-1').find('.title-container'),[[scrollStart,'top:400px'],[scrollStart + 700,'top:800px']]);

		scrollStart = scrollEnd;
		pageMenuTop.push(scrollStart + heightFix);
		scrollEnd += $('#tip-content-2').height();
		setSkrollr($('#tip-content-2').find('.title-container'),[[scrollStart,'top:400px'],[scrollStart + 700,'top:800px']]);

		scrollStart = scrollEnd;
		pageMenuTop.push(scrollStart + heightFix);
		scrollEnd += $('#tip-content-3').height();
		setSkrollr($('#tip-content-3').find('.title-container'),[[scrollStart,'top:400px'],[scrollStart + 700,'top:800px']]);

		if(!isMobile && !oldIE){

			mySkrollr = skrollr.init({
				smoothScrolling:true,
				edgeStrategy: 'set',
		        easing: {
		            WTF: Math.random,
		            inverted: function(p) {
		                return 1-p;
		            }
		        }
			});

			checkStage($(window).scrollTop());
		}else{
			checkStage($('.wrapper').scrollTop());
		}

		checkHash();
	}

	function checkScrollMobile() {
		if($('.wrapper').scrollTop() > 100){
			$('.btn-top').css({'display':'block'});
		}else{
			$('.btn-top').css({'display':'none'});
		}

		if($('.wrapper').scrollTop() > menuTop){
			//$('#tip-menu .menu-L').css({'display':'none'});
			$('#tip-menu-mobile-fixed').css({'display':'block'});
		}else{
			//$('#tip-menu .menu-L').css({'display':'block'});
			$('#tip-menu-mobile-fixed').css({'display':'none'});
		}

		checkStage($('.wrapper').scrollTop());
	}

	function checkStage (_scrollTop) {
		// if(_scrollTop >= pageMenuTop[_count])
		var _stageCount;

		/*for (var i = 0; i < pageMenuTop.length; i++) {
			if(_scrollTop <= pageMenuTop[i]){
				if(i != _stageCount){
					nowStageCount = i;
					console.log('nowStageCount = ' + nowStageCount);
				}
			}
		};*/

		if(_scrollTop < pageMenuTop[1] - $(window).height()*.5){
			_stageCount = 0;
		}else if(_scrollTop < pageMenuTop[2] - 300){
			_stageCount = 1;
		}else if(_scrollTop < pageMenuTop[3] - 300){
			_stageCount = 2;
		}else if(_scrollTop < pageMenuTop[4] - 400){
			_stageCount = 3;
		}else if(_scrollTop < pageMenuTop[5] - 400){
			_stageCount = 4;
		}else if(_scrollTop >= pageMenuTop[5] - 400){
			_stageCount = 5;
		}

		if(_stageCount != nowStageCount){
			nowStageCount = _stageCount;
			//console.log(_stageCount + ', _scrollTop = '+ _scrollTop + ', pageMenuTop:' + pageMenuTop);

			var ga_page = 'Page_';

			if(isMobile){
				ga_page = 'Page_m_';
			}

			switch(nowStageCount){
				case 0:
					addPageView(ga_page + 'index');
					//location.hash = '#Index';
				break;
				case 1:
					addPageView(ga_page + 'FBStar');
					//location.hash = '#FBStar';
				break;
				case 2:
					addPageView(ga_page + 'Tips');
					//location.hash = '#Tips';
				break;
				case 3:
					addPageView(ga_page + 'Tips_Pillow');
					//location.hash = '#Tips-Pillow';
				break;
				case 4:
					addPageView(ga_page + 'Tips_Comforters');
					//location.hash = '#Tips-Comforters';
				break;
				case 5:
					addPageView(ga_page + 'Tips_Mattress');
					//location.hash = '#Tips-Mattress';
				break;
			}
		}

		//console.log(_stageCount + ', _scrollTop = '+ _scrollTop + ', pageMenuTop:' + pageMenuTop);
	}

	function addPageView(_tag) {
		clearTimeout(visitTimeout);
		visitTimeout = setTimeout(function(){ ga_pageView(_tag) }, 2000);
	}

	function checkHash () {

		console.log(location.hash);

		if(location.hash == '#FBStar'){
			gotoMenu(1);
		}else if(location.hash == '#Tips'){
			gotoMenu(2);
		}else if(location.hash == '#Tips-Pillow'){
			gotoMenu(3);
		}else if(location.hash == '#Tips-Comforters'){
			gotoMenu(4);
		}else if(location.hash == '#Tips-Mattress'){
			gotoMenu(5);
		}else if(location.hash == '#Index'){
			gotoMenu(0);
		}
	}

	function initTipBtn () {
		var ga_bt = 'Bt_';

			if(isMobile){
				ga_bt = 'Bt_m_';
			}

		$('#tip-menu .btn-tip-1-L').click(function(event) {
			gotoMenu(3);
			ga_ButtonClick(ga_bt + 'Pillow');
		});

		$('#tip-menu .btn-tip-2-L').click(function(event) {
			gotoMenu(4);
			ga_ButtonClick(ga_bt + 'Comforters');
		});

		$('#tip-menu .btn-tip-3-L').click(function(event) {
			gotoMenu(5);
			ga_ButtonClick(ga_bt + 'Mattress');
		});

		$('#tip-menu-fixed .btn-tip-1').click(function(event) {
			gotoMenu(3);
			ga_ButtonClick(ga_bt + 'Pillow');
		});

		$('#tip-menu-fixed .btn-tip-2').click(function(event) {
			gotoMenu(4);
			ga_ButtonClick(ga_bt + 'Comforters');
		});

		$('#tip-menu-fixed .btn-tip-3').click(function(event) {
			gotoMenu(5);
			ga_ButtonClick(ga_bt + 'Mattress');
		});

		$('#tip-content-1 .btn-shop').click(function(event) {
			window.open('http://www.hola.com.tw/product/menu/id/23');
			//Bt_FindMorePillow
			ga_ButtonClick(ga_bt + 'FindMorePillow');
		});

		$('#tip-content-2 .btn-shop').click(function(event) {
			window.open('http://www.hola.com.tw/product/menu/id/24');
			ga_ButtonClick(ga_bt + 'FindMoreComformers');
		});


		$('#tip-content-3 .btn-shop').click(function(event) {
			window.open('http://www.holacasa.com.tw/brand.php?id=1350476296');
			ga_ButtonClick(ga_bt + 'FindMoreMattress');
		});

		$('#tip-content-1 .btn-tip-share').click(function(event) {
			fb_share('http://www.hola-sleep.com/FBInfo.aspx?utm_source=FBshare&utm_medium=pillow&tips=2');
			//Bt_SharePillowTips
			ga_ButtonClick(ga_bt + 'SharePillowTips');
		});

		$('#tip-content-2 .btn-tip-share').click(function(event) {
			fb_share('http://www.hola-sleep.com/FBInfo.aspx?utm_source=FBshare&utm_medium=comforter&tips=3');
			ga_ButtonClick(ga_bt + 'ShareComfortersTips');
		});

		$('#tip-content-3 .btn-tip-share').click(function(event) {
			fb_share('http://www.hola-sleep.com/FBInfo.aspx?utm_source=FBshare&utm_medium=mattress&tips=4');
			ga_ButtonClick(ga_bt + 'ShareMattressTips');
		});

		$('.fb-post-container').click(function(event) {
			window.open('https://www.facebook.com/HOLA.taiwan/posts/681893315264403');
			ga_ButtonClick(ga_bt + 'FbStarJoinFB');
		});

		$('.btn-event').click(function(event) {
			window.open('https://www.facebook.com/HOLA.taiwan/posts/681893315264403');
			ga_ButtonClick(ga_bt + 'FbStarJoinButton');
		});

		$('.btn-rule').click(function(event) {
			window.open('https://www.facebook.com/notes/hola-%E7%89%B9%E5%8A%9B%E5%92%8C%E6%A8%82-%E6%84%9B%E7%94%9F%E6%B4%BB/hola%E7%89%B9%E5%8A%9B%E5%92%8C%E6%A8%82-%E6%84%9B%E7%94%9F%E6%B4%BBfacebook%E7%B2%89%E7%B5%B2%E5%9C%98%E5%A5%BD%E7%9C%A0%E4%B9%8B%E6%98%9F-%E6%B4%BB%E5%8B%95%E8%BE%A6%E6%B3%95/682545181865883');
			ga_ButtonClick(ga_bt + 'FbStarRule');
		});

		$('#tip-content-1 .btn-shop-mobile').click(function(event) {
			$('#tip-content-1 .btn-shop').click();
		});

		$('#tip-content-2 .btn-shop-mobile').click(function(event) {
			$('#tip-content-2 .btn-shop').click();
		});

		$('#tip-content-3 .btn-shop-mobile').click(function(event) {
			$('#tip-content-3 .btn-shop').click();
		});

		$('#tip-content-1 .btn-tip-share-mobile').click(function(event) {
			$('#tip-content-1 .btn-tip-share').click();
		});

		$('#tip-content-2 .btn-tip-share-mobile').click(function(event) {
			$('#tip-content-2 .btn-tip-share').click();
		});

		$('#tip-content-3 .btn-tip-share-mobile').click(function(event) {
			$('#tip-content-3 .btn-tip-share').click();
		});

		$('.btn-event-mobile').click(function(event) {
			$('.btn-event').click();
		});

		$('.btn-rule-mobile').click(function(event) {
			$('.btn-rule').click();
		});

		$('.btn-regedit').click(function(event) {
            window.open('http://www.simmonstaiwan.com.tw/Event/Detail/9');
         });

		$('.btn-tip-1-mobile').click(function(event) {
			gotoMenu(3);
			ga_ButtonClick(ga_bt + 'Pillow');
		});

		$('.btn-tip-2-mobile').click(function(event) {
			gotoMenu(4);
			ga_ButtonClick(ga_bt + 'Comforters');
		});

		$('.btn-tip-3-mobile').click(function(event) {
			gotoMenu(5);
			ga_ButtonClick(ga_bt + 'Mattress');
		});

	}

	 function fb_share (_url) {
    	window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(_url), 'sharer', 'toolbar=0,status=0,width=650,height=420');
    }

	function checkTipMenu(_scrollEnd) {
		if($(window).scrollTop() >= _scrollEnd){
			$('#tip-menu-fixed').css({'display':'block'});
			TweenMax.to($('#tip-menu-fixed'),1,{height:160,ease:"Expo.easeOut"});
		}else{
			$('#tip-menu-fixed').css({'display':'none'});
			TweenMax.to($('#tip-menu-fixed'),1,{height:300,ease:"Back.easeOut"});
		}

		checkStage($(window).scrollTop());
	}

	function goto (_scrollTop) {
		if(!isMobile && !oldIE){
			mySkrollr.animateTo(_scrollTop,{easing: 'outCubic',duration: 1000});
		}else if(!oldIE){
			main.closeMenu();
			$('.wrapper').scrollTo(_scrollTop,{duration:1000});
			/*setTimeout(function() {
				// $('.wrapper').scrollTop(_scrollTop);
				$('.wrapper').scrollTo(_scrollTop,{duration:1000});
			},0);*/

			setTimeout(function() {checkStage($('.wrapper').scrollTop());});
		}else{
			$(window).scrollTop(_scrollTop);
			setTimeout(function() {checkStage($(window).scrollTop());});
		}
	}

	function gotoMenu (_count) {
		goto(pageMenuTop[_count]);
	}

	function translateY (_y) {
		// body...
		var _commend = 'top:' + _y;
		return _commend;
	}

	function onresize() {
		mySkrollr.destroy();
		initScroll();
	}

	function initReview () {
		$('.center').slick({
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 3,
          autoplay: true,
  				autoplaySpeed: 3000,
      });

		var ga_bt = 'Bt_';
		if(isMobile){
			ga_bt = 'Bt_m_';
		}

    // $(".group1").colorbox({rel:'group1'});

    $('.reviewPost-1').click(function(event) {
    	window.open('https://www.facebook.com/HOLA.taiwan/photos/a.683661328420935.1073741828.240811039372635/683665675087167/?type=1');
			ga_ButtonClick(ga_bt + 'FbStar_Mou1');
    });

    $('.reviewPost-2').click(function(event) {
    	window.open('https://www.facebook.com/HOLA.taiwan/photos/a.683661328420935.1073741828.240811039372635/683759821744419/?type=1');
			ga_ButtonClick(ga_bt + 'FbStar_Milk2');
    });

    $('.reviewPost-3').click(function(event) {
    	window.open('https://www.facebook.com/HOLA.taiwan/photos/a.245127832274289.53837.240811039372635/683765155077219/?type=1');
			ga_ButtonClick(ga_bt + 'FbStar_Catwoman3');
    });

    $('.reviewPost-4').click(function(event) {
    	window.open('https://www.facebook.com/HOLA.taiwan/photos/a.245127832274289.53837.240811039372635/683765571743844/?type=1');
			ga_ButtonClick(ga_bt + 'FbStar_ET4');
    });

    $('.reviewPost-5').click(function(event) {
    	window.open('https://www.facebook.com/HOLA.taiwan/photos/a.245127832274289.53837.240811039372635/689660671154334/?type=1');
			ga_ButtonClick(ga_bt + 'FbStar_Picachu5');
    });

    $('.reviewPost-6').click(function(event) {
    	window.open('https://www.facebook.com/HOLA.taiwan/photos/a.245127832274289.53837.240811039372635/689708317816236/?type=1');
			ga_ButtonClick(ga_bt + 'FbStar_Simba6');
    });
	}

	var pageTag;

	//constructor
	{

		$( document ).ready(function() {

		 	initScroll();
		 	initTipBtn();
	    	skrollr.menu.init(mySkrollr, {animate: true,easing: 'outCubic',duration: 1000});

			$(window).resize(function() {
				onresize();
			});

			initReview();
		});
	}

	//public
	return {
		goto:function (_scrollTop) {
			goto(_scrollTop);
		},
		gotoMenu:function (_count) {
			gotoMenu(_count);
		},
		checkStage:function () {
			console.log('checkStage');
			if(!isMobile && !oldIE){
				checkStage($(window).scrollTop());
			}else{
				checkStage($('.wrapper').scrollTop());
			}
		},
		setStage:function (_count) {
			nowStageCount = _count;
		}
	}

})();
