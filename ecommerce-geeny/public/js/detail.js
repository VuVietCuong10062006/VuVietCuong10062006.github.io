
 $('.details-preview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.details-thumb'
  });

  $('.details-thumb').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.details-preview',
    focusOnSelect: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa          fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });