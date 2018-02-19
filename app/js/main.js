var headerMenu = document.getElementsByClassName('site-nav--item');
headerMenu[0].classList.add('active');

$('.site-nav--item').on('click', function(){
  if (! $(this).hasClass('active') ) {
    $(this).addClass('active').siblings().removeClass('active');
    $(this).children('a').css('color: white');
  }
})
