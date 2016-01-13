$(document).ready(function(){
	$('.img-zoom').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });
    
	$('li.hideNav a').on('click', function(e){
		e.preventDefault();
		$('ul.nav').slideUp("fast", function(){
			$('ul.altNav').fadeIn(300);
		});
		
	});
	$('li.showNav a').on('click', function(e){
		e.preventDefault();
		$('ul.altNav').fadeOut(100, function(){
			$('ul.nav').slideDown("fast");
		});
		
		
	});
	$('.workTab').on('click', function(e) {
		e.preventDefault();
		
		$('.projectTab').slideDown("slow");
		$('html, body').animate({
	        scrollTop: $(".projectTab").offset().top - 100,
	    }, 1400);
	});
	$('#contact').submit(function(e){
		$("#submitBtn").attr('value','done!');
		$("#submitBtn").css({'background':'#2E6269'});
		e.preventDefault();

	});

	$('#homeNav').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
	        scrollTop: $(".splashTab").offset().top,
	    }, 1200);
	});
	$('#projectsNav').on('click', function(e) {
		e.preventDefault();
		$('.workTab').trigger('click');
		
	});
	$('#aboutNav').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
	        scrollTop: $(".aboutTab").offset().top,
	    }, 1200);
	});
	$('#contactNav').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
	        scrollTop: $(".contactTab").offset().top,
	    }, 1200);
	});

	$('.closer').on('click', function(e) {
		event.preventDefault();
		var test = $(this).parent().parent();
		
		test.removeClass('overlay-open');
		$('body').removeClass('overlay-view');
	});

	$('.overlay-trigger').on('click', function(event) {
        event.preventDefault();
 
        var overlay = $(this).data('overlay');
 
        if (!overlay) {
            return;
        }

        var id = '#' + overlay;
 
        $(id).addClass('overlay-open');
        $('body').addClass('overlay-view');
 
        $(id).on('click', function(event) {
            if (event.target.id == overlay) {
                $(id).removeClass('overlay-open');
                $('body').removeClass('overlay-view');
            }
        });
    });
});
