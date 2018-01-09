/**
 *
 * @authors Eric Hsiao
 *
 */

main = function (){

	//private menbers
	var iMenuOpen = false;

	//private methods
	function init () {
		console.log('main is loaded.');
		loadHeader();
	}

	function loadHeader() {
		$( "#header" ).load( "header.html", function() {

			console.log('header.html loaded. ' + config.nav);

			$("#header").find('.menu-nav-' + config.nav).addClass('nav-active');

			if(isMobile){
				$('.menu-btn').click(function(event) {
					if(!iMenuOpen){
						iMenuOpen = true;
						$('.menu-wrapper').css({'display':'block'});
						$('.menu-btn').css({'background-position':'0 100%'});

					}else{
						iMenuOpen = false;
						$('.menu-wrapper').css({'display':'none'});
						$('.menu-btn').css({'background-position':'0 0%'});
					}

					ga_ButtonClick('bt_m_menu');
				});
			}
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

	}
}

main = new main();