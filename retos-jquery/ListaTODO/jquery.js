$(document).ready(function() {
  var tarea;
  var lista;

  $('#input').keydown(function(event) {
    if (event.keyCode == '13' ) {
      var checkbox = '<input type="checkbox">';
      var borrar = '<span class="equis">X</span>'
      tarea = $('#input').val();

      $('.todo-list').append('<div class="lista">' + checkbox + tarea + borrar + '</div>');
      $('#input').val("");
      $('span').hide();
    };
  });

  $('.todo-list').on('mouseenter', '.lista', function() {
    $(this).css('background-color', '#DDD');
    $('.equis').show();

  }).on('mouseleave', '.lista', function(){
    $(this).css('background-color', 'white');
    $(this).has('.equis').hide('1000');
  });

});