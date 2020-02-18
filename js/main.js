//при нажатии на миниатюру
$('#thumb img').click(function(){
  //удаляем класс active с другой миниатюры
  $('#thumb img').removeClass("active");
  //добавляем класс active к миниатюре на которую мы нажали
  $(this).addClass("active");
  //получаем у неё значение атрибута src и присваиваем его атрибуту src с id="preview"
  $("#preview").attr("src",$(this).attr("src"));
});
