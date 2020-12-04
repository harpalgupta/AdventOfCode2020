let input = [];

const fs = require("fs");
try {
  input = fs.readFileSync("./day2Input.txt", "utf8").split("\n");
} catch (err) {
  console.error(err);
}

let regex = /^(\d+)-(\d+) ([a-z]): (\w+)/;

let validPasswordPart1 = 0;
let validPasswordPart2 =0


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
    validPasswordPart1++;
    console.log(
      `good password at least ${atLeast} at most ${atMost} for letter ${letter} count: ${occurances} password: ${password} `
    );
  } 

  var part2Matches= 0;
  let firstPosition = matches[1]-1;
  let secondPosition = matches[2]-1;

  if(password[firstPosition]===letter){
    part2Matches++

  }
  if(password[secondPosition]===letter){
    part2Matches++

  }

  if(part2Matches===1){

    validPasswordPart2++

  }



});




console.log("valid Passwords part1", validPasswordPart1);
console.log("valid Passwords part2", validPasswordPart2);

