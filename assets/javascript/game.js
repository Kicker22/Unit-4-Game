var random = Math.floor(Math.random()*101) + 19;
var buttonValue = [];
var wins = 0;
var loses = 0;

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
    $(".button1").val(getRandomNumber());
    $(".button2").val(getRandomNumber());
    $(".button3").val(getRandomNumber());
    $(".button4").val(getRandomNumber());
}

//function that adds the value of the button clicked to user total

// I actually wrote this myself!! I did have to look up a Way to convert The strings in my array to numbers.. wich led me to the map()method
function addButtonValue(){
    $(".btn").on("click", function(){
        buttonValue.push(this.value)

        // newButtonValue Converts my buttonValue array into numbers instead of string values
       var newButtonValue = buttonValue.map(Number)
       var sum = 0;

        // this for loop adds all of the numbers in my array together as each button is clicked
        for(i = 0; i < newButtonValue.length ; i++){
            sum += newButtonValue[i];
            console.log(sum)
        }

        // this sets the html of userTotal to the sum of my array
        $(".userTotal").html(sum)

        var a =  parseInt($("#target").text())

        //if statement that checks if user wins or loses;
        if(sum > a){
            alert("you lost")
            // losses ++
            initGame()
        }else if(sum == a){
            alert("you Win!")
            // wins++
            initGame()
        }
    });
    
}

       
        
        









