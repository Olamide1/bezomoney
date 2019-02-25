var i = 0;
const words = [
  "Have access to capital,",
  "from people that you know ",
  "Build wealth the African way. ",
  "with trusted associates "
];
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      document.getElementById("demo").innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, speed);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById("demo").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typeWriter();
      return false;
    }
    timer = setTimeout(loopDeleting, 150);
  };
  loopDeleting();
}

typeWriter();
