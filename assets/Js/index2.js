
$(window).on('scroll', () => {
  let michelDucaroytHt = $('.michelDucaroy').offset().top - 450;
  if (scrollY > michelDucaroytHt) {
    $('.philosophy').addClass('show');
    $('.michelDucaroy').addClass('show');

  } else {
    $('.philosophy').removeClass('show');
    $('.michelDucaroy').removeClass('show');
  }
})
$(window).on('scroll', () => {
  let philosophytHt = $('.philosophy').offset().top + 350;
  if (scrollY > philosophytHt) {
    $('.philosophy').addClass('show');

  } else {
    $('.philosophy').removeClass('show');
  }
})