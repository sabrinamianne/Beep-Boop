

//Back end logic

var ex1= ["1"]
var ex2 = ["2"]
var ex3 = ["3"]
var arrayResult = [];
var arrayResult2 = [];



function range(number) {
    for (let i = 0; i <= number; i++) {
        arrayResult.push(i);
        istr= i.toString()
        if (istr.includes(ex3)) {
         arrayResult2.push(istr)
         var nameUser= $("input#nameInput").val();
        arrayResult2[istr]=" I'm sorry, "+ nameUser.slice(0,1).toUpperCase()+nameUser.slice(1) +". I'm afraid I can't do that. "
        console.log(nameUser)
        } else if  (istr.includes(ex2)  ) {
        arrayResult2.push(istr)
        arrayResult2[istr]=" Boop! "

        } else if (istr.includes(ex1)) {
          arrayResult2.push(istr)
        arrayResult2[istr]=" Beep! "
        } else {
         arrayResult2.push(istr)
        }
        }
        return arrayResult2
        }

        //User Interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
  event.preventDefault()
var numberUser = $("input#numberInput").val();


   $("#finalResult").text(range(numberUser));
   $("#hidden").show();
   function myFunction() {
     location.reload();
   }


});
});
