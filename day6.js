let input = "";
var os = require("os");

const fs = require("fs");
try {
  input = fs.readFileSync("./day6Input.txt", "utf8");
} catch (err) {
  console.error(err);
}

let groups = input.split(/^\s*$/gm);
let uniqueAnswerCount =0;

groups.forEach((group) => {
  let uniqueAnswers = new Set();

  group.split(os.EOL).forEach((answers) => {
    answers.split("").forEach((answer) => {
      uniqueAnswers.add(answer);
    });
  });

  uniqueAnswerCount+=uniqueAnswers.size;
});

console.log(uniqueAnswerCount)