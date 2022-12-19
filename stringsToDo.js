
// Remove the Blanks:
const phrase = "Hack the planet!";
var emptySpaces = phrase.split(" ");
var letters = phrase.split('')
var together = emptySpaces.join("");
console.log({before:phrase});
console.log({after:emptySpaces});
console.log({afterwards: letters})
console.log({answer: together});

// Get Digits: YIKES
function onlyNums(string){
    let sum = ""
    
    // for each character in the string we loop through
    for(let x in string){
        // if it is a number, then console log the number otherwise move on
        if(!isNaN(string[x])){
            console.log(string[x])
            // our new variable will push to our empty string a number once it is found in the provided argument.
            sum += string[x]
        }
    }
    // return the new string and converts it now to a number.
    // console.log(Number(sum))
    return Number(sum)
}
console.log(onlyNums("h32e4l5l6o7b8a9by"));

// Acronym

function Acronym(string){
    // let abbreviated = ""
    let abbreviated = string.split(" ")
    var upperCase = ""
    for (let x in abbreviated){
        // x[0].toUpperCase()
        // forEach(abbreviated[x][0]){
        // }
        if(abbreviated[x].length>0){
            upperCase += abbreviated[x][0]
        }
    }
    return upperCase.toUpperCase()
}

console.log (Acronym("I'm going to murder you. Just kidding."));

// Non-spaces:

function noSpaces(string){
    var wordCount = 0

    for(let x in string){
        if(string[x] != " "){
            wordCount++
        }
    }
    return wordCount
}

console.log(noSpaces("When is the world ending?"));

// Less than Characters

function shorten(string, value){
    var shortened = []

    for(var x in string){
        if(string[x].length >= value){
            // console.log(string[x])
            shortened.push(string[x])
        }
    }
    return shortened
}

console.log (shorten(["You", "are", "my", "sunshine", "my", "only", "sunshine", "you", "make", "me", "happy"],4));