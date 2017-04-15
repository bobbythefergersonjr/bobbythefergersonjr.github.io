$(document).ready(function() {
    var view_width = $(window).width();
    var view_height = $(window).height();
    var doc_width = $(document).width();

    var screen_width = 577;
    var joy_width    = 150;
    var con_width    = 13;

    var s_f; //Total alocatd space
    var s_t; //Space taken up by joycon

    s_f = (doc_width - screen_width)/2;
    s_t = joy_width - con_width;

    var dist = ((s_f - s_t)/doc_width)*100;

    $('#left').css("marginLeft", dist + "%");
    $('#right').css("marginRight", dist + "%");

	$(window).scroll(function() {
        if($(document).scrollTop() >= 0.45*view_height) {
            $('#header').addClass('hold');
        }
        else {
            $('#header').removeClass('hold');
        }

        if($(document).scrollTop() >= 0.2*view_height) {
            $('#left').css("display", "block");
            $('#right').css("display", "block");
        }
        else {
            $('#left').css("display", "none");
            $('#right').css("display", "none");
        }

        if($(document).scrollTop() >= 1.4*view_height) {
            $('#screen').addClass('hold');
        }
        else {
            $('#screen').removeClass('hold');
        }

        if($(document).scrollTop() >= 2.4*view_height) {
            $('#left').css("display", "none");
            $('#right').css("display", "none");
            $('#screen').css("display", "none");
        }
        else {
            $('#left').css("display", "block");
            $('#right').css("display", "block");
            $('#screen').css("display", "block");
        }
    });
});