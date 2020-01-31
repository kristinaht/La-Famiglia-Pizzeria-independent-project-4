//User Interface Logic
$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();
    var size = $("select").val();
    $("span.size-output").text(size);
  })
});