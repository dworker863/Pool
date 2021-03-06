$(window).on('load', function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('.scroll').removeClass('d-none');
    } else {
      $('.scroll').addClass('d-none');
    }
  });

  $(window).on('resize', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
      $('#Navbar').addClass('d-none');
    } else if (window.matchMedia('(max-width: 768px)').matches) {
      $('#Navbar').removeClass('d-none');
    }
  });

  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });

  $('.nav-item').on('click', function () {
    const th = this;
    $('.active').next('.item-active').addClass('d-none');
    $('.active').removeClass('active');
    $(th).children('.nav-link').addClass('active');
    $(th).children('.item-active').removeClass('d-none');
  });

  $('.owl-one').owlCarousel({
    loop: true,
    autoHeight: true,
    responsiveClass: true,
    margin: 30,
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

  $('.goods-type').on('click', function () {
    const th = this;
    $('.goods-type.active').removeClass('active');
    $(this).addClass('active');
  });

  $('.owl-two').owlCarousel({
    loop: true,
    autoHeight: true,
    autoWidth: false,
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
      1400: {
        items: 4,
      },
    },
  });

  $('.client-contacts').on('submit', function (event) {
    //Change
    event.preventDefault();
    $('.form-control').addClass('required');
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: '../../mail.php', //Change
      data: th.serialize(),
    }).done(function () {
      console.log(th.serialize());
      setTimeout(function () {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
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

let map;

DG.then(function () {
  map = DG.map('map', {
    center: [43.241565, 76.907719],
    zoom: 15,
  });

  DG.marker([43.241908, 76.913893]).addTo(map);
});
