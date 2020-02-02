//Business logic for Pizza constructor
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculatePrice = function(toppings, size) {
 basePrice = 10;
  if(size === "1" && this.toppings.length >2){
    basePrice +=2;
    return basePrice;
  }else if(size === "2" && this.toppings.length <=2){
    basePrice +=3;
    return basePrice;
  }else if(size === "2" && this.toppings.length >2){
    basePrice +=4;
    return basePrice;
  }else if(size === "3" && this.toppings.length === 1){
    basePrice +=5;
    return basePrice;
  }else if(size === "3" && this.toppings.length >1){
    basePrice += 10;
    return basePrice;
  }else{
    return basePrice;
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


