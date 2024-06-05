  //rellenar la segunda tabla
  function verMas(strCategory) {
    document.getElementById('table2').style.display = 'table';
    $('#body-meals').html('');
    $.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+strCategory, function(data){
      $.each(data.meals, function(i, item) {
        var filatable2 = '<tr><th scope="row">' + item.idMeal + '</th><td>' + item.strMeal + '</td><td><img src="' + item.strMealThumb + '" class="img-fluid" style="max-width: 100px"></td></tr>';
        $('#body-meals').append(filatable2);
      });
    });
  }

$(document).ready(function () {
  $('#btnCategorias').on('click', function() {
    $('#body-categorias').html('');
    $.get('https://www.themealdb.com/api/json/v1/1/categories.php', function (data) {
      $.each(data.categories, function (i, item) {
        var filatable1 = '<tr><th scope="row">' + item.idCategory + '</th><td>' + item.strCategory + '</td><td><img src="' + item.strCategoryThumb + '" class="img-fluid" style="max-width: 100px"></td><td>' + item.strCategoryDescription +'</td><td><button onclick="verMas(\''+item.strCategory+'\')"  id="'+item.idCategory+'" class="btn btn-light" style="background-color: darkorange"; "bordercolor:red"> Ver más <i class="fa-solid fa-arrow-right"></i></button></td></tr>';
        $('#body-categorias').append(filatable1);
      });
    });
  });
  // inicializando componentes
  AOS.init();
});