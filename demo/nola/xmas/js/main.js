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

		initIndex();
		initPlayer();
		initExchange();

		//start
		indexInto();
	}

	/**************************/

	function initIndex() {		
		$('.btn-enter').click(function(event) {
			indexClose();
		});

		$('.btn-rule').click(function(event) {
			UIOpen('.pop-ui-rule');
		});

		$('.panel-rule-close').click(function(event) {
			UIClose('.pop-ui-rule');
		});

		$('.btn-nola').click(function(event) {
			open('http://www.nola.com.tw/');
		});

		$('.btn-return').click(function(event) {
			var r = confirm("即將返回首頁，遊戲資料將清除請問是否要繼續？");
			if (r == true) {
			    location.reload();
			}
		});
	}

	function indexInto () {
		// $('#content-index').css('display', 'block');

		TweenMax.set($('#content-index'),{autoAlpha:0});
		$('#content-index').css('display', 'block');
		TweenMax.to($('#content-index'),0.5,{autoAlpha:1});

		TweenMax.from($('.main-index-kv'),0.8,{delay:0.2,scale:1.5,autoAlpha:0,ease: Back.easeOut.config(2)});
		TweenMax.from($('.main-index-logo'),0.5,{delay:0.4,scale:.2,autoAlpha:0,ease: Back.easeOut.config(2)});
	
		TweenMax.from($('.btn-enter'),0.5,{delay:0.7,scale:.2,autoAlpha:0,ease: Back.easeOut.config(2)});
		TweenMax.from($('.btn-rule'),0.5,{delay:0.9,scale:.2,autoAlpha:0,ease: Back.easeOut.config(2)});
	}

	function indexClose () {
		// $('#content-index').css('display', 'none');

		TweenMax.to($('.btn-enter'),0.5,{scale:.2,autoAlpha:0,ease: Back.easeIn.config(2)});
		TweenMax.to($('.btn-rule'),0.5,{delay:0.2,scale:.2,autoAlpha:0,ease: Back.easeIn.config(2)});
		TweenMax.to($('.main-index-kv'),0.5,{delay:0.4,scale:.2,autoAlpha:0,ease: Back.easeIn.config(2)});
		TweenMax.to($('.main-index-logo'),0.5,{delay:0.4,scale:.2,autoAlpha:0,ease: Back.easeIn.config(2)});

		//next
		setTimeout(playerInto,1000);
	}

	/**************************/

	var palyerList = [];
	// var dummyPlayerObj = {name:'name',gift:'gift-1'};

	var giftCount = -1;
	var lastPlayerPage = -1;
	var nowPlayerPage = -1;

	function initPlayer () {
		initUIPlayerName();
		initUIPlayerEdit();

		$('.btn-add').click(function(event) {

			var _player;
			_player = giftCount + 2;

			$('#input-player-name').val('客人' + (_player));
			UIOpen('.pop-ui-player-name');
			$('#input-player-name').focus();
		});

		$('.btn-start').click(function(event) {
			if(palyerList.length < 2){
				alert('請先新增兩個以上要交換的禮物。');
			}else{
				gameStart();
			}
		});

		$('.btn-page-next').click(function(event) {
			var _page = nowPlayerPage + 1;
			if(_page > lastPlayerPage){
				alert('已經是最後一頁');
			}else{
				gotoPage(_page);
			}
		});

		$('.btn-page-pre').click(function(event) {
			var _page = nowPlayerPage - 1;
			if(_page < 0){
				alert('已經是第一頁');
			}else{
				gotoPage(_page);
			}
		});
	}

	function playerInto () {
		$('#content-player').css('display', 'block');

		TweenMax.from($('.btn-start'),0.5,{scale:.2,autoAlpha:0,ease: Back.easeOut.config(2)});
		TweenMax.from($('.btn-add'),0.5,{delay:0.2,scale:.2,autoAlpha:0,ease: Back.easeOut.config(2)});
	
		//批次產生
		/*var person = prompt("[測試專用]新增多位客人", 4);

		if (person != null) {
		    for (var i = 0; i < person; i++) {
					addNewPlayer('客人' + (i + 1));
				};
		}*/
	}

	var isPlayerClose = false;

	function playerClose () {
		// $('#content-player').css('display', 'none');

		if(!isPlayerClose){
			isPlayerClose = true;
			TweenMax.to($('.btn-start'),0.5,{scale:.2,ease: Back.easeIn.config(2)});
			TweenMax.to($('#content-player'),0.5,{delay:0.2,autoAlpha:0});

			//next
			setTimeout(exchangeInto,500);
		}
	}

	function addNewPlayer(_name) {
		var playerObj = {playerID:'', name:'',style:'',getCount:'',exchangeTimes:0};
		playerObj.name = _name;

		var _style = getRandom(1,4);
		playerObj.style = _style;

		giftCount++;
		playerObj.playerID = giftCount;
		playerObj.getCount = giftCount;

		palyerList.push(playerObj);
		addNewGift(playerObj);

		// console.log(palyerList);
	}

	function addNewGift(_playerObj) {
		//先判斷在第幾頁
		var _last = palyerList.length - 1;
		var _page = Math.floor(_last/4);
		
		if(lastPlayerPage < _page){
			lastPlayerPage++;
			addNewPage(lastPlayerPage);

			gotoPage(lastPlayerPage);
		}

		var $giftItem = $('<div></div>').addClass('gift-item gift-item-' + _playerObj.playerID + ' gift-style-' + _playerObj.style);
		$giftItem.data('playerID', _playerObj.playerID);
		$giftItem.data('playerObj', _playerObj);
		$giftItem.appendTo($('.gift-page-' + lastPlayerPage));

		$giftName = $('<div></div>').addClass('gift-name').appendTo($giftItem);

		//字數處理
		$giftName.text(_playerObj.name);

		$giftItem.click(function(event) {
			editGift($(this));
		});

		TweenMax.from($giftItem,0.5,{scale:.2,autoAlpha:0,ease: Back.easeOut.config(2)});
		updateGiftCount();
	}

	function addNewPage(_newPage) {
		var $page = $('<div></div>').addClass('gift-page gift-page-' + _newPage);
		$page.appendTo($('.gift-panel'));
	}

	function gotoPage(_page) {

		console.log('lastPlayerPage = ' + lastPlayerPage);

		for (var i = 0; i < lastPlayerPage + 1; i++) {
			$('.gift-page-' + i).css('display', 'none');
		};

		$('.gift-page-' + _page).css('display', 'block');

		nowPlayerPage = _page;
		updateGiftCount();
	}

	function updateGiftCount () {
		var _nowCount = palyerList.length;
		if(nowPlayerPage < lastPlayerPage){
			_nowCount = (nowPlayerPage + 1)*4;
		}

		var _first = (nowPlayerPage*4) +1;

		$('.gift-count').text(_first + '-' + _nowCount + ' / ' +  palyerList.length);
	}

	var nowSetectGift;

	function editGift(_gift) {
		nowSetectGift = _gift;
		UIOpen('.pop-ui-player-edit');
	}

	var pickStepList = [];
	var pickStepString = [];
	var palyerListResult;

	function gameStart() {
		palyerListResult = [];
		palyerListResult = JSON.parse(JSON.stringify(palyerList));
		
		runCount = 0;
		pickCount = 0;
		pickStepString = [];
		pickStepList = [];

		console.log('開始交換');
		console.log('=== palyerList =====');
		console.log(palyerList);
		console.log('=== palyerListResult =====');
		console.log(palyerListResult);

		startCount++;

		if(startCount < 5){
			doPick();
		}
	}

	var pickCount = 0;
	var startCount = 0;

	function doPick() {
		pickCount++;

		console.log('pick : '+ pickCount + ' START.');

		//step 1
		var _length = palyerListResult.length;
		var pickArray = getRandomArray(0,_length - 1,_length);

		var pick_1 = palyerListResult[pickArray[_length - 1]];
		var pick_2 = palyerListResult[pickArray[_length - 2]];

		var n = false;

		var prePickID_1;
		var prePickID_2;

		if(pickCount>1){
			var prePick = pickStepList[pickStepList.length-1];
			prePickID_1 = prePick[0].playerID;
			prePickID_2 = prePick[1].playerID;
		}

		var maxExchangeTimes = 10;
		if(palyerListResult.length > 20){
			maxExchangeTimes = 3;
		}else if(palyerListResult.length > 10){
			maxExchangeTimes = 4;
		}else if(palyerListResult.length > 8){
			maxExchangeTimes = 8;
		}

		if(palyerListResult.length > 100){
			pickCount = 500;
		}

		//檢查是否重複步驟
		if(pickCount > 300){
			console.log('過多遞迴(>300)，重新開始');
			gameStart();

		}else if(pick_1.exchangeTimes >= maxExchangeTimes || pick_2.exchangeTimes >= maxExchangeTimes){
			//重抽
			console.log('pick : ' + pickCount + ', 重抽:交換太多次');
			doPick();
		}else if(prePickID_1 == pick_1.playerID){
			//重抽
			console.log('pick : ' + pickCount + ', 重抽:上一棒次重複');
			doPick();
		}else if(prePickID_1 == pick_2.playerID && prePickID_2 == pick_1.playerID){
			//重抽
			console.log('pick : ' + pickCount + ', 重抽:上一棒次互換');
			doPick();
		}else if(palyerListResult.length > 8 && pick_1.playerID == pick_2.getCount){
			//對方如果是自己的禮物就重抽
			console.log('pick : ' + pickCount + ',  重抽:換回自己的禮物');
			doPick();
		}else if(palyerListResult.length > 8 &&  pick_2.playerID == pick_1.getCount){
			//對方如果是自己的禮物就重抽
			console.log('pick : ' + pickCount + ',  重抽:換回自己的禮物');
			doPick();
		}else{
			//寫入步驟
			//交換

			var tempCount = pick_1.getCount;
			pick_1.getCount = pick_2.getCount;
			pick_2.getCount = tempCount;

			pick_1.exchangeTimes++;
			pick_2.exchangeTimes++;

			var pickStep = [pick_1,pick_2];
			pickStepList.push(pickStep);

			var string =  pick_1.name + " 交換 " + pick_2.name
			pickStepString.push(string);

			//檢查全部是否抽完
			for (var i = 0; i < _length; i++) {
				if(palyerListResult[i].playerID == palyerListResult[i].getCount){
					console.log('pick : ' + pickCount + ' === 還沒抽完 ===');
					doPick();
					break;
				}else{
					if(i == _length -1){
						if(_length > 2 && pickStepList.length < pickStepMin()){
							//繼續抽
							console.log('pick : ' + pickCount + ' === 不夠繼續抽 ===');
							doPick();
						}if(pickStepList.length > palyerListResult.length*2){
							//繼續抽
							console.log('pick : ' + pickCount + ' === 重玩:太過冗長 ===');
							gameStart();
						}else{
							console.log('pick : ' + pickCount + ' === 交換完畢 ===');
							console.log(pickStepString);
							console.log(pickStepList);
							console.log(palyerListResult);
							console.log('pickStepMin = ' + pickStepMin());
							playerClose();
						}
					}
				}
			};
		}
	}

	function pickStepMin() {
		var _pickStepMin;

		if(palyerList.length == 2){
			_pickStepMin = 2;
		}else if(palyerList.length == 3){
			_pickStepMin = 4;
		}else if(palyerList.length == 4){
			_pickStepMin = 6;
		}else if(palyerList.length == 5){
			_pickStepMin = 6;
		}else{
			_pickStepMin = 0;
		}
		return _pickStepMin;
	}

	/*******************************/
	var nowExchangeStep = 0;
	var lastExchangeStep = 0;

	function exchangeInto() {
		$('#content-exchange').css('display', 'block');
		nextExchangeStep();
	}

	function exchangeClose() {
		$('#content-exchange').css('display', 'none');
		KingInto();
	}

	function initExchange() {
		$('.btn-next').click(function(event) {

			if(nowExchangeStep < pickStepList.length - 1){
				pickCompleteCount = 0;
				
				if(nowExchangeStep < lastExchangeStep){
					nowExchangeStep++;
					showExchangeStep();
				}else{
					nowExchangeStep++;
					nextExchangeStep();
				}
				
			}else{
				//交換完成
				exchangeClose();
			}
		});

		$('.btn-pre').click(function(event) {
			nowExchangeStep--;
			if(nowExchangeStep < 0){
				nowExchangeStep = 0;
			}else{
				showExchangeStep();
				$('.pickInfoText').text((nowExchangeStep + 1) + ' / 共' + pickStepList.length + '組');
			}
		});
	}

	function nextExchangeStep() {
		if(nowExchangeStep > lastExchangeStep){
			lastExchangeStep = nowExchangeStep;
		}

		console.log('nowExchangeStep : ' + nowExchangeStep + ', lastExchangeStep = ' + lastExchangeStep);

		$('.exchange-item-1').empty();
		$('.exchange-item-2').empty();

		console.log('nowExchangeStep = ' + nowExchangeStep);

		var pickStep = pickStepList[nowExchangeStep];

		if(nowExchangeStep == lastExchangeStep){
			hideBtnNext();
			startRandomAnimation($('.exchange-item-1'),pickStep[0]);
			startRandomAnimation($('.exchange-item-2'),pickStep[1]);
		}else{
			createGiftItem($('.exchange-item-1'),pickStep[0]);
			createGiftItem($('.exchange-item-2'),pickStep[1]);
		}

		// startRandomAnimation($('.exchange-item-1'),pickStep[0]);
		// startRandomAnimation($('.exchange-item-2'),pickStep[1]);
		TweenMax.from('.exchange-arrow',2,{delay:1,rotation:"360", ease: Power2.easeInOut});
		$('.pickInfoText').text((nowExchangeStep + 1) + ' / 共' + pickStepList.length + '組');
	}

	function preExchangeStep() {

	}

	function startRandomAnimation(_target, _pickObj) {
		for (var i = 0; i < palyerList.length; i++) {
			var _playerObj = palyerList[i];
			var $giftItem = $('<div></div>').addClass('gift-item gift-item-' + _playerObj.playerID + ' gift-style-' + _playerObj.style);
			$giftItem.data('playerID', _playerObj.playerID);
			$giftItem.data('playerObj', _playerObj);
			$giftName = $('<div></div>').addClass('gift-name').appendTo($giftItem);
			//字數處理
			$giftName.text(_playerObj.name);

			$giftItem.css('display', 'none');
			$giftItem.appendTo(_target);
		};

		var randomArray = getRandomArray(0,palyerList.length - 1,palyerList.length);
		_target.data('randomArray', randomArray);
		_target.data('randomIndex', 0);
		_target.data('randomCount', 0);
		_target.find('.gift-item-' + palyerList[randomArray[0]].playerID).css('display', 'block');

		var pickInterval = setInterval(function() {

			var _randomArray = _target.data('randomArray');
			var _randomIndex = _target.data('randomIndex');

			for (var i = 0; i < palyerList.length; i++) {
				var _playerObj = palyerList[i];
				_target.find('.gift-item-' + _playerObj.playerID).css('display', 'none');
			};

			_randomIndex++;

			if(_randomIndex > palyerList.length - 1){
				_randomIndex = 0;
			}

			var _focusID = palyerList[_randomArray[_randomIndex]].playerID;
			_target.find('.gift-item-' + _focusID).css('display', 'block');
			_target.data('randomIndex', _randomIndex);
			var _randomCount = _target.data('randomCount');
			_randomCount++;
			_target.data('randomCount',_randomCount);

			if (_randomCount > 10) {
				if(_pickObj.playerID == _focusID){
					clearInterval(pickInterval);
					setTimeout(function () {
						pickComplete();
					},300);
				}
			};

		},100);

		var _delay = getRandom(1,3)/10;
		TweenMax.from(_target,0.5,{delay:_delay,scale:.2,ease: Back.easeOut.config(2)});
	}

	var pickCompleteCount = 0;

	function pickComplete() {
		console.log('pickComplete');
		pickCompleteCount++;

		if(pickCompleteCount == 2){
			// pickCompleteCount = 0;
			showBtnNext();

			if(nowExchangeStep > 0){
				showBtnPre();
			}
		}
	}

	function showExchangeStep() {

		console.log('nowExchangeStep : ' + nowExchangeStep + ', lastExchangeStep = ' + lastExchangeStep);

		$('.exchange-item-1').empty();
		$('.exchange-item-2').empty();

		var pickStep = pickStepList[nowExchangeStep];
		createGiftItem($('.exchange-item-1'),pickStep[0]);
		createGiftItem($('.exchange-item-2'),pickStep[1]);
		$('.pickInfoText').text((nowExchangeStep + 1) + ' / 共' + pickStepList.length + '組');
	}

	function createGiftItem(_target, _pickObj) {
		var $giftItem = $('<div></div>').addClass('gift-item gift-item-' + _pickObj.playerID + ' gift-style-' + _pickObj.style);
		$giftItem.data('playerID', _pickObj.playerID);
		$giftItem.data('playerObj', _pickObj);
		$giftName = $('<div></div>').addClass('gift-name').appendTo($giftItem);
		//字數處理
		$giftName.text(_pickObj.name);
		$giftItem.appendTo(_target);

		TweenMax.from(_target,0.5,{scale:.2,ease: Back.easeOut.config(2)});
	}

	function showBtnNext() {
		$('.btn-next').css('display', 'block');
		TweenMax.from($('.btn-next'),0.5,{scale:0.2,autoAlpha:0,ease: Back.easeOut.config(2)});
		
		$('.pickInfoText').css('display', 'block');
		TweenMax.from($('.pickInfoText'),0.5,{delay:0.2,autoAlpha:0});
		$('.pickInfoText').text((nowExchangeStep + 1) + ' / 共' + pickStepList.length + '組');
	}

	function hideBtnNext() {
		$('.btn-next').css('display', 'none');
		$('.pickInfoText').css('display', 'none');
	}

	function showBtnPre() {
 		$('.btn-pre').css('display', 'block');
	}

	function hideBtnPre() {
		$('.btn-pre').css('display', 'none');
	}

	/*******************************/

	function KingInto() {
		TweenMax.to('.king-effect',8,{rotation:"360", ease:Linear.easeNone, repeat:-1});
		TweenMax.from('.king-effect',0.5,{autoAlpha:0});
		TweenMax.from('.king-text',2,{autoAlpha:0,scale:1.5,ease: Elastic.easeOut.config(1, 0.4)});
		
		TweenMax.from($('.btn-king'),0.5,{delay:0.5,scale:0.2,autoAlpha:0,ease: Back.easeOut.config(2)});

		$('#content-king').css('display', 'block');

		$('.btn-king').click(function(event) {
			$('#content-king').css('display', 'none');
			shareInto();
		});
	}

	var kingRandomArray = [];
	var kingRandomCount = 0;
	var kingRandomIndex = 0;
	var kingRandomInterval = 0;
	var kingCount = 0;
	var kingID = 0;

	var kingRandomSpeed = 100;

	function shareInto() {
		TweenMax.set('.share-effect',{autoAlpha:0});
		TweenMax.set('.share-text',{autoAlpha:0,scale:1.5});
		TweenMax.set('.btn-share',{autoAlpha:0,scale:0.2});

		$('#content-share').css('display', 'block');

		TweenMax.from($('.share-gift'),0.5,{scale:.2,autoAlpha:0,ease: Back.easeOut.config(2)});

		kingCount = getRandom(0,palyerList.length-1);
		kingID = palyerList[kingCount].playerID;

		console.log('kingID = ' + kingID);

		kingRandomArray = getRandomArray(0,palyerList.length - 1,palyerList.length);

		kingRandomInterval = setInterval(function () {
			var _count = kingRandomArray[kingRandomIndex]
			var _obj = palyerList[_count];
			$('.share-gift').css('background-image', 'url(./images/gift-' + _obj.style + '-l.png)');
			$('.share-gift-name').text(_obj.name);
			$('.share-gift').css('display', 'block');

			kingRandomIndex++;
			if(kingRandomIndex >= palyerList.length) kingRandomIndex = 0;

			kingRandomCount++;

			if (kingRandomCount > 20) {
				if(_obj.playerID == kingID){
					showKingComplete();
					clearInterval(kingRandomInterval);
				}
			}

			/*if (kingRandomCount > 20) {
				kingRandomSpeed = 400;

				if(_obj.playerID == kingID){
					clearInterval(kingRandomInterval);
				}

			}else if (kingRandomCount > 15) {
				kingRandomSpeed = 200;
			}else if (kingRandomCount > 10) {
				kingRandomSpeed = 100;
			}*/

		},kingRandomSpeed);

		/*var kingObj = palyerList[kingCount];
		$('.share-gift').css('background-image', 'url(./images/gift-' + kingObj.style + '-l.png)');
		$('.share-gift-name').text(kingObj.name);
		$('.share-gift').css('display', 'block');*/

		$('.btn-share').click(function(event) {
			shareFB('http://eric00826.github.io/demo/nola/xmas/');
		});
	}

	function showKingComplete() {
		TweenMax.to('.share-effect',8,{rotation:"360", ease:Linear.easeNone, repeat:-1});
		TweenMax.to('.share-effect',0.5,{autoAlpha:1});
		TweenMax.to('.share-text',2,{autoAlpha:1,scale:1,ease: Elastic.easeOut.config(1, 0.4)});
		
		TweenMax.to($('.btn-share'),0.5,{delay:0.5,scale:1,autoAlpha:1,ease: Back.easeOut.config(2)});
	}

	/*******************************/
	//init UI

	function initUIPlayerName() {
		var _default = '請輸入大名';
		/*setDefault('.input-player-name',_default);*/

		$('.pop-ui-player-name').find('.btn-panel-player-submit').click(function(event) {
			var _name = $('.input-player-name').val();

			if(_name != '' && _name != _default){
				// setDefault('.input-player-name',_default);
				UIClose('.pop-ui-player-name');
				addNewPlayer(_name);
			}else{
				alert('請輸入大名');
			}
		});
	}

	function initUIPlayerEdit() {
		$('.btn-panel-player-nameEdit').click(function(event) {
			editPlayer(nowSetectGift);
			UIClose('.pop-ui-player-edit');
		});

		$('.btn-panel-player-delete').click(function(event) {
			deletePlayer(nowSetectGift);
			UIClose('.pop-ui-player-edit');
		});

		//pop-ui-player-nameEdit
		$('.pop-ui-player-nameEdit').find('.btn-panel-player-submit').click(function(event) {
			var _playerObj = nowSetectGift.data('playerObj');
			_playerObj.name = $('.input-player-name-edit').val();
			nowSetectGift.find('.gift-name').text(_playerObj.name);

			UIClose('.pop-ui-player-nameEdit');
		});
	}

	function editPlayer(_gift) {
		UIOpen('.pop-ui-player-nameEdit');

		var _playerObj = _gift.data('playerObj');
		var _name = _playerObj.name
		$('.input-player-name-edit').val(_name);
		$('.input-player-name-edit').focus();
	}

	function deletePlayer(_gift) {
		var _playerObj = _gift.data('playerObj');
		for (var i = 0; i < palyerList.length; i++) {
			if(palyerList[i].playerID == _playerObj.playerID){
				palyerList.splice(i,1);
				break;
			}
		};

		_gift.remove();
	}

	/*************/

	function UIOpen (_className) {
		var _ui = $(_className);
		TweenMax.set(_ui,{autoAlpha:0});
		_ui.css('display', 'block');
		TweenMax.to(_ui,0.5,{autoAlpha:1});
	}

	function UIClose (_className) {
		var _ui = $(_className);
		TweenMax.to(_ui,0.3,{autoAlpha:0});
	}

	/***************************************/

	function shareFB(_url) {
    open('https://www.facebook.com/sharer/sharer.php?u=' + _url,'share','width=576px,height=610px');
  }

	function getRandom(minNum, maxNum) {	//取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
		return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
	}

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
		$(document).ready(function() {
			init();

			var iOS = /iPad|iPhone|iPod/.test(navigator.platform);

      if(iOS){
  			$('.input-player-name').css({
  				'width': '440px',
  				'height': '90px'
  			});
      }
		});
	}

	//public

	return {

	}
}

main = new main();