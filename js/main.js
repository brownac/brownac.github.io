$(function() {
  // navbar controller
  $('a[href*="#"]:not([href="#"])').click(function() {
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
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });
})
