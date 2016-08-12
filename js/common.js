$(document).ready(function(){
  var tabs = $('#tabs');
  $('.tabs-content > div', tabs).each(function(i){
    if ( i != 0 ) $(this).hide(0);
  });
  tabs.on('click', '.tabs-nav a', function(e){
    e.preventDefault();

    var tabId = $(this).attr('href');

    $('.tabs-nav a',tabs).removeClass('tab-link_active');
    $(this).addClass('tab-link_active');

    $('.tabs-content > div', tabs).hide(0);
    $(tabId).show();
  });

  $(document).ready(function(){
    $('#slider').bxSlider({
      controls: false,
      slideWidth: 800,
      minSlides: 3,
      maxSlides: 3,
      moveSlides: 1,
      slideMargin: 10
    });
  });
});