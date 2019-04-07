

//Back end logic

var exception1= ["1"];
var exception2 = ["2"];
var exception3 = ["3"];
var arrayResult = [];
var arrayResult2 = [];



function range(number) {
    for (let i = 0; i <= number; i++) {
        arrayResult.push(i);
        iStr= i.toString();
        var nameUser= $("input#nameInput").val();
        if (nameUser === "" || number ==="") {
          alert("Please, enter a name and a number")
          break
        } if (iStr.includes(exception3)) {
          arrayResult2.push(iStr);
          arrayResult2[iStr]=" I'm sorry, "+ nameUser.slice(0,1).toUpperCase()+nameUser.slice(1) +". I'm afraid I can't do that. ";
      } else if  (iStr.includes(exception2)  ) {
          arrayResult2.push(iStr)
          arrayResult2[iStr]=" Boop! "

      } else if (iStr.includes(exception1)) {
          arrayResult2.push(iStr);
          arrayResult2[iStr]=" Beep! ";
        } else {
          arrayResult2.push(iStr);
        }
        }
        return arrayResult2;
        }

//User Interface logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
  event.preventDefault()

var numberUser = $("input#numberInput").val();

   $("#finalResult").text(range(numberUser));
   $("#hidden").show();
   $("#pictureCoyote").show();
   function myFunction() {
     location.reload();
   }


});
});
