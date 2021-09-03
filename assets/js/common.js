$(window).on('load', function () {
  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });

  $('.nav-item').on('click', function () {
    const th = this;
    $('.active').removeClass('active');
    $(th).children('.nav-link').addClass('active');
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    autoHeight: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 4,
        loop: false,
      },
    },
  });

  $('.owl-next').on('click', function () {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
  $('.owl-prev').on('click', function () {
    $('.owl-carousel').trigger('prev.owl.carousel', [300]);
  });
});
