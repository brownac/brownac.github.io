$(function() {
  // navbar controller
  $('a[href*="#"]:not([href="#"])').click(function() {
    if( $(this).attr("href")=="#myCarousel") return;//This is the exception
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top,
        }, 1000, 'easeInOutExpo');
        return false;
      }
    }
  });

  //shows the navbar if scrolled past a certain length
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 700) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").removeClass("hide").fadeIn(1000);
        $(".nav.navbar-nav.navbar-right").removeClass("hide").fadeIn(1000);
    } else if($(".navbar").offset().top == 0) {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").addClass("hide").fadeOut(1000);
        $(".nav.navbar-nav.navbar-right").addClass("hide").fadeIn(1000);
    }
  });

  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });
})
