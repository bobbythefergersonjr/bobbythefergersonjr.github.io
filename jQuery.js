$(document).ready(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() >= 100) {
    		$('#foreground').addClass('hold');

    		
    		/*
    		if ($(document).scrollTop() >= 200) {
    			$('.left img').animate({left: '-400px', opacity: '0'});
	    		$('.right img').animate({right: '-400px', opacity: '0'});
    		}*/
  	 	}
    	else {
    		$('#foreground').removeClass('hold');
    	}

    	if ($(document).scrollTop() >= 150) {
	    		$('.left img').animate({left: '0px', opacity: '1'});
	    		$('.right img').animate({right: '0px', opacity: '1'});
    	} 
    });
});