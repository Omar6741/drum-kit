let drumArray = document.querySelectorAll(".drum");

for (let drum of drumArray) {
  drum.addEventListener("click", function () {
    let drumInnerHTML = this.innerHTML;
    makeSound(drumInnerHTML);
    buttonAnimation(drumInnerHTML);
});
}

document.addEventListener("keydown", function (event) {
  makeSound (event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "z":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "x":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "c":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "v":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "b":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "n":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "m":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
  }
};

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);
}
