$(document).ready(function(){
	
	$("#logo").click(function(){
		$("html,body").animate({
			scrollTop: $("#main").offset().top + 0,
		}, {
      duration: 500,
      easing: "swing"
    });
		return false
	});
	
	$("#nav-about").click(function(){
		$("html,body").animate({
			scrollTop: $("#about").offset().top + -40,
		}, {
      duration: 500,
      easing: "swing"
    });
		return false
	});
		    
	$("#nav-work").click(function(){
		$("html,body").animate({
			/* scrollTop: $("#work").offset().top + -60, */
			scrollTop: $("#digital").offset().top + -115,
		}, {
      duration: 500,
      easing: "swing"
    });
		return false
	});
	
	$("#nav-digital").click(function(){
		$("html,body").animate({
			scrollTop: $("#digital").offset().top + -115,
		}, {
      duration: 500,
      easing: "swing"
    });
		return false
	});
	
	$("#nav-physical").click(function(){
		$("html,body").animate({
			scrollTop: $("#physical").offset().top + -115,
		}, {
      duration: 500,
      easing: "swing"
    });
		return false
	});
	
	$("#nav-s-i").click(function(){
		$("html,body").animate({
			scrollTop: $("#s-i").offset().top + -115,
		}, {
      duration: 500,
      easing: "swing"
    });
		return false
	});
	
	$("#nav-d-p").click(function(){
		$("html,body").animate({
			scrollTop: $("#d-p").offset().top + -115,
		}, {
      duration: 500,
      easing: "swing"
    });
		return false
	});
		    
});





/*
$(document).ready(function() {

    $("#main-nav li a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

});
*/