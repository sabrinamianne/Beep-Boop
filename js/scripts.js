

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
        arrayResult2[istr]=" I'm sorry, Dave. I'm afraid I can't do that. "
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

         var number_user = $("input#userInput").val();

   $("#finalResult").text(range(number_user));
   $("#hidden").show();
   function myFunction() {
     location.reload();
   }


});
});
