$(document).ready(function(){
  var tabs = $('#tabs');
  $('.tabs-content > div', tabs).each(function(i){
    if ( i != 0 ) $(this).hide(0);
  });
  tabs.on('click', '.tabs-nav a', function(e){
    e.preventDefault();

    var tabId = $(this).attr('href');

    $('.tabs-nav a',tabs).removeClass();
    $(this).addClass('tab-nav__item_active');

    $('.tabs-content > div', tabs).hide(0);
    $(tabId).show();
  });
});