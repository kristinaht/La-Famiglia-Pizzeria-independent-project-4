//User Interface Logic
$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();
    var size = $("select").val();
    $("span.size-output").text(size);
    var toppings = [];
    $("input:checkbox[name=select-toppings]:checked").each(function(){
      var topping = $(this).val();
      toppings.push(topping);
      return toppings;
    });
    console.log(toppings);
  });
});

//Business logic for Pizza constructor
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  // this.currentToppingId = 0;
}

// Pizza.prototype.addTopping = function(){
//   toppings.toppingId = this.assignToppingId();
//   this.toppings.push(topping);
// }

// Pizza.prototype.assignToppingId = function(){
//   this.currentToppingId ++;
//   return this.currentToppingId;
// }


