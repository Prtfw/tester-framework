var g = G$("J", "Doe")

// console.log(g) // check if the custom greeting item is created



$( "#lang" ).click(function() {
  $( "#lang" ).change(function(){
      
      console.log($('#lang :selected').text())
      g.setLang($('#lang :selected').text()).greet(true).log(true)
      g.shoGreetr('#greeting',false)
  });
});

$('#login').click(function(){
    g.shoLogMe('#greeting')
})