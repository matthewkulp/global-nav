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


	$('li').hover(
		function() {
			$(this).animate({
				top: "-=40px",
			}, 100)
		}, function() {
			$(this).animate({
				top: "+=40px",
			}, 100)
		}
	);

});	
