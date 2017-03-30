$(document).ready(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() >= 100) {
    		$('#title-pannel').addClass('hold');
  	 	}
    	else {
    		$('#title-pannel').removeClass('hold');
    	}

    	if ($(document).scrollTop() >= 150) {
	    	$('.left img').animate({left: '0px', opacity: '1'});
	    	$('.right img').animate({right: '0px', opacity: '1'});
    	} 

        if ($(document).scrollTop() >= 700) {
            $('#screen-pannel').addClass('hold');
        } 
        else {
            $('#screen-pannel').removeClass('hold');
        }
    });
});