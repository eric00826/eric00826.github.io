/**
 *
 * @authors Eric Hsiao
 *
 */

product = function (){

	//private menbers
	var host = 'http://www.hola-1001.com/';
	var GetList_URL = 'api/GetList.ashx';
	var GetDetail_URL = 'api/GetDetail.ashx';
	var SaveLog_URL = 'api/SaveLog.ashx';
	var CheckExisted_URL = 'api/CheckExisted.ashx';
	var SaveUserInfo_URL = 'api/SaveUserInfo.ashx';
	var userData;
	var nice = false;

	var nowPage = '';


	//private methods
	function init () {

		console.log(isMobile);

		if(!isMobile){
		    nice = $("html").niceScroll({
		    	cursorwidth: "8px",
		    	cursorcolor:'#fabe0d',
		    	autohidemode: false,
		    	scrollspeed: 60,
		    	mousescrollstep: 40,
		    	touchbehavior: false,
		    	zindex:5000
		    });
		}else{
			 nice = $("html").niceScroll({});
		}

		if(!isMobile){
			$('.img-holder').imageScroll({});
		}else{
			// $('.img-holder-mobile').imageScroll({});
		}

		if(!isIE) TweenMax.to($('.scrolldown-arr'),0.5,{y:10, ease:Circ.easeIn, repeat:-1, yoyo:true});

		initFixedImg();

		loadDetail(config.product);
		initShareBtn();

		initUI();

		TweenMax.from($('html'),1,{autoAlpha:0});
		//

		var bottomShareBtn = $('<div></div>').addClass('bottom-share-btn').appendTo('body');
		bottomShareBtn.html('<img src="images/bottom-share-btn.png">');

		bottomShareBtn.click(function(event) {
			doShare(config.product);

			if (!isMobile) {
				ga_ButtonClick('bt_FBShare2_' + nowPage);
			}else{
				ga_ButtonClick('bt_m_FBShare2_' + nowPage);
			}
		});

		var bottomPadding = $('<div></div>').addClass('bottom-padding').appendTo('#content');

		initSilder();
	}

	function initSilder() {
		$('.bx-pager-link').each(function(index, el) {

				var _c = index;
				_c++;

				if(_c == config.product){
					$(el).addClass('active');
				}

				$(el).data('count', index)
				$(el).attr('href', shareList[$(this).data('count')][0] + '.html');
				/*$(el).click(function(event) {
					//location.href = shareList[$(this).data('count')][0] + '.html';
					alert('location');
				});*/

				$(el).click(function(event) {
						ga_ButtonClick('bt_navTo' + shareList[$(this).data('count')][0]);
				});
		});

		$('.bx-wrapper').css({'height':$('.img-holder').height() + 'px'});

		$(window).resize(function(event) {
			$('.bx-wrapper').css({'height':$('.img-holder').height() + 'px'});
		});
	}

	function loadHeader() {
		$( "#header" ).load( "header.html .pc-header");
	}

	function initFixedImg() {


		$('.fixed-img').each(function(){

			var _imgLoader = $(this);
			var _src = _imgLoader.find('img').attr('src');
			var _height;


			_imgLoader.css({
		    	'width':'100%',
		    	'overflow':'hidden',
		    	'background-image':'url(' + _src + ')',
		    	'background-position': 'center center',
		    	'background-repeat':'no-repeat'
		  });

			var img = new Image();
			console.log(_src);
			img.src = _src;

			img.onload = function(){
			  /*_height = _imgLoader.height();

			  _imgLoader.css({
		    	'width':'100%',
		    	'height':_height + 'px',
		    	'overflow':'hidden',
		    	'background-image':'url(' + _src + ')',
		    	'background-position': 'center center',
		    	'background-repeat':'no-repeat'
		    });

		    _imgLoader.find('img').remove();*/

		    /*_imgLoader.css({
		    	'background-image':'url(images/logo.png)'
		    });*/
			};

	  });
	}

	function loadDetail(_SerialNo) {

		console.log(config.product);

		$.ajax({
		  method: "POST",
		  url: GetDetail_URL,
		  data: {SerialNo:_SerialNo}
		})
		  .done(function( _response ) {
		    console.log(_response);
		    showDetail(_response.Data[0]);
		  });

	}

	function showDetail(_data) {

		var _productList = JSON.parse(_data.Attachments);

		console.log(_data);

		if(_productList != '{}'){
			for (var i = 0; i < _productList.length; i++) {
				var _li = $('<li></li>').appendTo($('.product-ec-list'));
				_li.html('<a href="' + _productList[i].Link + '" target="_blank"><img src="' + _productList[i].ImagePath + '"></a>');

				var _sno = i;
				_sno++;

				_li.data('sno', _sno);

				_li.click(function(event) {

					if(!isMobile){
						ga_ButtonClick('bt_EC_' + nowPage + '_' + $(this).data('sno'));
					}else{
						ga_ButtonClick('bt_m_EC_' + nowPage + '_' + $(this).data('sno'));
					}

				});

				_li.mouseover(function(event) {
					TweenMax.to($(this).find('img'),0.3,{scale:1.1});
				});

				_li.mouseout(function(event) {
					TweenMax.to($(this).find('img'),0.3,{scale:1});
				});
			};
		}
	}

	function initShareBtn() {
		$('.share-btn').click(function(event) {
			doShare(config.product);

			if (!isMobile) {
				ga_ButtonClick('bt_FBShare_' + nowPage);
			}else{
				ga_ButtonClick('bt_m_FBShare_' + nowPage);
			}
		});

		$('.share-btn').mouseover(function(event) {
			TweenMax.to($(this).find('img'),0.5,{scale:1.03,ease:Expo.easeOut});
		});

		$('.share-btn').mouseout(function(event) {
			TweenMax.to($(this).find('img'),0.2,{scale:1});
		});
	}

	var shareList = [['it','平民料理 以皇后為名','1889年，在披薩發源地拿坡里，名廚艾斯波席托（Raffaele Esposito）準備迎接貴客---瑪格麗特皇后的到來。'],
					 ['th','世界上最美味的感冒藥','1769年，總督鄭信擊退緬甸軍隊，結束國土四分五裂的局面，廣受人民愛戴，登基成為暹羅國王；但如此強者，也有無能為力的時候。…'],
					 ['fr','美麗的失誤 為王子贏得芳心','愛德華王子設宴，賓客中有位他愛慕的女子---美麗的蘇賽特，一切都很順利，直到準備吃甜點時，卻發生了意外失誤！…'],
					 ['jp','跨越一千兩百年的禁肉令','東京銀座二丁目的「煉瓦亭」餐館裡，廚師苦思：如何料理被視為不潔的肉品---豬肉。這是扭轉千年習慣的敲門磚。…'],
					 ['tw','寵妃料理-醉言醉語，我要飛上天','她貴為寵妃，愛好美酒佳餚不算稀奇。肉質彈嫩而帶著酒香的「醉雞」，由來也跟楊貴妃有關。…'],
					 ['uk','滑鐵盧大勝 宴請指定菜','拿破崙驍勇善戰，曾經令整個歐洲聞風喪膽，但後世人印象最深刻的，反而是他「慘遭滑鐵盧」戰敗的那一刻，輝煌褪盡，留下了唏噓。…']];

	function doShare() {

		alert('活動期間已截止，感謝您的蒞臨。');
		// var _count = config.product - 1;

		// if(isIE) {
		// 	alert('如要分享，建議使用chrome、IE9以上瀏覽器');
		// }else{

		// 	showLoading();

		// 	facebook.login(function(_userData) {
		// 			if(_userData){

		// 				userData = _userData;

		// 				var _url = host;

		// 				facebook.feed({
		// 				  name: shareList[_count][1],
		// 				  link: _url + shareList[_count][0] + '.html',
		// 				  picture: _url + 'images/share/' + shareList[_count][0] + '.jpg?v=1',
		// 				  caption: '>>看故事分享，馬上拿HOLA優惠券',
		// 				  description: shareList[_count][2],
		// 				}, function(_response) {
		// 					if(_response){
		// 						// if(isIE) alert('callback');
		// 						saveLog(config.product);
		// 					}else{
		// 						hideLoading();
		// 					}
		// 				});
		// 			}
		// 	});
		// }
	}

	function saveLog(_SerialNo) {
		console.log('call saveLog');

		$.ajax({
		  method: "POST",
		  url: SaveLog_URL,
		  data: {
		  	FBID:userData.userID,
		  	FBName:userData.name,
		  	access_token:userData.accessToken,
		  	ShareArticle:_SerialNo
		  }
		})
		  .done(function( _response ) {
		    if(_response.Result == "Y"){
		    	checkExisted();
		    }else{
		    	alert(_response.Error);
		    	hideLoading();
		    }
		  });
	}

	function checkExisted() {
		$.ajax({
		  method: "POST",
		  url: CheckExisted_URL,
		  data: {
		  	FBID:userData.userID
		  }
		})
		  .done(function( _response ) {
		  	// console.log(_response);

		    if(_response.Result == "N"){
		    	alert('分享成功！');
		    	hideLoading();
		    	showSaveUserInfo();
		    }else if(_response.Result == "Y"){
		    	alert('分享成功！');
		    	hideLoading();
		    	showDownload();
		    }
		  });
	}

	function showSaveUserInfo() {
		// var $userInfo = $('<div></div>').addClass('userInfo-box').appendTo($('.detail-wrapper'));
		var _userInfo = $('.userInfo-box');

		//show
		TweenMax.from($('.userInfo-box'),1,{autoAlpha:0,ease:Expo.easeInOut});

		_userInfo.css({
			'display': 'block'
		});

		if(!isMobile){
			ga_pageView('pg_info');
		}else{
			ga_pageView('pg_m_info');
		}
	}

	function saveUserInfo() {
		if(document.getElementById("input-check").checked){
			showLoading();
			var _address;

			if(!isMobile){
				_address = $("#input-Address").val();
			}else{
				var queryParams = $.getQueryParameters($('#twzipcode').twzipcode('serialize'));
				_address = queryParams.county + queryParams.zipcode + queryParams.district  + $("#input-Address").val();
			}

			$.ajax({
			  method: "POST",
			  url: SaveUserInfo_URL,
			  data: {
			  	FBID:userData.userID,
	  			FBName:userData.name,
			  	access_token:userData.accessToken,
			  	Name:$("#input-Name").val(),
			  	Tel:$("#input-Tel").val(),
			  	Address:_address
	  			}
			}).done(function( _response ) {
				if(_response.Result == 'Y'){
					TweenMax.to($('.userInfo-box'),0.5,{autoAlpha:0});
					showDownload();
				}else{
					alert(_response.Error);
				}

				hideLoading();
			});
		}else{
			alert('您尚未同意活動辦法');
		}
	}

	function showDownload() {
		hideLoading();
		var _box = $('.download-box');

		//show
		TweenMax.from(_box,1,{autoAlpha:0,ease:Expo.easeInOut});

		_box.css({
			'display': 'block'
		});

		if(!isMobile){
			ga_pageView('pg_coupon');
		}else{
			ga_pageView('pg_m_coupon');
		}
	}

	function showLoading() {
		TweenMax.to($('.user-loading'),0.5,{autoAlpha:1});
	}

	function hideLoading() {
		TweenMax.to($('.user-loading'),0.5,{autoAlpha:0});
	}

	function initUI() {

		$('.user-loading').css({
			'display': 'block'
		});

		TweenMax.set($('.user-loading'),{autoAlpha:0});

		$('.userInfo-submit').click(function(event) {
			saveUserInfo();

			if(!isMobile){
		      ga_ButtonClick('bt_send');
		   }else{
		      ga_ButtonClick('bt_m_send');
		   }
		});

		$('.userInfo-rule').click(function(event) {
			open('rule.html');
		});

		$('.userInfo-close').click(function(event) {
			TweenMax.to($('.userInfo-box'),0.5,{autoAlpha:0});
		});

		$('.download-btn').click(function(event) {
			var a = $("<a>")
		    .attr("href", host + "images/coupon.pdf")
		    .attr("download", "餐桌上的旅行-網頁折價券.pdf")
		    .appendTo("body");
			a[0].click();
			a.remove();

			if(!isMobile){
		      ga_ButtonClick('bt_LinkToCoupon');
		   }else{
		      ga_ButtonClick('bt_m_LinkToCoupon');
		   }
		});

		$('.join-btn').click(function(event) {
			open('http://js1.sharer.com.tw/gatewayhost.aspx?fid=2&mid=2011&rid=mk&redirect=http%3A%2F%2Fwww.hola.com.tw%2Flayindex%2F150701_NewGift%2F%3Futm%5Fsource%3Dmk%26utm%5Fmedium%3Dvacation%26utm%5Fcampaign%3Dnewgift');

			if(!isMobile){
		      ga_ButtonClick('bt_LinkToMember');
		   }else{
		      ga_ButtonClick('bt_m_LinkToMember');
		   }
		});

		$('.download-close').click(function(event) {
			TweenMax.to($('.download-box'),0.5,{autoAlpha:0});
		});

		$('.top-btn').click(function(event) {
			nice.doScrollTop(0);
		});

		initPanel();

		//form
		if(isMobile){
			$('#twzipcode').twzipcode({
				zipcodeIntoDistrict :true,
				'css': [
				        'twzipcode-style', //縣市
				        'twzipcode-style',  // 鄉鎮市區
				        'twzipcode-style' // 郵遞區號
				    ]
			});

			setDefault($("#input-Name"), '完整姓名');
			setDefault($("#input-Tel"), '連絡電話');

			var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
			if(iOS){
				// alert('iOS');
				$('.userInfo-input').find('input').css({'margin-bottom':'5px'});
			}
		}

	}

	function setDefault(_textbox, _value) { // depend on jQuery
	    _textbox.val(_value).css({'color':'#a5a5a5'});
	    _textbox.focus(
	        function() {
	            if ($(this).val() == _value) {
	                $(this).val('').css({'color':'#000'});
	            }
	        })
	        .blur(function() {
	            if ($(this).val() == '') {
	                $(this).val(_value).css({'color':'#a5a5a5'});
	            }
	        });
	}

	function initPanel() {
		$('.product-panel-title').mouseover(function(event) {
			TweenMax.to($(this).find('.fixed-img'),0.5,{css:{'height':'150px'},ease:Expo.easeOut});
			// TweenMax.to($(this).find('.open-btn'),0.5,{y:5});
			// TweenMax.to($(this),0.5,{scale:1.1});
		});

		$('.product-panel-title').mouseout(function(event) {
			TweenMax.to($(this).find('.fixed-img'),0.5,{css:{'height':'112px'},ease:Expo.easeOut});
			// TweenMax.to($(this).find('.open-btn'),0.5,{y:0});
			// TweenMax.to($(this),0.5,{scale:1});
		});

		$('.product-recipe').data('type', 'recipe').data('open', false);
		$('.product-travel').data('type', 'travel').data('open', false);

		$('.product-panel-title').click(function(event) {
			doPanel($(this).parent());
		});
	}

	function doPanel(_panel) {
		if(!_panel.data('open')){
			_panel.data('open',true);

			//alert(_panel.data('type') + ': open');

			_panel.find('.open-btn').css({'background-position':'0 100%'});

			var _src = 'images/product-' + config.product + '/' + _panel.data('type') + '.jpg';

			if(isMobile) _src = 'images/product-' + config.product + '/' + _panel.data('type') + '-mobile.jpg';

			console.log(_src);
			loadPanel(_panel,_src);

			if(!isMobile){
				ga_ButtonClick('bt_open_' + _panel.data('type') +  '_' + nowPage);
			}else{
				ga_ButtonClick('bt_m_open_' + _panel.data('type') +  '_' + nowPage);
			}

		}else{
			_panel.data('open',false);
			//alert(_panel.data('type') + ': close');

			_panel.find('.open-btn').css({'background-position':'0 0%'});
			_panel.find('.panel-content').empty();
			nice.resize();
			// TweenMax.to(_panel.find('.panel-content'),0.5,{css:{'height':'0'},ease:Expo.easeOut});
		}
	}

	function loadPanel(_panel,_src) {
		var _content = _panel.find('.panel-content');
		var _loading = $('<div></div>').addClass('panel-loading').appendTo(_content);
		TweenMax.to(_loading,1,{css:{'height':'200px'},ease:Expo.easeOut});

		var img = new Image();
		img.src = _src;

		img.onload = function(){
			_content.html('<img>');
			_content.find('img').attr({src: _src});

			TweenMax.from(_content.find("img"),0.5,{autoAlpha:0});

			/*_height = _content.height();

			  _content.css({
		    	'width':'100%',
		    	'height':_height + 'px',
		    	'overflow':'hidden',
		    	'background-image':'url(' + _src + ')',
		    	'background-position': 'center center',
		    	'background-repeat':'no-repeat'
		    });

			_content.find('img').remove();*/

			var _top;
			var _count = config.product - 1;

			if(!isMobile){
				_top = _panel.offset().top - 70;
			}else{
				_top = _panel.offset().top - 90;
			}
			// var testDot = $('<div></div>').addClass('testDot').appendTo('body').css({'top':_top + 'px'});;
			$(window).scrollTop(_top);
		};
	}

	//constructor
	var isScroll = false;

	{
		facebook.init({
	      appId:'388288864699566'
	    });

		$(document).ready(function() {
			init();

			var _count = config.product - 1;
			nowPage = shareList[_count][0];

			/*$(window).on('mousewheel', function(event) {
				console.log('mousewheel');
	        if(event.deltaY < 0){
	          ga_ButtonClick('bt_nav_pageDown');
	        }else if(event.deltaY > 0){
	          ga_ButtonClick('bt_nav_pageUp');
	        }
	    });*/

			$(window).scroll(function(event) {

				if($(window).scrollTop() > 200){
					if(!isScroll){
						isScroll = true;
						ga_ButtonClick('bt_pageDown_' + nowPage);
					}
				}else{
					isScroll = false;
				}
			});

			if(!isMobile){
				ga_pageView('pg_' + nowPage);
			}else{
				ga_pageView('pg_m_' + nowPage);
			}
		});

		loadHeader();


	}

	//public

	return {

	}
}

jQuery.extend({

  getQueryParameters : function(str) {
	  return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
  }

});

