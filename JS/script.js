$(document).ready(function() {
   $('.features').waypoint(function(direction) {
       if (direction == "down") {
           $("nav").addClass("sticky-nav");
       }
       else {
           $("nav").removeClass("sticky-nav");
       }
           
       }, {
           offset: '50px;'
   });
    
    $('.features').waypoint(function(direction) {
       $(".feat-animat").addClass("animate__animated animate__fadeIn");
           
       }, {
           offset: '90px;'
   });
    
    $('#hamburger-btn').click(function() {
         $(".main-nav").slideDown(250);
         $(".menu-btn").css("display", "none");
         $(".close-btn").css("display", "inline-block");                
    });
    
    $('#close-btn').click(function() {
         $(".main-nav").slideUp(250);
         $(".menu-btn").css("display", "inline-block");
         $(".close-btn").css("display", "none");                
    });
    
    $('.how-it-works').waypoint(function(direction) {
       $(".App-Image").addClass("animate__animated animate__bounceInUp");
           
       }, {
           offset: '120px;'
   });
    
    $('.sign-up').waypoint(function(direction) {
       $(".plan").addClass("animate__animated animate__pulse");
           
       }, {
           offset: '120px;'
   });
    
    $('#how-it-works-btn').click(function() {
        $('html, body').animate({scrollTop: $('#how-it-works').offset().top}, 1000);
      });
    
     $('#cities-btn').click(function() {
        $('html, body').animate({scrollTop: $('#cities').offset().top}, 1000);
      });
    
    $('#signup-btn').click(function() {
        $('html, body').animate({scrollTop: $('#signup-form').offset().top}, 1000);
      });
    
    $('#hungry-btn').click(function() {
        $('html, body').animate({scrollTop: $('#signup-form').offset().top}, 1000);
      });
    
    $('#showmore-btn').click(function() {
        $('html, body').animate({scrollTop: $('.features').offset().top}, 1000);
      });
});
