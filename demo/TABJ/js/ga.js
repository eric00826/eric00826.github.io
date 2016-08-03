 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 
  ga('create', 'UA-81846449-1', 'auto');
  ga('send', 'pageview');

function trackBtn(BtnCode){
	 ga('send', 'event', 'button', 'click', BtnCode);
}
function trackPrv(page){
 if(page!=''){
	ga('send', 'pageview', {'page': page});
 }
}
$(document).ready(function(){
 	$('a').click(function(e){
		var BtnCode = $(this).attr('data-ga');
		var target = $(this).attr('target');
		var href = $(this).attr('href');
		if(BtnCode!=undefined && target!='_blank'){
			e.preventDefault();
			trackBtn(BtnCode);
            if(href!='#' || href!='javascript:'){
			 setTimeout(function(){location.href=href;},600);
            }
		}
		else if(BtnCode!=undefined)
			trackBtn(BtnCode);
	});
});