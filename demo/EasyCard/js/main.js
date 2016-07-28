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
	}

	//constructor

	{
		$(document).ready(function() {

			var iOS = /iPad|iPhone|iPod/.test(navigator.platform);

	    if(iOS){
	    	// alert('iOS line-height');

	      $('.rule-notice').find('p').css({
	        'font-size': '26px',
	        'line-height': '32px'
	      });

	      $('.rule-notice').find('p').css({
	        'font-size': '26px',
	        'line-height': '32px'
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