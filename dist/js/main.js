var headerMenu = document.getElementsByClassName('site-nav--item');
headerMenu[0].classList.add('active');

$('.site-nav--item').on('click', function(){
  if (! $(this).hasClass('active') ) {
    $(this).addClass('active').siblings().removeClass('active');
    $(this).children('a').css('color: white');
  }
})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBoZWFkZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l0ZS1uYXYtLWl0ZW0nKTtcbmhlYWRlck1lbnVbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiQoJy5zaXRlLW5hdi0taXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGlmICghICQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuY2hpbGRyZW4oJ2EnKS5jc3MoJ2NvbG9yOiB3aGl0ZScpO1xuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
