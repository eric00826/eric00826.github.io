/**
 *
 * @authors Eric Hsiao
 *
 */

main = function (){

	//private menbers
	var positionPoint = [
		[121,204,'balloon_ani','-78px','-269px'],
		[186,474,'vespa_ani','-125px','-181px'],
		[101,833,'dinosaur_ani','-37px','-204px'],
		[395,211,'astronaut_ani','-46px','-22px'],
		[471,544,'flower_ani','-111px','-38px'],
		[607,83,'Ukulele_ani','-177px','-34px'],
		[614,883,'camera_ani','-309px','-265px'],
		[1005,56,'paper_ani','-200px','-29px'],
		[1420,136,'car_ani','-562px','-43px'],
		[1479,359,'moon_ani','-461px','-188px'],
		[1366,882,'typewriter_ani','-341px','-204px'],
		[1606,652,'cat_ani','-472px','-115px'],
		[1681,452,'apple_ani','-218px','-26px'],
		[1786,156,'beer_ani','-356px','-63px'],
		[1837,868,'coffee_ani','-297px','-134px'],
		[963,791,'brain_ani','-340px','-186px']
	];

	var titlePoint = [
		[960,340],
		[960,500],
		[960,557]
	];

	var exportRootArray = [];
	var exportMouse;
	var exportKnockit;
	var isPlayCount = 0;
	var isIntro = false;

	//private methods
	function init () {
		console.log('main is loaded.');

		initHandAni();

		//產生參考坐標
		for (var i = 0; i < positionPoint.length; i++) {
			var $point = $('<div></div>').addClass('position-point').attr('id','point-' + i );
			$point.appendTo('#wrapper');
			createAni($point,positionPoint[i]);
		};

		/*for (var i = 0; i < titlePoint.length; i++) {
			var $title = $('<div></div>').addClass('position-point').attr('id','title-' + i );
			$title.appendTo('#wrapper');
		};*/

		//更新參考坐標
		$('#knock-it').data('tarLeft','0px');
		$('#knock-it').data('tarTop','0px');

		updatePosition();
		$(window).resize(function(event) {
			updatePosition();
			updatePanelPosition();
		});

		initServicePanel();

		if(!isIntro){
			TweenMax.to('#loading',1.5,{autoAlpha:0});
			initIntro();
		}
	}

	function initIntro() {
		/*var _w = $(window).width();
		var _h = $(window).height();
		var _dx = _w/(1920*2);
		var _dy = _h/(953*2);*/

		TweenMax.set('#title-0',{autoAlpha:0,scale:1});
		TweenMax.set('#title-1',{autoAlpha:0,scale:1,y:-50});
		TweenMax.set('#title-2',{autoAlpha:0,scale:1,y:-30});

		var _cX = $(window).width()*.5;
		var _cY = $(window).height()*.5;
		var _r = -1000;

		//var _randomArray = [0,1,2,14,12,13,5,3,4,6,10,11,9,8,7,15];//getRandomArray(0,15,16);
		// var _randomArray = [2,1,0,13,12,14,6,4,3,5,7,8,9,11,10,15];

		var _randomArray = getRandomArray(0,14,15);
		_randomArray.push(15);

		for (var i = 0; i < positionPoint.length; i++) {
			var $point = $('#point-' + _randomArray[i]);
			var _x = $point.data('x');
			var _y = $point.data('y');

			var _dx = _cX - _x;
    	var _dy = _cY - _y;
    	var _dRoation = Math.atan2(_dy,_dx);

    	var _nX = _cX + Math.cos(_dRoation)*_r - _x;
    	var _nY = _cY + Math.sin(_dRoation)*_r - _y;

    	/*if(i == 15){
    		TweenMax.from($point,0.5,{delay:i*.1,x:_nX,y:_nY});
    		// TweenMax.from($point,1,{delay:i*.1,x:_nX,y:_nY,ease: Back.easeOut.config(2)});
    	}else{
    		TweenMax.from($point,3,{delay:i*.1,x:_nX,y:_nY,ease: Elastic.easeOut.config(1, 0.5)});
    		// TweenMax.from($point,1,{delay:i*.1,x:_nX,y:_nY,ease: Back.easeOut.config(2)});
    	}*/

    	// TweenMax.from($point,3,{delay:i*.2,rotation:360,x:_nX,y:_nY,ease: Elastic.easeOut.config(1, 0.5)});
    	TweenMax.from($point,2.5,{delay:i*.1,rotation:360,x:_nX,y:_nY,ease: Elastic.easeOut.config(1, 0.8)});
		};

		setTimeout(function () {
			titleIntro();
		},2000);
	}

	function titleIntro() {
		setTimeout(function () {
			initKnock();
		},1600);

		TweenMax.to('#title-0',9,{delay:0,autoAlpha:1,ease: Expo.easeOut});
		// TweenMax.to('#title-0',8,{scale:1,ease: Expo.easeOut});
		TweenMax.to('#title-1',3.5,{delay:0.6,autoAlpha:1,scale:1,y:0,ease: Expo.easeOut});
		TweenMax.to('#title-2',2.5,{delay:1,autoAlpha:1,scale:1,y:0,ease: Expo.easeOut});
	}

	function initHandAni() {
		var $canvas, stage;
		$canvas = $('<canvas></canvas>').attr({
			width: this['hand_ani'].properties.width,
			height: this['hand_ani'].properties.height
		}).appendTo($('#hand-ani'));

		//動態檔名
		exportMouse = new this['hand_ani']['hand_ani']();
		stage = new createjs.Stage($canvas[0]);
		stage.addChild(exportMouse);
		stage.update();
		createjs.Ticker.setFPS(24);
		createjs.Ticker.addEventListener("tick", stage);
		exportMouse.stop();
		exportMouse.loop = false;
		exportMouse.on('tick', function(event) {
 			// console.log(exportMouse.currentFrame + '/' + exportMouse.totalFrames)
 			if(exportMouse.currentFrame >= exportMouse.totalFrames){
 				exportMouse.gotoAndStop(0);
 			}
 		});

		document.onmousemove = handleMouseMove;
		document.onmousedown = handleMouseDown;
	}

	function initknockitAni() {
		var $canvas, stage;
		$canvas = $('<canvas></canvas>').attr({
			width: this['knockit'].properties.width,
			height: this['knockit'].properties.height
		}).appendTo($('#knock-it'));

		//動態檔名
		exportKnockit = new this['knockit']['knockit']();
		stage = new createjs.Stage($canvas[0]);
		stage.addChild(exportKnockit);
		stage.update();
		createjs.Ticker.setFPS(24);
		createjs.Ticker.addEventListener("tick", stage);
		exportKnockit.stop();
		exportKnockit.loop = false;
		exportKnockit.on('tick', function(event) {
 			// console.log(exportMouse.currentFrame + '/' + exportMouse.totalFrames)
 			if(exportKnockit.currentFrame >= exportKnockit.totalFrames){
 				exportKnockit.gotoAndStop(0);
 			}
 		});
	}

	function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

		TweenMax.set($('#hand-ani'),{x:event.pageX,y:event.pageY,z:1});
  }

  function handleMouseDown(event) {
  	exportMouse.gotoAndPlay(0);
  }

	function createAni (_parent,_data) {
		var $canvas, $hitArea, stage, exportRoot;
		createjs.MotionGuidePlugin.install();

		$canvas = $('<canvas></canvas>').attr({
			width: this[_data[2]].properties.width,
			height: this[_data[2]].properties.height
		}).css({
			'left': _data[3],
			'top': _data[4]
		}).appendTo(_parent);

		//動態檔名
		exportRoot = new this[_data[2]][_data[2]]();
		stage = new createjs.Stage($canvas[0]);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(24);
		createjs.Ticker.addEventListener("tick", stage);

		exportRootArray.push(exportRoot);
 		exportRoot.loop = false;
 		exportRoot.stop();

 		_parent.data('isPlay',false);

 		//播放結束
 		exportRoot.on('tick', function(event) {
 			// console.log(exportRoot.currentFrame + '/' + exportRoot.totalFrames)
 			if(exportRoot.currentFrame >= exportRoot.totalFrames){
 				exportRoot.gotoAndStop(0);
 				isPlayCount -= 1;
 				_parent.data('isPlay',false)
 				if(isPlayCount == 0){
 					startAutoPlay();
 				}
 			}
 		});

 		//add hitArea
 		$hitArea = $('<div></div>').addClass('hitArea').appendTo(_parent);

 		$hitArea.click(function(event) {

 			var _isPlay = $(this).parent().data('isPlay');
 			// console.log(_isPlay);

 			if(!_isPlay){
 				// console.log('CLICK');
	 			exportRoot.play();
	 			isPlayCount += 1;
	 			stopAutoPlay();
	 			$(this).parent().data('isPlay',true);

	 			TweenMax.to($(this).parent(),0.1,{y:-3,yoyo:true,repeat:3})
	 		}
 			
 		});

 		$hitArea.mouseover(function(event) {
 			$('#hand-ani').css('display', 'block');
 		});

 		$hitArea.mouseout(function(event) {
 			$('#hand-ani').css('display', 'none');
 		});
	}

	function updatePosition () {
	
		var _w = $(window).width();
		var _h = $(window).height();

		//參考坐標#position-frame

		//裁切左右
		// var _dy = _h/953;
		// var _x = (_w - 1920*_d) /2
		// TweenMax.set('#position-frame',{x:_x,transformOrigin:"0% 0%", scale:_dy,z:0.01});

		//擠壓縮放
		var _dx = _w/1920;
		var _dy = _h/953;
		// TweenMax.set('#position-frame',{transformOrigin:"0% 0%", scaleX:_dx,scaleY:_dy,z:0.01});

		//point
		for (var i = 0; i < positionPoint.length; i++) {
			var $point = $('#point-' + i);
			var _data = positionPoint[i];
			$point.css({
				left: Math.round(_data[0]*_dx) + 'px',
				top: Math.round(_data[1]*_dy) + 'px'
			});

			$point.data('x',Math.round(_data[0]*_dx));
			$point.data('y',Math.round(_data[1]*_dy));

			if(_w < 1000){
				TweenMax.to($point,1,{scale:.7});
			}else if(_w < 1440){
				TweenMax.to($point,1,{scale:.8});
			}else{
				TweenMax.to($point,1,{scale:1});
			}
		};

		//titlePoint
		for (var i = 0; i < titlePoint.length; i++) {
			var $title = $('#title-' + i);
			var _data = titlePoint[i];

			$title.css({
				left: Math.round(_data[0]*_dx) + 'px',
				top: Math.round(_data[1]*_dy) + 'px'
			});

			if(_w < 1000){
				TweenMax.to($title,0,{scale:.8});
			}else if(_w < 1600){
				TweenMax.to($title,0,{scale:.9});
			}else{
				TweenMax.to($title,0,{scale:1});
			}
		};

		/************************/

		$('#knock-it').css({
			'left': $('#knock-it').data('tarLeft'),
			'top': $('#knock-it').data('tarTop')
		});
	}

	var autoPlayCount = -1;
	var autoPlayTimeout;
	var isAutoPlay = true;

	function initKnock () {
		initknockitAni();
		startAutoPlay();
	}

	function startAutoPlay() {

		//第一次預設播放
		if(autoPlayCount > 0){
			autoPlayCount = getRandom(0,positionPoint.length-1);
		}else{
			autoPlayCount = 15;
		}

		var _knock = $('#knock-it');
		var _target = $('#point-' + autoPlayCount);

		// console.log(_target.css('left'));

		_knock.css({
			'left': _target.css('left'),
			'top': _target.css('top'),
			'display':'block'
		});

		_knock.data('tarLeft',_target.css('left'));
		_knock.data('tarTop',_target.css('top'));
		exportKnockit.play();

		// TweenMax.set(_knock,{scale:.1});
		// TweenMax.to(_knock, 1.5 ,{scale:1 ,ease: Elastic.easeOut.config(1, 0.4)});

		autoPlayTimeout = setTimeout(function () {
			// TweenMax.to(_knock, 1.5 ,{scale:.1 ,ease: Elastic.easeIn.config(1, 0.75), onComplete:nextKnock});
			nextKnock();
		},2000);
	}

	function nextKnock() {
		$('#knock-it').css({'display':'none'});

		autoPlayTimeout = setTimeout(function () {
			startAutoPlay();
		},1000);
	}

	function stopAutoPlay () {
		clearTimeout(autoPlayTimeout);
		// TweenMax.to($('#knock-it'), 0.5 ,{scale:.1 ,onComplete:onComplete});
	
		function onComplete () {
			$('#knock-it').css({'display':'none'});
		}
	}

	function getRandom(minNum, maxNum) {	//取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
		return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
	}

	/******************************/

	var isServicePanelOpen = false;

	function initServicePanel () {

		// TweenMax.set('#panel-service',{css:{'width':'0%'}});
		// TweenMax.set('.service-content', {x:-500});

		TweenMax.set('#panel-service', {y:$(window).height()});
		TweenMax.set('.service-content',{y:-500});

		$('#panel-service').css({'display':'block'});

		$('#btn-service').mouseover(function(event) {
			var _r = 180;
			if(isServicePanelOpen){
				_r = 225;
			}
			TweenMax.to('.btn-service-arr',0.8,{rotation:_r,ease: Power3.easeOut});
		});

		$('#btn-service').mouseout(function(event) {
			if(!isServicePanelOpen){
				TweenMax.to('.btn-service-arr',0.8,{rotation:0,ease: Power3.easeOut});
			}else{
				TweenMax.to('.btn-service-arr',0.8,{rotation:45,ease: Power3.easeOut});
			}
		});

		$('#btn-service').click(function(event) {
			/* Act on the event */
			/*var _w = $(window).width();
			TweenMax.to('#panel-service', 1 ,{css:{'width':'100%',ease: Expo.easeInOut}});
			TweenMax.to('.service-content',1, {x:0,ease: Expo.easeOut});
			TweenMax.to('#wrapper',1,{x:-_w,ease: Expo.easeOut});*/
			var _h = $(window).height();

			if(!isServicePanelOpen){
				isServicePanelOpen = true;
				TweenMax.to('#wrapper',2,{y:-_h,ease: Expo.easeInOut});
				TweenMax.to('#panel-service', 2 ,{y:0,ease: Expo.easeInOut});
				TweenMax.to('.service-content',2,{y:0,ease: Expo.easeInOut});
				TweenMax.to('.btn-service-arr',0.5,{rotation:225,ease: Power3.easeOut});
			}else{
				isServicePanelOpen = false;
				TweenMax.to('#wrapper',2,{y:0,ease: Expo.easeInOut});
				TweenMax.to('#panel-service', 2 ,{y:_h,ease: Expo.easeInOut});
				TweenMax.to('.service-content',2,{y:-500,ease: Expo.easeInOut});
				TweenMax.to('.btn-service-arr',0.5,{rotation:0,ease: Power3.easeOut});
			}
		});

		$('.btn-mailTo').mouseover(function(event) {
			var _textline = $(this).find('.textline');
			TweenMax.to(_textline,0.5,{css:{'width':'100%'}});
		});

		$('.btn-mailTo').mouseout(function(event) {
			var _textline = $(this).find('.textline');
			TweenMax.to(_textline,0.5,{css:{'width':'0%'}});
		});

		$('.btn-mailTo').click(function(event) {
			location.href = 'mailto:kate@knockknockcreative.com';
		});
	}

	function updatePanelPosition() {
		var _h = $(window).height();

		if(isServicePanelOpen){
			TweenMax.set('#wrapper',{y:-_h,ease: Expo.easeInOut});
			TweenMax.set('#panel-service', {y:0,ease: Expo.easeInOut});
			TweenMax.set('.service-content',{y:0,ease: Expo.easeInOut});
		}else{
			TweenMax.set('#wrapper',{y:0,ease: Expo.easeInOut});
			TweenMax.set('#panel-service', {y:_h,ease: Expo.easeInOut});
			TweenMax.set('.service-content',{y:-500,ease: Expo.easeInOut});
		}
	}

	/*******************************/

	function getRandomArray(minNum, maxNum, n) {	//隨機產生不重覆的n個數字
		var rdmArray = [n];		//儲存產生的陣列
	 
		for(var i=0; i<n; i++) {
			var rdm = 0;		//暫存的亂數
	 
			do {
				var exist = false;			//此亂數是否已存在
				rdm = getRandom(minNum, maxNum);	//取得亂數
	 
				//檢查亂數是否存在於陣列中，若存在則繼續回圈
				if(rdmArray.indexOf(rdm) != -1) exist = true;
	 
			} while (exist);	//產生沒出現過的亂數時離開迴圈
	 
			rdmArray[i] = rdm;
		}
		return rdmArray;
	}

	//constructor

	{
		/*$(document).ready(function() {
			init();
		});*/

		$( window ).load(function() {
			init();
		});

	}

	//public

	return {

	}
}

main = new main();