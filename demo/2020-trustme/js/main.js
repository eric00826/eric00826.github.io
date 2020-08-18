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
    // new WOW().init();
    AOS.init({
      easing: 'ease-out-back',
      duration: 800
    });
	}

	//constructor

	{
		$(document).ready(function() {
			init();
		});
	}

	//public

	return {

	};
};

var main = new main();
