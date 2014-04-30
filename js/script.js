$(document).ready(function() {
	var navState = 0;
	$('a.navButton').click(
		function(){
			if (navState === 0) {
				$('#globalNav').slideDown(400);
				navState = 1;
			} else {
				$('#globalNav').slideUp(400);
				navState = 0;
			}
		}
	);


	$('li').hoverIntent(
		function() {
			$(this).animate({
				top: "-=50px",
			}, 300)
		}, function() {
			$(this).animate({
				top: "+=50px",
			}, 300)
		}
	);

});	
