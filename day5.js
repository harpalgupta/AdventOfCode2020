let input = [];
var os = require('os');


const fs = require("fs");
try {
  input = fs.readFileSync("./day5Input.txt", "utf8").split(os.EOL);
} catch (err) {
  console.error(err);
}


const FBProcess = (input, start, end) => {
  let midpoint = end / 2;
  if (input === "F" || input === "L") {
    let something = Math.floor(end - (end - start) / 2);
    // console.log(something);
    return { start: start, end: something };
  } else if (input === "B" || input === "R") {
    let something = (end + 1 - start) / 2;
    // console.log(something);
    return { start: Math.ceil(end + 1 - something), end: end };
  }
};
var temp = "BBFFBBFRLL".split("");

const processBoardingPass = (boardingPass) => {

  var firstSection = boardingPass.splice(0, 6);
  var secondSection = boardingPass;

  let currentStart = 0;
  let currentEnd = 127;

  firstSection.forEach(letter => {
    var result = FBProcess(letter, currentStart, currentEnd);
    currentStart = result.start;
    currentEnd = result.end;
  });

  let row = 0;
  secondSectionLetter = secondSection[0];
  let secondOther = secondSection.splice(1, 3);

  if (secondSectionLetter === "F") {
    row = currentEnd < currentStart ? currentEnd : currentStart;
  } else if (secondSectionLetter === "B") {
    row = currentEnd > currentStart ? currentEnd : currentStart;
  }

  currentStart = 0;
  currentEnd = 7;

  secondOther.forEach((letter) => {
    var result = FBProcess(letter, currentStart, currentEnd);
    currentStart = result.start;
    currentEnd = result.end;
  });


  return { column: currentEnd, seatId: row * 8 + currentEnd };
};

let currentHighestSeatId =0;

input.forEach(boardingPass => {
  let {seatId}= processBoardingPass(boardingPass.split(""));
  if (seatId>currentHighestSeatId){
    currentHighestSeatId = seatId
  };
  
});

console.log(`highest seat Id ${currentHighestSeatId}`);