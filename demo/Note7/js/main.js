/**
 *
 * @authors Eric Hsiao
 *
 */

main = function (){

	//private menbers
	var isMenu = false;

	//private methods
	function init () {
		console.log('main is loaded.');

		initMenu();
		initAboutTab();
		initQA();

		var touch = window.ontouchstart
            || (navigator.MaxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0);

		if (touch) { // remove all :hover stylesheets
		    try { // prevent exception on browsers not supporting DOM styleSheets properly
		        for (var si in document.styleSheets) {
		            var styleSheet = document.styleSheets[si];
		            if (!styleSheet.rules) continue;

		            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
		                if (!styleSheet.rules[ri].selectorText) continue;

		                if (styleSheet.rules[ri].selectorText.match(':hover')) {
		                    styleSheet.deleteRule(ri);
		                }
		            }
		        }
		    } catch (ex) {}
		}
	}

	function initMenu() {
		$('.content-menu-open').click(function(event) {
			if(!isMenu){
				isMenu = true;
				$('#content-menu').css('display', 'block');
				$('.content-menu-open').css('background-image', 'url(images/mobile/menu-close.png)');
			}else{
				isMenu = false;
				$('#content-menu').css('display', 'none');
				$('.content-menu-open').css('background-image', '');
			}
		});
	}

	function initAboutTab() {
		if($('.about-tab').width() != null){

			$('.about-tab').find('.tab-left').click(function(event) {
				$('.content-article-1').css('display', 'block');
				$('.content-article-2').css('display', 'none');
				$('.about-tab').find('.tab-left').addClass('active');
				$('.about-tab').find('.tab-right').removeClass('active');
			});

			$('.about-tab').find('.tab-right').click(function(event) {
				$('.content-article-1').css('display', 'none');
				$('.content-article-2').css('display', 'block');
				$('.about-tab').find('.tab-left').removeClass('active');
				$('.about-tab').find('.tab-right').addClass('active');
			});

		}
	}

	function initQA() {
		$('.qa-topic').data('isOpen', false);
		$('.qa-topic').find('.qa-topic-title').click(function(event) {
			var _topic = $(this).parent();
			// alert(_topic.data('isOpen'));
			if(!_topic.data('isOpen')){
				_topic.data('isOpen', true);
				_topic.find('.qa-topic-title').addClass('active');
				_topic.find('.qa-topic-article').css('display', 'block');
			}else{
				_topic.data('isOpen', false);
				_topic.find('.qa-topic-title').removeClass('active');
				_topic.find('.qa-topic-article').css('display', 'none');
			}
		});
	}

	//constructor

	{
		$(document).ready(function() {

			var iOS = /iPad|iPhone|iPod/.test(navigator.platform);

	    if(iOS){
	    	// alert('iOS line-height');

	    	$('table').css({
	        'margin-top': '-1em'
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