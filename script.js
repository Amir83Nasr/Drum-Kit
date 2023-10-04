//————————————–––––––––––––––(Selecting the buttons and key)-----------------

// for (var i = 0; i < 7; i++) document.querySelectorAll("button")[i].addEventListener("click", handleClick);

// var drumButtonCount = document.querySelectorAll(".drum").length;
// for (var i = 0; i < drumButtonCount; i++) document.querySelectorAll("button")[i].addEventListener("click", handleClick);

//! for...of
for (var button of document.querySelectorAll(".drum")) button.addEventListener("click", handleClick);

document.addEventListener("keypress", handlePress);

//————————————–––––––––––––––(Function)------------------------------

function handleClick() {
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case 'a':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 's':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 'd':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'f':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}

//————————————–––––––––––––––----------------------------------------

function handlePress(event){
    var pressInnerHTML = event.key;

    switch (pressInnerHTML) {
        case 'a':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 's':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 'd':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'f':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(pressInnerHTML);
            console.log(event);
            break;
    }
}

//————————————–––––––––––––––----------------------------------------