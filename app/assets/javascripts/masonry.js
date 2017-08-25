$(function(){
$('.grid').imagesLoaded(function(){
  $('.grid').masonry({
  	itemSelector: '.box',
    isFitWidth: true
  });
  });
});