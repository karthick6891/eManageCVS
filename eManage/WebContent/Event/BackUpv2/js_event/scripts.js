
// Modernizr.load loading the right scripts only if you need them
Modernizr.load([
	{
    // Let's see if we need to load selectivizr
    test : Modernizr.borderradius,
    // Modernizr.load loads selectivizr and Respond.js for IE6-8
    //nope : ['libs/selectivizr-min.js']
	}
]);

jQuery(document).ready( function($) {
var str=location.href.toLowerCase();
$(".tabs-top li a").each(function() {
if (str.indexOf(this.href.toLowerCase()) > -1) {
 $("li.highlight").removeClass("highlight");
$(this).parent().addClass("highlight");
}
 });
 })

jQuery(document).ready( function($) {
$('#mobile-menu').sidr();
});
 
jQuery(document).ready( function($) {
var stickyNavTop = $('.share-bar').offset().top;

var stickyNav = function(){
var scrollTop = $(window).scrollTop();
     
if (scrollTop > stickyNavTop) { 
    $('.share-bar').addClass('sticky');
} else {
    $('.share-bar').removeClass('sticky'); 
}
};

//stickyNav();

$(window).scroll(function() {
	//stickyNav();
});

jQuery(document).ready( function($) {
		$(".tab_content").hide();
		$("ul.tabs li:first").addClass("active").show();
		$(".tab_content:first").show();
		$("ul.tabs li").click(function() {
			$("ul.tabs li").removeClass("active");
			$(this).addClass("active");
			$(".tab_content").hide();
			var activeTab = $(this).find("a").attr("href");
			//$(activeTab).fadeIn();
			if ($.browser.msie) {$(activeTab).show();}
			else {$(activeTab).fadeIn();}
			return false;
		});
	});

});