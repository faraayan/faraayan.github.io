var about = "#F3F8FC",
		experience = "#FCF3F3",
		projects = "#F3FCF9",
		skills = "#FCF9F3",
		contact = "#F5F3FC";

$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#about").position().top) {
				$('body').css('background', $("#about").attr("data-color"));
				$('nav ul').css('background', $("#about").attr("data-color"));

		};
		if ($(document).scrollTop() > $("#experience-section").position().top-100) {
				$('body').css('background', $("#experience-section").attr("data-color"));
				$('nav ul').css('background', $("#experience-section").attr("data-color"));
		};
		if ($(document).scrollTop() > $("#projects-section").position().top-100) {

				$('body').css('background', $("#projects-section").attr("data-color"));
				$('nav ul').css('background', $("#projects-section").attr("data-color"));;
		};
		if ($(document).scrollTop() > $("#skills-section").position().top-100) {

				$('body').css('background', $("#skills-section").attr("data-color"));
				$('nav ul').css('background', $("#skills-section").attr("data-color"));

		};
		if ($(document).scrollTop() >= $("#contact-section").position().top-100) {
				$('body').css('background', $("#contact-section").attr("data-color"));
				$('nav ul').css('background', $("#contact-section").attr("data-color"));
		};
});

// Cache selectors
var lastId,
 topMenu = $("#main-nav"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});
