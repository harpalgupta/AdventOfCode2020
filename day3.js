let input = [];

const fs = require("fs");
try {
  input = fs.readFileSync("./day3Input.txt", "utf8").split("\n");
} catch (err) {
  console.error(err);
}



const GetTreeCount = (right, down, input) => {
  let treeCount = 0;
  let currentPosition = 0;

  var patternLength = input.length * right;
  console.log("patternLenght", patternLength);

  let timesToRepeat = Math.ceil(patternLength / input[0].length);

  input.forEach((line, lineIndex) => {
    if (lineIndex % down === 0) {
      console.log(lineIndex, down);

      let repeatedLine = "";

      for (let index = 0; index < timesToRepeat; index++) {
        repeatedLine += line;
      }
      console.log("currentpos", repeatedLine.split("")[currentPosition]);
      if (repeatedLine.split("")[currentPosition] === "#") {
        treeCount++;
      }

      currentPosition += right;
    }
    //else skip
  });
  return treeCount;
};

const instructPart1 = {right:3,down:1};

const instructPart2 = [{right:1,down:1},{right:3,down:1},{right:5,down:1},{right:7,down:1},{right:1,down:2}]
var results = [];


instructPart2.forEach(instr => {
  results.push(GetTreeCount(instr.right, instr.down, input))
});

var multipliedResults= results.reduce((prevValue,curValue) =>  prevValue * curValue,1)

console.log("part1 answer ", GetTreeCount(instructPart1.right,instructPart1.down,input));
console.log("part2 answer ",multipliedResults);
