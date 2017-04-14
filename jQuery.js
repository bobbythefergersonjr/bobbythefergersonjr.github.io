$(document).ready(function() {
    var view_width = $(window).width();
    var view_height = $(window).height();

	$(window).scroll(function() {
		if($(document).scrollTop() >= 100) {
    		$('#title-pannel').addClass('hold');
  	 	}
    	else {
    		$('#title-pannel').removeClass('hold');
    	}

    	if ($(document).scrollTop() >= 150) {
	    	$('#left').animate({left: '0px', opacity: '1'});
	    	$('#right').animate({right: '0px', opacity: '1'});
    	} 

        if ($(document).scrollTop() >= 700) {
            $('#screen-pannel').css({"position": "fixed", "paddingTop": "100px"});
            if ($(document).scrollTop() >= 2.5*view_height) {
                $('#screen-pannel').css({"position": "absolute", "paddingTop": "calc(250vh + 100px)"});
            }
        } 
        else {
            $('#screen-pannel').css({"position": "absolute", "paddingTop": "800px"});
        }
        
        if ($(document).scrollTop() >= 3*view_height) {
            $('#pic-1').css("display", "none");
            $('#pic-2').css("display", "block");
        }
        else {
             $('#pic-1').css("display", "block");
            $('#pic-2').css("display", "none");
        }

        if ($(document).scrollTop() >= 3.5*view_height) {
            $('#strap-pannel').css({"position": "fixed", "paddingTop": "100px"});
            /*
            if ($(document).scrollTop() >= 2.5*view_height) {
                $('#screen-pannel').css({"position": "absolute", "paddingTop": "calc(250vh + 100px)"});
            }*/
        } 
        else {
            $('#strap-pannel').css({"position": "absolute", "paddingTop": "calc(350vh + 100px)"});
        }

    });
});