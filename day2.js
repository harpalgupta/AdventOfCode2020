let input = [];

const fs = require("fs");
try {
  input = fs.readFileSync("./day2Input.txt", "utf8").split("\n");
} catch (err) {
  console.error(err);
}

let regex = /^(\d+)-(\d+) ([a-z]): (\w+)/;

var validPassword = 0;

input.forEach((line) => {
  let matches = line.match(regex);

  let atLeast = matches[1];
  let atMost = matches[2];

  let letter = matches[3];

  let password = matches[4];

  let occurances = 0;

  password.split("").forEach((currentLetter) => {
    if (currentLetter.toLowerCase() == letter.toLowerCase()) {
      occurances++;
    }
  });

  if (occurances >= atLeast && occurances <= atMost) {
    validPassword++;
    console.log(
      `good password at least ${atLeast} at most ${atMost} for letter ${letter} count: ${occurances} password: ${password} `
    );
  } else {
  }
});

console.log("valid Passwords", validPassword);
