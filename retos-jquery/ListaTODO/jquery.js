$(document).ready(function() {
  $('#input').keydown(function(event) {
    if (event.keyCode == '13' ) {
      var tarea = $('#input').val();
      $('.todo-list').append('<li>' + tarea + '</li>');
    };
  });
});