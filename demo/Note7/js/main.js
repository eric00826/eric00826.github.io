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