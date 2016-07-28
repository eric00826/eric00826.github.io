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
	    	alert('iOS');

	      $('.rule-notice').find('p').css({
	        'font-size': '36px'
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