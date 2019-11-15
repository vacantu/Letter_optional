const inquirer = require("inquirer");
const word = "Papalote";
const displayWord = [];
var notComplete = false;
var tries = 10;

// Letter {}; Ddefine the constructor

    Letter = {
        underChar: "_",
        guessed: false,
        processLetter: function(findLetter) {        
            if (word.indexOf(findLetter))
            {
                Letter.guessed = true;
                console.log("You guessed it!", findLetter);
            } else {
                console.log("Bad letter. Try again!", findLetter);
            }
            renderWord(findLetter,word.length);
        }
    }

// Accept input from the user
//while (tries>0) {
    console.log(tries);
    inquirer
        .prompt ([
        {
            name: "letter",
            message: "PLease enter a letter:",
        }
        ])
    .then(function(iResp) {  
        console.log(iResp.letter);
        var findLetter = iResp.letter;
        Letter.processLetter(findLetter);
    })
    tries --;
//}

function renderWord(letter,size) {
    console.log("I made it this far: ", size);
    for (var i=0; i<size; i++) {
        if (word[i] === letter) {
            displayWord.push(letter);
        } else
            displayWord.push("_");
    }   
    console.log(displayWord.join(" "));
}