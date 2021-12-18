
var randomNumber = 0;
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor = 0;
var gamePattern = [];

main();

function main() {
  
  randomNumber = nextSequence();
  console.log("randomNumber: " + randomNumber);
  randomChosenColor = buttonColors[randomNumber]
  console.log("randomChosenColor: " + randomChosenColor);
  gamePattern.push(randomChosenColor);
  console.log("gamePattern pushed colors: " + gamePattern);

  flashColor(randomChosenColor);

  makeSound(randomChosenColor); // have to click on the piece to activate sound?


}


function nextSequence() {
  var randomNum = Math.random(); // get random number based on the list length
  var randomNumber = (Math.floor(randomNum * 4));
  return(randomNumber);
}

function flashColor(color) {
  console.log("color in: " + color + ".");
  buttonAnimation(color);
}

function makeSound(color) {
  var text = "sounds/" + color + ".mp3";
  var audio1 = new Audio(text);
  var resp = audio1.play();

  if (resp!== undefined) {
      resp.then(_ => {
        audio1.play(); // autoplay starts!
      }).catch(error => {
        //show error
      });
  }
  
} //end function makeSound

function buttonAnimation(color) {
  console.log("animation color: " + color);
  var activeButton = document.querySelector("." + color);
  activeButton.classList.add("pressed");
  setTimeout(function() { activeButton.classList.remove ("pressed"); },
             170);
} //end function buttonAnimation