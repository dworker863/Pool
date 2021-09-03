$(window).on('load', function () {
  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });

  $('.nav-item').on('click', function () {
    const th = this;
    $('.active').removeClass('active');
    $(th).children('.nav-link').addClass('active');
  });
});
