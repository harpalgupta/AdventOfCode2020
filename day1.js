let input = [];

const fs = require("fs");
try {
  input = fs.readFileSync("./day1Input.txt", "utf8").split("\n");
} catch (err) {
  console.error(err);
}

//sorting input File this may reduce performance..
var sortedInput = input.sort((a, b) => a - b);

var ThreeNumbersAddto2020 = [];
var TwoNumbersAddto2020 = [];

sortedInput.forEach((firstLayerInput) => {
  sortedInput.forEach((secondLayerInput) => {
    if (secondLayerInput === firstLayerInput) {
      return;
    } else if (
      parseInt(firstLayerInput) + parseInt(secondLayerInput) ===
      2020
    ) {
      var matchingNumberArray = [firstLayerInput, secondLayerInput]
        .sort((a, b) => a - b)
        .join(",");
      if (!TwoNumbersAddto2020.find((i) => i === matchingNumberArray)) {
        TwoNumbersAddto2020.push(matchingNumberArray);
      }
    }

    sortedInput.forEach((thirdLayerInput) => {
      if (thirdLayerInput === firstLayerInput) {
        return;
      } else if (secondLayerInput === thirdLayerInput) {
        return;
      } else if (
        parseInt(firstLayerInput) +
          parseInt(secondLayerInput) +
          parseInt(thirdLayerInput) ===
        2020
      ) {
        var matchingNumberArray = [
          firstLayerInput,
          secondLayerInput,
          thirdLayerInput,
        ]
          .sort((a, b) => a - b)
          .join(",");
        if (!ThreeNumbersAddto2020.find((i) => i === matchingNumberArray)) {
          ThreeNumbersAddto2020.push(matchingNumberArray);
        }
      }
    });
  });
});

var resultNumbersPart1 = TwoNumbersAddto2020[0].split(",");
console.log(`part 1 result ${resultNumbersPart1[0] * resultNumbersPart1[1]}`);

var resultNumbersPart2 = ThreeNumbersAddto2020[0].split(",");

console.log(
  `part 2 result ${
    resultNumbersPart2[0] * resultNumbersPart2[1] * resultNumbersPart2[2]
  }`
);
