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


	$('li').on("mouseenter", function(){
		$(this).animate({
			top: "-=40px",
		})

	});

	$('li').on("mouseleave"), function(){
		$(this).animate({
			top: "+=40px",
		})
	};
	// $('li').mouseover(function() {
	// 	$(this).animate({
	// 		top: "-=40px"
	// 	}, 400, function() {
	// 		$(this).
	// 	})
	// });
});	
