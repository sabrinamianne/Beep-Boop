//User Interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number_user = $("input#userInput").val();

//Back end logic

var ex1= ["1"]
var ex2 = ["2"]
var ex3 = ["3"]
var numbers3 = ["0","1","2","3","4","5","6","7","8","9"]
var numbers2 = ["0","1","2","4","5","6","7","8","9"]
var numbers = ["0","1","4","5","6","7","8","9"]
var exception1 = ["Beep!","Boop!","I'm sorry, Dave. I'm afraid I can't do that."];
var arrayResult = [];
var el= "";
var empty = "";


function range(number) {
    for (let i = 0; i <= number; i++) {
        arrayResult.push(i);
        }
        el= arrayResult.toString()
        for (let elt of el) {
         if (ex1.includes(elt) && numbers.includes(elt)) {
         el= el.replace(elt, "Beep!")
         } if (ex2.includes(elt) && numbers2.includes(elt) )  {
         el = el.replace(elt, "Boop!")
   		   } if (ex3.includes(elt) && numbers3.includes(elt))  {
         el = el.replace(ex3, "I'm sorry, Dave. I'm afraid I can't do that.")

         }
        }

        return el;
   }
   $("#finalResult").text(range(number_user));
   $("#hidden").show();


});
});
