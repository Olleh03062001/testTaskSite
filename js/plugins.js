

//при нажатии на миниатюру
$('#thumb img').click(function(){
  //удаляем класс active с другой миниатюры
  $('#thumb img').removeClass("active");
  //добавляем класс active к миниатюре на которую мы нажали
  $(this).addClass("active");
  //получаем у неё значение атрибута src и присваиваем его атрибуту src с id="preview"
  $("#preview").attr("src",$(this).attr("src"));
});



/*
// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
*/
