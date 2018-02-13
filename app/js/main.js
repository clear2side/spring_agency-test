var headerMenu = document.getElementsByClassName('header__menu--item');
headerMenu[0].classList.add('active');

$('.header__menu--item').on('click', function(){
  if (! $(this).hasClass('active') ) {
    $(this).addClass('active').siblings().removeClass('active')
  }
})
