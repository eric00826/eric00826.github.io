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

		$(":button").click(function() {
      html2canvas($("#content")[0], {
        width:1200,
        height:800,
        onrendered: function(canvas) {

          var ctx=canvas.getContext("2d");
          ctx.webkitImageSmoothingEnabled = false;
          ctx.mozImageSmoothingEnabled = false;
          ctx.imageSmoothingEnabled = false;
          var canvasImg = canvas.toDataURL('image/png',1.0);
          $('#canvasImg').html('<img src="'+canvasImg+'" alt="">');
        }
      });
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