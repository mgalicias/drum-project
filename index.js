class Drum {
    constructor() {
        this.tom1 = function () {
            return new Audio("sounds/tom-1.mp3").play();
        };
        this.tom2 = function () {
            return new Audio("sounds/tom-2.mp3").play();
        };
        this.tom3 = function () {
            return new Audio("sounds/tom-3.mp3").play();
        };
        this.tom4 = function () {
            return new Audio("sounds/tom-4.mp3").play();
        };
        this.snare = function () {
            return new Audio("sounds/snare.mp3").play();
        };
        this.crash = function () {
            return new Audio("sounds/crash.mp3").play();
        };
        this.kick = function () {
            return new Audio("sounds/kick-bass.mp3").play();
        };

        this.playDrum = function(sound){
            console.log(`You played ${sound}`);
            switch ( sound ) {
                case 'w':
                    this.tom1();
                    break;
                case 'a':
                    this.tom2();
                    break;
                case 's':
                    this.tom3();
                    break;
                case 'd':
                    this.tom4();
                    break;
                case 'j':
                    this.snare();
                    break;
                case 'k':
                    this.crash();
                    break;
                case 'l':
                    this.kick();
                    break;
            }
        };

        this.buttonAnimation = function ( currentKey ){
           var activeButton = document.querySelector(`.${currentKey}`);
           activeButton.classList.add("pressed");
           console.log(`Testing the pressed key ${activeButton}`);
           setTimeout(function(){
               activeButton.classList.remove('pressed');
           },200);
        };
    }
}

var drumButtonsCount = document.querySelectorAll(".drum").length;

for ( var i = 0; i < drumButtonsCount; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        var drum = new Drum();
        drum.playDrum(buttonInnerHTML);
        drum.buttonAnimation(buttonInnerHTML);
    });    
}

document.addEventListener("keypress",function(event){
    
    var drum = new Drum();
    drum.playDrum(event.key);
    drum.buttonAnimation(event.key);

});