//User Interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number_user = $("input#userInput").val();

//Back end logic
//basic logic
var number = 200
function range(start, end) {
    var arrayResult = [];
    for (let i = start; i <= end; i++) {
        arrayResult.push(i);
    }
    return arrayResult;
}

console.log(range(0,number))

//Back end logic


var ex = [1,2,3]
var exception1 = ["Beep!","Boop!","I'm sorry, Dave. I'm afraid I can't do that."];
var arrayResult = [];


function range(start, end) {
    for (let i = start; i <= end; i++) {
        arrayResult.push(i);
        }
        for (let elt of arrayResult) {
         console.log(elt)
         elt2 = elt.slice(0,-1)
         if (ex.includes(elt2)) {
   		 	 var indexnumberexc= ex.indexOf(elt)
       	 var replaceSentence = exception1[indexnumberexc]
         arrayResult[elt] = replaceSentence
         }
        }


        return arrayResult;
        }
  /*   for (let elt of arrayResult) {
      if (arrayResult.includes(ex)){

    }
    }  */


console.log(range(6,13))
