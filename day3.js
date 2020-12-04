let input = [];

const fs = require("fs");
try {
  input = fs.readFileSync("./day3Input.txt", "utf8").split("\n");
} catch (err) {
  console.error(err);
}

let right=3;
let down=1;

let treeCount=0;
let currentPosition=0;


var patternLength= input.length * right ;
console.log("patternLenght",patternLength);

let timesToRepeat = Math.ceil(patternLength / input[0].length)

input.forEach((line) => {
 
let repeatedLine="";

  for (let index = 0; index < timesToRepeat; index++) {
    repeatedLine+=line
  }
  console.log("currentpos", repeatedLine.split("")[currentPosition]);
  if(repeatedLine.split("")[currentPosition]==="#"){

    treeCount++
  }

  currentPosition+=(right);

});

console.log(treeCount);
