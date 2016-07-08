$(document).ready(function() {
  var tarea;
  var lista;
  var borrar;

//Crear tareal al presionar ENTER
  $('#input').keydown(function(event) {
    if (event.keyCode == '13' ) {
      var checkbox = '<input type="checkbox" class="checkbox">';
      borrar = '<span class="borrar"></span>';
      tarea = $('#input').val();

      $('.todo-list').append('<li class="lista">' + checkbox + tarea + borrar + '</li>');
      $('#input').val("");
    };
  });

//Estilo de la lista cuando el mouse esta dentro
  $('.todo-list').on('mouseenter', '.lista', function() {

    $(this).css('background-color', '#DDD');
    $('.borrar', this).html('X').show()
    .css({
      fontSize: '25px',
      float: 'right',
      cursor: 'default'
    });


//Estilo de la lista cuando el mouse esta fuera
  }).on('mouseleave', '.lista', function(){
    $(this).css('background-color', 'white');
    $('.borrar', this).hide();

//Borrar tarea sin presionamos la "X"
  }).on('click', '.borrar', function() {
    $(this).parent().remove();

//Cabiar Css cuando el checkbox esté seleccionado
  }).on('click', '.checkbox', function() {
    if (this.checked) {
      $(this).parent().css({
        color: 'gray',
        textDecoration: 'line-through'
      });
    }else{
      $(this).parent().css({
        color: '#666',
        textDecoration: 'none'
      });
    };
  });


});