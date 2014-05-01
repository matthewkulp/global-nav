$(document).ready(function() {
	$.fn.rotate = function(startDeg, endDeg, step, elt) {
	    var _endDeg = (!endDeg)?360:endDeg;
	    var _step = (!step)?1:step;
	    var _startDeg = (!startDeg)?0:startDeg;
	    var _elt = (!elt)?$(this):elt;
	
	    var deg = _startDeg + _step;
	
	    var browser_prefixes = ['-webkit', '-moz', '-o', '-ms'];
	    for (var i=0, l=browser_prefixes.length; i<l; i++) {
	      var pfx = browser_prefixes[i]; 
	      _elt.css(pfx+'-transform', 'rotate('+deg+'deg)');
	    }
	
	    if (deg < _endDeg) {
	      setTimeout(function() {
	          $(this).rotate(deg, _endDeg, _step, _elt); //recursive call
	      }, 5);
	    }
	};


	var navState = 0;
	$('a.navButton').click(
		function(){
			if (navState === 0) {
				$('#globalNav').slideDown(400);
				$('a.navButton').rotate(0, 45, 5);
				navState = 1;
			} else {
				$('#globalNav').slideUp(400);
				$('a.navButton').rotate(45, 90, 5);
				navState = 0;
			}
		}
	);


	$('li').hoverIntent(
		function() {
			$(this).animate({
				top: "-=38px",
			}, 300)
		}, function() {
			$(this).animate({
				top: "+=38px",
			}, 300)
		}
	);

});	
