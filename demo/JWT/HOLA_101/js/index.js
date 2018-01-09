/**
 *
 * @authors Eric Hsiao
 *
 */

main = function (){

	//private menbers
  var slider;
  var startCount = 0;
	var tableBtnPoint = [[1130,596],
                      [1130,622],
                      [1130,636],
                      [1130,618],
                      [1130,624],
                      [1130,633]];

  var shareList = ['it','th','fr','jp','tw','uk'];

	//private methods
	function init () {
		// console.log('main is loaded.');

    var queryParams = $.getQueryParameters();
    console.log('queryParams.index = ' + queryParams.index);

    switch(queryParams.index){
      case 'it':
      startCount = 0;
      break;
      case 'th':
      startCount = 1;
      break;
      case 'fr':
      startCount = 2;
      break;
      case 'jp':
      startCount = 3;
      break;
      case 'tw':
      startCount = 4;
      break;
      case 'uk':
      startCount = 5;
      break;
    }

    initTable();
    setTable();

    /**********************************/

    //initSlider

    slider = $('.bxslider').bxSlider({
      mode: 'vertical',
      slideMargin: 0,
      auto:true,
      speed:1000,
      startSlide:startCount,

      onSlideBefore: function($slideElement, oldIndex, newIndex){
        console.log('onSlideBefore : ' + newIndex);
        intoTable(newIndex);
      }
    });

    //easing:'cubic-bezier(.44,0,.26,1)',

    /**/

    /*********************************/

    $(window).resize(function(event) {
      setTable();
      slider.reloadSlider();
    });

    if(!isIE) {
      TweenMax.from($('.table-title'),2,{y:50,autoAlpha:0,ease:Expo.easeOut});
      TweenMax.from($('.slider'),2,{y:80,autoAlpha:0,ease:Expo.easeOut});
    }

    $(window).on('mousewheel', function(event) {
        if(event.deltaY < 0){
          slider.goToNextSlide();
          ga_ButtonClick('bt_pageDown');
        }else if(event.deltaY > 0){
          slider.goToPrevSlide();
          ga_ButtonClick('bt_pageUp');
        }
    });
  }

  function initTable() {
    for (var i = 0; i < 6; i++) {
      var count = i;
      count++;

      var _tableBtn = $('<div></div>').addClass('table-btn').appendTo($('#table-' + count));
      var _point = $('<div></div>').addClass('table-btn-point').appendTo(_tableBtn).html('<img src="images/btn-point.png">');
      var _text = $('<div></div>').addClass('table-btn-text').appendTo(_tableBtn).html('<img src="images/table-btn-text-' + count + '.png">');

      if(!isIE) TweenMax.set(_point,{x:-10});

      _tableBtn.mouseover(function(event) {
        var _p = $(this).find('.table-btn-point');
        var _t = $(this).find('.table-btn-text');

        if(!isIE){
          TweenMax.to(_p,1,{scale:1.4,ease: Elastic.easeOut.config(1, 0.3)});
        }
        // TweenMax.to(_t,1,{x:15,ease: Elastic.easeOut.config(1, 0.3)});

        var _m = $(this).find('.more-btn').css({'background-position':'0 100%'});
        slider.stopAuto();

      });

      _tableBtn.mouseout(function(event) {
        var _p = $(this).find('.table-btn-point');
        var _t = $(this).find('.table-btn-text');

        if(!isIE){
          TweenMax.to(_p,1,{scale:1,ease: Elastic.easeOut.config(1, 0.3)});
        }
        // TweenMax.to(_t,1,{x:0,ease: Elastic.easeOut.config(1, 0.3)});

        slider.startAuto();

        var _m = $(this).find('.more-btn').css({'background-position':'0 0%'});
      });

      _tableBtn.data('i', i)

      _tableBtn.click(function(event) {
        // console.log($(this).data('count'));
        location.href = shareList[$(this).data('i')] + '.html';

        ga_ButtonClick('bt_' + shareList[$(this).data('i')] + 'Page');
      });

      var _exBtn = $('<div></div>').addClass('ex-btn ex-btn-' + i).appendTo(_tableBtn);
      var _more = $('<div></div>').addClass('more-btn more-btn-' + i).appendTo(_tableBtn);
      // _more.html('<img src="images/more.png">');
    }

    intoTable(startCount);
  }

  function setTable() {

    $('.table-topic').css({'height':$(window).height() + 'px'});

    var _l = tableBtnPoint.length

    for (var i = 0; i < _l; i++) {
      var count = i;
      count++;
      var _tableBtn = $('#table-' + count).find('.table-btn');

      var _d = $(window).height()/768;
      var _left = (1920*.5 - tableBtnPoint[0][0])*_d*-1;
      var _top = (768*.5 - tableBtnPoint[0][1])*_d*-1;

      _tableBtn.css({'left':'50%','margin-left':_left + 'px','top':'50%','margin-top': _top + 'px'});

    };

  }

  function intoTable(_index) {

    if(isIE) return;

    var _count = _index;
    _count++;

    console.log('intoTable : ' + _count);

    // $('#table-' + _count).css({'display':'none'});

    // TweenMax.from($('#table-' + _count).find('.table-btn'),0.8,{delay:0.3,y:100,alpha:0});
    TweenMax.from($('.table-' + _count).find('.table-btn-point'),2,{delay:0.5,scale:0.1,alpha:0,ease: Elastic.easeOut.config(1.2, 0.3)});
    // TweenMax.from($('.table-' + _count).find('.table-btn-text'),2,{delay:0.8,y:10,alpha:0,ease: Elastic.easeOut.config(1, 0.3)});
    TweenMax.from($('.table-' + _count).find('.table-btn-text'),1,{delay:0.8,x:0,alpha:0});
    TweenMax.from($('.table-' + _count).find('.more-btn'),2,{delay:0.5,y:-15,alpha:0,ease:Expo.easeInOut});

  }

  function initMobile() {
    for (var i = 0; i < 6; i++) {
      var count = i;
      count++;

      var _tableBtn = $('.table-mobile-' + count);

      _tableBtn.data('i', i)

      _tableBtn.click(function(event) {
        // console.log($(this).data('count'));
        location.href = shareList[$(this).data('i')] + '.html';

        ga_ButtonClick('bt_m_' + shareList[$(this).data('i')] + 'Page');
      });
    }
  }

	//constructor

	{
		$(document).ready(function() {


      if(!isMobile){
        init();
        ga_pageView('pg_index');
      }else{
        initMobile();
        ga_pageView('pg_m_index');
      }


		});
	}

	//public

	return {
    goToSlide:function(_p) {
      slider.goToSlide(_p);
    }
	}
}

main = new main();

jQuery.extend({

  getQueryParameters : function(str) {
    return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
  }

});