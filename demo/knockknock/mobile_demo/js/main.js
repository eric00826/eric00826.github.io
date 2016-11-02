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
			init();
		});
	}

	//public

	return {

	}
}

main = new main();