var headerMenu = document.getElementsByClassName('header__menu--item');
headerMenu[0].classList.add('active');

$('.header__menu--item').on('click', function(){
  if (! $(this).hasClass('active') ) {
    $(this).addClass('active').siblings().removeClass('active')
  }
})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaGVhZGVyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbWVudS0taXRlbScpO1xuaGVhZGVyTWVudVswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuJCgnLmhlYWRlcl9fbWVudS0taXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGlmICghICQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gIH1cbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
