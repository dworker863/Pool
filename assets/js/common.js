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
      450: {
        items: 2,
      },
      880: {
        items: 3,
      },
      1385: {
        autoWidth: true,
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

const getRange = () => {
  let multiplier = 2;
  let value = document.querySelector('#myRange').value;

  if (value >= 5 && value < 10) {
    multiplier = 3;
  } else if (value >= 10 && value < 15) {
    multiplier = 4;
  } else if (value >= 15 && value <= 20) {
    multiplier = 5;
  }

  document.querySelector('.range-value').innerHTML = `${value}x${multiplier}m`;
};
