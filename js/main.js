$(function () {
	$(window).scroll(function() {
	    $('#dream .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("rotateIn");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.opportunities').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("rotateIn");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('#ticket .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.credit-new').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+702) {
	            $(this).addClass("fadeInUp");
	        }
	        else {$(this).removeClass("fadeInUp");}
	    });
	});
})