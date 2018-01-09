/**
 *
 * @authors Eric Hsiao
 *
 */


/* utlis */

if (typeof console == "undefined") {
    window.console = {
        log: function () {}
    };
}

function ga_pageView(key) {
	ga('send', 'pageview', key);
	console.log("ga_pageView: " + key);
}

function ga_ButtonClick(key) {
	ga('send', 'event', 'Button', 'Click', key);
	console.log("ga_ButtonClick: " + key);
}

var iOS = false;
var isMobile = false;
var host = 'http://www.hola-sleep.com/';

var isIE8;
var oldIE;
var isMain = true;

main = function (){

	//private menbers


	//private methods
	function init () {
		console.log('main is loaded.');

		if($('body').width() <= 640){
            isMobile = true;
            // if(isMain) ga_pageView('Page_m_index');
        }else{
            isMobile = false;
            // if(isMain) ga_pageView('Page_index');
        }

        if($('body').height() <= 700){
            isIE8 = true;
            $('.wrapper').addClass('IE8');
        }else{
            isIE8 = false;
        }

		initScroll();
		initBtn();

	    if ($('html').is('.ie6, .ie7, .ie8')) {
	    	// alert('oldIE');
	        oldIE = true;
	        isIE8 = true;
	        $('.wrapper').addClass('IE8');
	        $(".imgLiquidFill").imgLiquid();
	        $('.no-IE').css({'display':'none'});
	        // $('.cover').css({'display':'none'});
	    }

	    if (oldIE) {
	        // Here's your JS for IE..
	    } else {
	        // TweenMax.from($('.video-background'),2,{alpha:0,z:.1,ease:"Expo.easeOut"});
			// TweenMax.from($('.title-patten'),2,{delay:0.1,y:150,autoAlpha:0,z:.1,ease:"Expo.easeOut"});
			// TweenMax.from($('.btn-video'),1.5,{delay:0.3,y:200,autoAlpha:0,z:.1,ease:"Expo.easeOut"});
			// TweenMax.from($('.btn-share'),1.5,{delay:0.5,y:200,autoAlpha:0,z:.1,ease:"Expo.easeOut"});
			// TweenMax.from($('.btn-down').find('img'),0.8,{delay:1,y:-200,autoAlpha:0,z:.1,ease:"Back.easeOut"});
	    }

		TweenMax.set($('.mobile-menu-container'),{x:'100%',z:.1});
		TweenMax.set($('.mobile-sp-container'),{x:'100%',z:.1});

		$('.mobile-sp-container').css({
			'visibility': 'visible'
		});

		$('.mobile-menu-container').css({
			'visibility': 'visible'
		});

		if(isMobile){
			initMobileMenu();
		}
	}

	function initMobileMenu() {


		$('.nav-menu').data('isOpen', false);

		$('.nav-menu').click(function(event) {
			if($(this).data('isOpen') == false){
				$(this).data('isOpen', true);
				mobileMenuOpen();
				ga_ButtonClick('bt_m_Memu');
			}else{
				$(this).data('isOpen', false);
				mobileMenuClose();
				ga_ButtonClick('bt_m_MemuClose');
			}
		});

		$('.nav-sp').data('isOpen', false);

		$('.nav-sp').click(function(event) {
			if($(this).data('isOpen') == false){
				$(this).data('isOpen', true);
				mobileSpOpen();
				ga_ButtonClick('Bt_m_openSP');
			}else{
				$(this).data('isOpen', false);
				mobileSpClose();
				ga_ButtonClick('Bt_m_closeSP_header');
			}
		});

		$('.mobile-menu-1').click(function(event) {
			$('#menu-1').click();
		});

		$('.mobile-menu-2').click(function(event) {
			$('#menu-2').click();
		});

		$('.mobile-menu-3').click(function(event) {
			$('#menu-3').click();
		});

		$('.mobile-menu-4').click(function(event) {
			$('#menu-4').click();
		});

		$('.mobile-menu-5').click(function(event) {
			$('#menu-5').click();
		});

		$('.mobile-menu-6').click(function(event) {
			$('#menu-6').click();
		});

		$('.nav-logo').click(function(event) {
			window.open('http://www.hola.com.tw/');
			ga_ButtonClick('bt_m_HOLAofficialsite');
		});

		TweenMax.set($('.mobile-nav'),{z:.1});

		$('.sp-close').click(function(event) {
			$('.nav-sp').click();
			ga_ButtonClick('Bt_m_closeSP_down');
		});
	}

	function mobileMenuOpen () {
		TweenMax.to($('.mobile-menu-container'),1,{x:'0%',z:.1,ease:"Expo.easeOut"});
		mobileSpClose();
		$('.nav-sp').data('isOpen', false);
		$('.nav-menu').addClass('menu-close');
	}

	function mobileMenuClose () {
		TweenMax.to($('.mobile-menu-container'),0.5,{x:'100%',z:.1,ease:"Expo.easeOut"});
		$('.nav-menu').removeClass('menu-close');
	}

	function closeMenu () {
		mobileMenuClose();
		$('.nav-menu').data('isOpen', false);
	}

	function mobileSpOpen () {
		TweenMax.to($('.mobile-sp-container'),1,{x:'0%',z:.1,ease:"Expo.easeOut"});
		mobileMenuClose();
		$('.nav-menu').data('isOpen', false);

		ga_pageView('Page_m_index_SP');
		scrollContainer.setStage(-1);
	}

	function mobileSpClose () {
		TweenMax.to($('.mobile-sp-container'),0.5,{x:'100%',z:.1,ease:"Expo.easeOut"});

		//ga_pageView('Page_m_index');
		scrollContainer.checkStage();
	}

	function initBtn() {
		$('.btn').mouseover(function(event) {
			$btnActive = $(this).find('.btn-active');

			if(oldIE){
				//$btnActive.css({'filter':'alpha(opacity=100)'});
			}else{
				TweenMax.to($btnActive,0.3,{autoAlpha:1,ease:"Expo.easeOut"});
			}

		});

		$('.btn').mouseout(function(event) {
			$btnActive = $(this).find('.btn-active');

			if(oldIE){
				//$btnActive.css({'filter':'alpha(opacity=0)'});
			}else{
				TweenMax.to($btnActive,0.3,{autoAlpha:0});
			}
		});

		$('.sp-panel').click(function(event) {
			showPopout();

			if(isMobile) {
                ga_ButtonClick('');
            }else{
                ga_ButtonClick('');
            }
		});

		$('#menu-1').click(function(event) {

			console.log(isMain);

			if(isMain){
				scrollContainer.gotoMenu(1);
			}else{
				setTimeout(function () {location.href = 'index.html#FBStar';},300);
			}

			if(isMobile) {
                ga_ButtonClick('Bt_m_FbStar');
            }else{
                ga_ButtonClick('Bt_FbStar');
            }
		});

		$('#menu-2').click(function(event) {

			if(isMain){
				scrollContainer.gotoMenu(2);
			}else{
				setTimeout(function () {location.href = 'index.html#Tips';},300);
			}

			if(isMobile) {
                ga_ButtonClick('Bt_m_Tips');
            }else{
                ga_ButtonClick('Bt_Tips');
            }
		});

		$('#menu-3').click(function(event) {
			setTimeout(function () {location.href = 'sleep.html';},300);

			if(isMobile) {
                ga_ButtonClick('Bt_m_Lecture');
            }else{
                ga_ButtonClick('Bt_Lecture');
            }
		});

		$('#menu-4').click(function(event) {
			window.open('http://www.hola.com.tw/catalogue/detail/id/11/page/1');

			if(isMobile) {
                ga_ButtonClick('Bt_m_LinkEDM');
            }else{
                ga_ButtonClick('Bt_LinkEDM');
            }
		});

		$('#menu-5').click(function(event) {
			window.open('http://www.hola.com.tw/store/');

			if(isMobile) {
                ga_ButtonClick('Bt_m_LinkHOLAlocation');
            }else{
                ga_ButtonClick('Bt_LinkHOLAlocation');
            }
		});

		$('#menu-6').click(function(event) {
			window.open('http://www.holacasa.com.tw/distribute.php');

			if(isMobile) {
                ga_ButtonClick('Bt_m_LinkCASAlocation');
            }else{
                ga_ButtonClick('Bt_LinkCASAlocation');
            }
		});

		$('#menu-7').click(function(event) {
			window.open('http://www.hola.com.tw/');

			if(isMobile) {
                ga_ButtonClick('Bt_m_LinkHOLAEC');
            }else{
                ga_ButtonClick('Bt_LinkHOLAEC');
            }
		});

		$('#menu-8').click(function(event) {
			window.open('https://www.facebook.com/HOLA.taiwan?ref=br_rs');

			if(isMobile) {
                ga_ButtonClick('Bt_m_LinkHOLAFB');
            }else{
                ga_ButtonClick('Bt_LinkHOLAFB');
            }
		});

		$('.btn-share').click(function(event) {

			/*var url = location.href;
			url += '?v=2';*/
			// window.open('https://www.facebook.com/sharer/sharer.php?u='+ host,'facebook-share-dialog','width=600,height=550');
			//window.open('http://www.facebook.com/sharer/sharer.php?u=' + host,'share','width=600,height=550');

			window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(host), 'sharer', 'toolbar=0,status=0,width=650,height=420');

			if(isMobile) {
                ga_ButtonClick('Bt_m_sharevideo');
            }else{
                ga_ButtonClick('Bt_sharevideo');
            }
		});

		$('.btn-video').click(function(event) {
			showVideo();

			if(isMobile) {
                ga_ButtonClick('Bt_m_play');
            }else{
                ga_ButtonClick('Bt_play');
            }
		});

		$('.btn-top').click(function(event) {
			scrollContainer.gotoMenu(0);

			if(isMobile) {
                ga_ButtonClick('Bt_m_Backtotop');
            }else{
                ga_ButtonClick('Bt_Backtotop');
            }
		});
	}

	function initScroll () {
		iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

		if(iOS){
			$(".wrapper").niceScroll({scrollspeed:30,cursoropacitymax:0,touchbehavior:true,railalign:"right"}); // First scrollable DIV
			$(".mobile-sp").niceScroll({cursoropacitymax:0,touchbehavior:true,railalign:"right"});
		}
	}

	function checkIndex () {
		///test.html
		console.log(location.pathname);
	}

	function showPopout () {
    	$mask = $('<div></div>').addClass('nowPopout popout-mask').appendTo($('body'));
    	TweenMax.from($mask,0.8,{autoAlpha:0});

        $content = $('<div></div>').addClass('popout-sp').appendTo($mask);
        $close = $('<div></div>').addClass('popout-close').appendTo($content);

        TweenMax.from($content,0.5,{delay:0.3,autoAlpha:0,y:-150,ease:"Back.easeOut"});
        TweenMax.from($close,0.3,{delay:0.8,autoAlpha:0,scale:.1,ease:"Back.easeOut"});

        $close.click(function(event) {
            hidePopout();
            ga_ButtonClick('Bt_closeSP');
        });

        ga_pageView('Page_index_SP');
    }

    function hidePopout() {
    	$now = $('.nowPopout');
    	TweenMax.to($now,0.5,{autoAlpha:0,onComplete:remove});

        function remove () {
            $now.remove();
            ga_pageView('Page_index');
        }
    }

    function showVideo () {
    	$mask = $('<div></div>').addClass('nowVideo popout-mask').appendTo($('body'));
    	$video = $('<div></div>').addClass('video-player').appendTo($mask);


    	if(!isMobile){
    		$video.html('<iframe width="800" height="450" src="//www.youtube.com/embed/ZGxSCDAiYGY?rel=0&amp;controls=0&amp;showinfo=0&amp;wmode=transparent" frameborder="0" allowfullscreen></iframe>');
		}else{
			$video.html('<iframe width="640" height="360" src="//www.youtube.com/embed/ZGxSCDAiYGY?rel=0&amp;controls=0&amp;showinfo=0&amp;wmode=transparent" frameborder="0" allowfullscreen></iframe>');
		}

        $close = $('<div></div>').addClass('video-close').appendTo($video);

        if(!isMobile){
        	TweenMax.from($mask,0.8,{autoAlpha:0});
        	TweenMax.from($video,0.5,{delay:0.3,autoAlpha:0,y:-150,ease:"Back.easeOut"});
        	TweenMax.from($close,0.3,{delay:0.8,autoAlpha:0,scale:.1,ease:"Back.easeOut"});
        }

        $close.click(function(event) {
            hideVideo();

            if(isMobile) {
               ga_ButtonClick('Bt_m_closeVideo');
            }else{
            	ga_ButtonClick('Bt_closeVideo');

            }
        });

        if(isMobile) {
                ga_pageView('Page_m_index_video');
            }else{
                ga_pageView('Page_index_video');
            }
    }

    function hideVideo() {
    	$now = $('.nowVideo');
    	TweenMax.to($now,0.5,{autoAlpha:0,onComplete:remove});

        function remove () {
            $now.remove();
            if(isMobile) {
                ga_pageView('Page_m_index');
            }else{
                ga_pageView('Page_index');
            }
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
		showPopout:function () {
			showPopout();
		},

		closeMenu:function() {
			closeMenu();
		}
	}
}

