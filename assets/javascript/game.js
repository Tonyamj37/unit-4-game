// Pseudo coding 

// A game with 4 crystals and random result
// Every crystal needs to have a random number between (1-...)
// When clicking any crystal, it should be adding with the previous result
// Until it equals the random result
// If it is greatter than the random result, we decrementt a lost counter
// If it is equal, then we increment a win counter
// A new random number should be generated every single time we win or lose
// to those 4 crystals


//app.js

var random_result;
var win = 0; // Undefined
var lost = 0; // Undefined
var previous = 0;


// Setters (setting values for attribute)
// Getters(how you get the class value)
// $(".crystal").atttr('class', 'red');
// Start from 0-99

// Create a function
var startNewGame = function () {
// Empty the crystal
    $("crystals").empty();
// Array for images
var images = [
    'assets/images/crystal1.jpeg', 
    'assets/images/crystal2.png', 
    'assets/images/crystal3.png', 
    'assets/images/crystal4.jpeg'];
// Generate a new result 
random_result = Math.floor(Math.random() * 69) + 30;
// Add to the DOM
$("#result").html('Random Result: ' + random_result);
// Loop four times
for(var i = 0; i < 4; i++){
    var image = $("<img>")
    image.attr({
        "src": images[i]
    })
// Generating a random number
var random = Math.floor(Math.random() * 11) + 1;
console.log(random);
// Create div for random number
var crystal = $("<div>")
    crystal.attr({
        "class": 'crystal',
        "data-random": random
        });
// Add to the DOM
    //crystal.html(random);
crystal.append(image);
$(".crystals").append(crystal);

        }
    $("#previous").html("Total Score: " + previous); 
    }
    
    startNewGame();


// Event get the cyrstal we clicked on to work
$(document).on('click', ".crystal", function() {
    
        
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous); 
        console.log(previous)

    if(previous > random_result){
        lost++;

    $("#lost").html("You Lost: " + lost);
        console.log("You lose!!")

    previous = 0;
    
    $(".crystals").clear();
    startNewGame();
        }
       

    else if(previous === random_result){
        win++;

    $("#win").html("You Won: " + win);
        console.log("You win!!")
    
    $(".crystals").clear();
    previous = 0;
    startNewGame();
        }
        
        
        //result += num + 5;
        //console.log(num '+' result)

    });