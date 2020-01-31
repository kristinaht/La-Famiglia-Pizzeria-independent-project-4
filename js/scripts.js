//User Interface Logic
var pizza = new Pizza();

$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();

    var toppingNames = [];
   $("input:checkbox[name=select-toppings]:checked").each(function(){
      toppingName = $(this).val();
      toppingNames.push(toppingName);
      console.log(toppingNames);
   });
    var size = $("select").val();
    $("span.size-output").text(size);
    
    pizza.addTopping(toppingNames);
    console.log(pizza);
    
    // var price = calculatePrice(toppings, size);

    // var newPizza = new Pizza(toppings, size, price);
    // console.log(newPizza)
  });
});

//Business logic for Pizza constructor
function Pizza(toppings, size, price){
  this.toppings = [];
  this.size = size;
  this.price = price;
  // this.currentToppingId = 0;
}

// Pizza.prototype.calculatePrice = function(toppings, size) {
//   if(this.toppings.length >=2 && this.size === "50cm"){
//     this.price = 20;
//     return this.price;
//   }
// }

function calculatePrice(toppings, size) {
  // if(this.toppings.length >=2 && this.size === "50cm"){
    if(size === "50cm"){
    this.price = 20;
    return this.price;
    }
  }



// Pizza.prototype.assignToppingId = function(){
//   this.currentToppingId ++;
//   return this.currentToppingId;
// }


Pizza.prototype.addTopping = function(toppingNames){
  // toppings.toppingId = this.assignToppingId();
  this.toppings.push(toppingNames);
}