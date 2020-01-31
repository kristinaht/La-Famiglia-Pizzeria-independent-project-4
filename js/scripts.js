//User Interface Logic
$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();
    var size = $("select").val();
    $("span.size-output").text(size);
    $("input:checkbox[name=select-toppings]:checked").each(function(){
      var toppings = $(this).val();
      $("span.toppings-output").append(toppings + " ");
    });
  });
});

//Business logic for Pizza constructor
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

//Business logic for pizza objects
