//Business logic for Pizza constructor
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculatePrice = function(toppings, size) {
 basePrice = 10;
  if(size === "small" && this.toppings.length >2){
    basePrice +=2;
    return basePrice;
  }else if(size === "medium" && this.toppings.length <=2){
    basePrice +=3;
    return basePrice;
  }else if(size === "medium" && this.toppings.length >2){
    basePrice +=4;
    return basePrice;
  }else if(size === "large" && this.toppings.length === 1){
    basePrice +=5;
    return basePrice;
  }else if(size === "large" && this.toppings.length >1){
    basePrice += 10;
    return basePrice;
  }else{
    return basePrice;
  }
}

//User Interface logic
 var pizza;

$(document).ready(function(){    
  $("button.btn-block").click(function(){
    $("div.form-page").show();

    $("form").submit(function(){
    event.preventDefault();
    $("div.output").show();
    var toppingNames = [];
    $("input:checkbox[name=select-toppings]:checked").each(function(){
      toppingName = $(this).val();
      toppingNames.push(toppingName);
    });
    $("span.toppings-output").text(toppingNames);
    var size = $("select").val();
    $("span.size-output").text(size);
    
    pizza = new Pizza(toppingNames, size);
    var price = pizza.calculatePrice(toppingNames, size);
    $("span.price-output").text(price);
  });
  $("div.intro-page").hide();
 });
});


