//Business logic for Pizza constructor
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculatePrice = function(toppings, size) {
  if(size === "3" && this.toppings.length >2){
  this.price = 20;
  return this.price;
  }else if(size === "1" && this.toppings.length === 1){
    this.price = 10;
    return this.price;
  }
}

//User Interface logic
 var pizza;

$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();

    var toppingNames = [];
    $("input:checkbox[name=select-toppings]:checked").each(function(){
      toppingName = $(this).val();
      toppingNames.push(toppingName);
      console.log(toppingNames);
    });
    $("span.toppings-output").text(toppingNames);
    
    var size = $("select").val();
    $("span.size-output").text(size);
    
    pizza = new Pizza(toppingNames, size);
    console.log(pizza);

    var price = pizza.calculatePrice(toppingNames, size);
    console.log(price);
    $("span.price-output").text(price);
  });
});


