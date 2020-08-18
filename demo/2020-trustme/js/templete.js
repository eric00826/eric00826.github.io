/**
 *
 * @authors Eric Hsiao
 *
 */

templete = function (){

	//private menbers


	//private methods
	function init () {
    console.log('templete is loaded.');
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

var templete = new templete();
