const inquirer = require("inquirer");
const word = "Papalote";
const displayWord = [];

// Letter {}; Ddefine the constructor
Letter = {
    underChar: "_",
    guessed: false,
    processLetter: function(findLetter) {
        renderWord(word.length);
        if (word.indexOf(findLetter));
        {
            Letter.guessed = true;
            console.log("You guessed it!", findLetter);
            // DO SOMETHING
        }
    }
}

// Accept input from the user
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

function renderWord(size) {
    console.log("I made it this far: ", size);
    for (var i=0; i<size; i++) {
        displayWord.push("_");
    }   
    console.log(displayWord);
}