main = new main();

/**
 * --------------------------------------------------------------------
 * jQuery-Plugin "pngFix"
 * Version: 1.1, 11.09.2007
 * by Andreas Eberhard, andreas.eberhard@gmail.com
 *                      http://jquery.andreaseberhard.de/
 *
 * Copyright (c) 2007 Andreas Eberhard
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(s($){3.1s.1k=s(j){j=3.1a({12:\'1m.1j\'},j);8 k=(n.P=="r 10 Z"&&U(n.v)==4&&n.v.E("14 5.5")!=-1);8 l=(n.P=="r 10 Z"&&U(n.v)==4&&n.v.E("14 6.0")!=-1);o(3.17.16&&(k||l)){3(2).L("1r[@m$=.M]").z(s(){3(2).7(\'q\',3(2).q());3(2).7(\'p\',3(2).p());8 a=\'\';8 b=\'\';8 c=(3(2).7(\'K\'))?\'K="\'+3(2).7(\'K\')+\'" \':\'\';8 d=(3(2).7(\'A\'))?\'A="\'+3(2).7(\'A\')+\'" \':\'\';8 e=(3(2).7(\'C\'))?\'C="\'+3(2).7(\'C\')+\'" \':\'\';8 f=(3(2).7(\'B\'))?\'B="\'+3(2).7(\'B\')+\'" \':\'\';8 g=(3(2).7(\'R\'))?\'1d:\'+3(2).7(\'R\')+\';\':\'\';8 h=(3(2).1c().7(\'1b\'))?\'19:18;\':\'\';o(2.9.y){a+=\'y:\'+2.9.y+\';\';2.9.y=\'\'}o(2.9.t){a+=\'t:\'+2.9.t+\';\';2.9.t=\'\'}o(2.9.w){a+=\'w:\'+2.9.w+\';\';2.9.w=\'\'}8 i=(2.9.15);b+=\'<x \'+c+d+e+f;b+=\'9="13:11;1q-1p:1o-1n;O:W-V;N:1l;\'+g+h;b+=\'q:\'+3(2).q()+\'u;\'+\'p:\'+3(2).p()+\'u;\';b+=\'J:I:H.r.G\'+\'(m=\\\'\'+3(2).7(\'m\')+\'\\\', D=\\\'F\\\');\';b+=i+\'"></x>\';o(a!=\'\'){b=\'<x 9="13:11;O:W-V;\'+a+h+\'q:\'+3(2).q()+\'u;\'+\'p:\'+3(2).p()+\'u;\'+\'">\'+b+\'</x>\'}3(2).1i();3(2).1h(b)});3(2).L("*").z(s(){8 a=3(2).T(\'N-S\');o(a.E(".M")!=-1){8 b=a.X(\'1g("\')[1].X(\'")\')[0];3(2).T(\'N-S\',\'1f\');3(2).Q(0).Y.J="I:H.r.G(m=\'"+b+"\',D=\'F\')"}});3(2).L("1e[@m$=.M]").z(s(){8 a=3(2).7(\'m\');3(2).Q(0).Y.J=\'I:H.r.G\'+\'(m=\\\'\'+a+\'\\\', D=\\\'F\\\');\';3(2).7(\'m\',j.12)})}1t 3}})(3);',62,92,'||this|jQuery||||attr|var|style|||||||||||||src|navigator|if|height|width|Microsoft|function|padding|px|appVersion|margin|span|border|each|class|alt|title|sizingMethod|indexOf|scale|AlphaImageLoader|DXImageTransform|progid|filter|id|find|png|background|display|appName|get|align|image|css|parseInt|block|inline|split|runtimeStyle|Explorer|Internet|relative|blankgif|position|MSIE|cssText|msie|browser|hand|cursor|extend|href|parent|float|input|none|url|after|hide|gif|pngFix|transparent|blank|line|pre|space|white|img|fn|return'.split('|'),0,{}))