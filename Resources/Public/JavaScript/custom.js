var WinWidth;
var WinHeight;
// Window Ready
$(document).ready(function(){
  WinWidth = $(window).width();
  WinHeight = $(window).height();
  SpaceCont();
  // Responsive menu toggle
  $(".dropdown.active> .submenu").show();
  $('.dropdown>.arrow').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).closest("li.dropdown").toggleClass('active').children(".submenu").stop("true", "true").slideToggle(500);
    $(this).closest("li.dropdown").siblings().children(".submenu").stop("true", "true").slideUp();
    $(this).closest("li.dropdown").siblings().removeClass("active");
  });
  
});

$(window).resize(function(){
  WinWidth = $(window).width();
  WinHeight = $(window).height();
  SpaceCont();
});

function SpaceCont(){
  var ConOff = ($(".container").offset().left);
  $(".title-left").css({'left':"-" + ConOff + 'px','padding-left': ConOff + 15 + 'px'});
  $(".title-right").css({'right':"-" + ConOff + 'px','padding-right': ConOff + 15 + 'px'});
  
  var HeadH = $("#header").outerHeight();
  var TotHeight = WinHeight - HeadH;
  $(".min-height").css('min-height',TotHeight+'px');
}