// v. 2021.12.20a //
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

var firstTime = true;

main();

function main() {
  $(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  
  $(".btn").click(function() {
  
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
    flashColor(userChosenColour);
  
    checkAnswer(userClickedPattern.length-1);
  });
  
  function checkAnswer(currentLevel) {
  
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
      } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over @ Level " + level + ". Refresh to Restart!");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }
  }
  
  function nextSequence() {

    if (firstTime == true) { // added this for app to be used on a mobile device
      var elem = document.querySelector("#inputField");
      elem.parentNode.removeChild(elem);
        firstTime = false;
    }
  
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
  }
  
  function flashColor(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  } // end function 
  
  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }  // end function playSound()
  
  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  } // end function startOver()

}
