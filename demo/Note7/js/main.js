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