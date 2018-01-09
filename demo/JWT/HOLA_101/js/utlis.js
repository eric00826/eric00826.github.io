/**
 *
 * @authors Eric Hsiao
 *
 */

/* utlis */

if (typeof console == "undefined") {
    window.console = {
        log: function () {}
    };
}

 // window.console = {
 //        log: function () {}
 // };

function ga_pageView(key) {
  ga('send', 'pageview', key);
  console.log("ga_pageView: " + key);
}

function ga_ButtonClick(key) {
  ga('send', 'event', 'Button', 'Click', key);
  console.log("ga_ButtonClick: " + key);
}

var isMobile = false;
var isIE = false;

utlis = function (){

	//private menbers


	//private methods
	function init () {
		console.log('all is loaded.');
	}

	//constructor

	{
    if ($('html').is('.ie6, .ie7, .ie8')) {
      isIE = true;
      // alert('.ie6, .ie7, .ie8');
    }

		$(document).ready(function() {

			if($('body').width() <= 640){
		      isMobile = true;
		  }else{
		    	isMobile = false;
		  }

			init();
		});
	}

	//public

	return {

	}
}

utlis = new utlis();