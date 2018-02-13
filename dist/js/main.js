var headerMenu = document.getElementsByClassName('header__menu--item');
headerMenu[0].classList.add('active');

$('.header__menu--item').on('click', function(){
  if (! $(this).hasClass('active') ) {
    $(this).addClass('active').siblings().removeClass('active')
  }
})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaGVhZGVyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbWVudS0taXRlbScpO1xyXG5oZWFkZXJNZW51WzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuJCgnLmhlYWRlcl9fbWVudS0taXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgaWYgKCEgJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgKSB7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gIH1cclxufSlcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
