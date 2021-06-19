// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let newPointStructure = transform(oldPointStructure);

function transform(oldPointStructure) {
    const newArray = {};
    for(const pointValue in oldPointStructure){
      let arr = oldPointStructure[pointValue];
      for(let i=0;i<arr.length;i++){
          var char = arr[i].toLowerCase();
          newArray[char] = Number(pointValue);
        }
      }
  return newArray;
}

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
	for (let i = 0; i < word.length; i++) {
	  for (const pointValue in oldPointStructure) {
		 if (oldPointStructure[pointValue].includes(word[i])) {
		  letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
   //console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let userword = ""; //1. First call
function initialPrompt() {
   userword =input.question("Let's play some scrabble! \n\nEnter a word to score:");
   return userword;
}

function simpleScore(word){
    let score = word.length; 
    return score;
}

function vowelBonusScore(word){
 let score = 0;
 let vowelArr = ['a','e','o','i','u'];
  for (let i=0;i<word.length;i++){ 
      if(vowelArr.includes(word[i]) ){
        score+=3;
      }else{
        score+=1;
      }    
  }
  return score;
}

function scrabbleScore(word) {
	word = word.toLowerCase();
  let score = Number(0);
  
	for (let i = 0; i < word.length; i++) {	 
    score+=Number(newPointStructure[word[i]]);
	}
	return score;
 }

const scoringAlgorithms = [
  {
   name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scoringFunction: simpleScore  
},
{
  name : "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
},
{
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: scrabbleScore
 }
];

function scorerPrompt(){
  let scorerprompt = input.question(`Which scoring algorithm would you like to use?\n\n0 - Simple: One point per letter\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Traditional scrabble point system\nEnter 0, 1, or 2: `);
  console.log(`Score for '${userword}': ${scoringAlgorithms[scorerprompt].scoringFunction(userword, newPointStructure)}`); 
}

function runProgram() {
  initialPrompt(); //1. First call
  scorerPrompt();// 2.
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	  runProgram: runProgram,
	  scorerPrompt: scorerPrompt
};

