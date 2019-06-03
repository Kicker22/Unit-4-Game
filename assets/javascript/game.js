var random = Math.floor(Math.random()*101) + 19;
var gemNumber = Math.floor(Math.random() * 12) + 1;


function initGame(){
    setTargetNumber()
    addButtonValue()

}

initGame()

// generates random number for buttons
function getRandomNumber(){
    return Math.floor(Math.random() * 12) +1;
}

// sets target number and sets button numbers
function setTargetNumber(){
    // sets random number between 19-120 for target number
    $("#target").text(random);
    // sets random number between 1-12 for each button
    $(".button1").val(getRandomNumber()) ;
    $(".button2").val(getRandomNumber());
    $(".button3").val(getRandomNumber());
    $(".button4").val(getRandomNumber());
}

//function that adds the value of the button clicked to user total

function addButtonValue(){
 var userValue = $(".userTotal").text()
 var targetvalue = $("#target").text()
 console.log(buttonValue)

     $(".button1").on("click", function(){
         $(".userTotal").text()
         
     });
     $(".button2").on("click", function(){
         $(".userTotal").text()
         
     });
     $(".button3").on("click", function(){
         $(".userTotal").text()
         
     });
     $(".button4").on("click", function(e){
         $(".userTotal").text()
         
     });

}

    







