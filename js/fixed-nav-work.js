$(function(){

	$(document).scroll(function(){
		var y = $(document).scrollTop() //, get page y value			    	
		if(y >= 1043) {
			$("#work").css({"position":"fixed", "top": "60px", "left": "0", "margin-top": "0"});
			$("#digital").css("margin-top","50px");				    
		} else {
			$("#work").css({"position": "relative","top": "0px", "margin-top": "0px"});
			$("#digital").css("margin-top","0px");
		}
	});    
});