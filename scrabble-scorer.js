// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let userword;
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let newPointStructure = {};

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
   console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   userword=input.question("Let's play some scrabble! \n\nEnter a word to score:");
   //oldScrabbleScorer(userword);
};

initialPrompt(); //1. First call

 let simpleScore =  function(word){
   let score = 0;
  for (let i = 0; i < word.length; i++) {
     score+=1;
  }      
  return score;
}
//console.log(simpleScore("testq"));

let vowelBonusScore = function(word){
 let score = 0;
  for (let i=0;i<word.length;i++){
    score+=1;
  }
  return score*3;
}
//console.log(vowelBonusScore("testqqq"));
let scrabbleScore = function(word){
  let score = score.toUpperCase();
  for(let i=0;i<word.length;i++){
    score+=1;
  }
  return score*5;
}



const scoringAlgorithms = [simpleScore,vowelBonusScore,scrabbleScore]


let algorithmsDescription=['Simple: One point per character','Vowel Bonus: Vowels are worth 3 points','Scrabble: Uses scrabble point system']

console.log("Which scoring algorithm would you like to use?\n\n");
for(let i=0;i<algorithmsDescription.length;i++){
  console.log(i+' - '+algorithmsDescription[i]);
}

const scoringAlgorithmInput = input.question("Enter 0, 1 or 2: ");
//scorerPrompt(); //2. secnd call
newPointStructure = transform(oldPointStructure); //3. third call

scrabbleScore = function(word) {
	word = word.toLowerCase();
	let letterPoints = "";
  let score = Number(0);
	for (let i = 0; i < word.length; i++) {
	  for (const pointValue in newPointStructure) {
		 if (pointValue.includes(word[i])) {
      score+=Number(newPointStructure[pointValue]);
		 }
	  }
	}
	return score;
 }
scorerPrompt();
//console.log("Scrabble scoring values for");
//console.log("letter a: ", newPointStructure.a);
//console.log("letter j: ", newPointStructure.j);
//console.log("letter z: ", newPointStructure["z"]);
//console.log("Letters with score '4':", oldPointStructure['4']);
//console.log("3rd letter within the key '4' array:", oldPointStructure['4'][2]);

//let letters = oldPointStructure['8'];
//console.log("Letters with score '8':", letters);
//console.log("2nd letter within the key '8' array:", letters[1]);


function scorerPrompt(){
  if(scoringAlgorithmInput==0){
    console.log(`Score for '${userword}' : ${simpleScore(userword)} `);
  }else if(scoringAlgorithmInput==1){
    console.log(`Score for '${userword}' : ${vowelBonusScore(userword)} `);
  }else if(scoringAlgorithmInput==2){
    //oldScrabbleScorer(userword);
     console.log(`Score for '${userword}' : ${scrabbleScore(userword)} `);
  }
}

function transform(oldPointStructure) {
    const newArray = {};
    for(const pointValue in oldPointStructure){
      let arr = oldPointStructure[pointValue];
      for(let i=0;i<arr.length;i++){
          var char = arr[i].toLowerCase();
          newArray[char] = pointValue;
        }
      }
  return newArray;
}



function runProgram() {
  newPointStructure;
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

