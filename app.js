
var randomNumber = 0;
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor = 0;
var gamePattern = [];
var started = false;
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().

main();

function main() {
  //1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
  $(document).keypress(function() {
    console.log("main()");
    if (!started) {

      //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
}


function nextSequence() {

  console.log("main()");

  var randomNum = Math.random(); // get random number based on the list length
  var randomNumber = (Math.floor(randomNum * 4));
  console.log("randomNumber: " + randomNumber);

  randomChosenColor = buttonColors[randomNumber]
  console.log("randomChosenColor: " + randomChosenColor);

  gamePattern.push(randomChosenColor);
  console.log("gamePattern pushed colors: " + gamePattern);

  flashColor(randomChosenColor);

  makeSound(randomChosenColor); // have to click on the piece to activate sound?

}

function flashColor(color) {
  console.log("color in: " + color + ".");
  buttonAnimation(color);
}

function makeSound(color) {

  var audio = new Audio("sounds/" + color + ".mp3");
  audio.load();
  audio.play();
} //end function makeSound

function buttonAnimation(color) {
  console.log("animation color: " + color);
  var activeButton = document.querySelector("." + color);
  activeButton.classList.add("pressed");
  setTimeout(function() { activeButton.classList.remove ("pressed"); },
             170);
} //end function buttonAnimation