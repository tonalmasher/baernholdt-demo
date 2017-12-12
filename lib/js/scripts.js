$(document).ready(function(){
    $("#menu-toggler").click(function(){
        $("#dropdown-menu").slideToggle("fast");
    });
  
    $(window).scroll(function() {
		$('.section-title, .card, .hide-to-slide').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1000) {
				$(this).addClass("slideUp");
			}
		});
	});
  
});

