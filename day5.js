let input = [];

const fs = require("fs");
try {
  input = fs.readFileSync("./day4Input.txt", "utf8").split("\n\n");
} catch (err) {
  console.error(err);
}



// For example, consider just the first seven characters of FBFBBFFRLR:

// Start by considering the whole range, rows 0 through 127.
// F means to take the lower half, keeping rows 0 through 63.
// B means to take the upper half, keeping rows 32 through 63.
// F means to take the lower half, keeping rows 32 through 47.
// B means to take the upper half, keeping rows 40 through 47.
// B keeps rows 44 through 47.
// F keeps rows 44 through 45.
// The final F keeps the lower of the two, row 44.

// The last three characters will be either L or R; these specify exactly one of the 8 columns of seats on the plane (numbered 0 through 7). The same process as above proceeds again, this time with only three steps. L means to keep the lower half, while R means to keep the upper half.

// For example, consider just the last 3 characters of FBFBBFFRLR:
// BFFFBBFRRR: row 70, column 7, seat ID 567.
// FFFBBBFRRR: row 14, column 7, seat ID 119.
// BBFFBBFRLL: row 102, column 4, seat ID 820.

const FBProcess =(input,start,end)=>{
  let midpoint = end/2;
  if(input==="F"){
    let something = Math.floor(end-(end-start)/2);
    console.log(something);
    return {"start": start,"end": something}

  }
  else if(input==="B"){
    let something = (end+1-start)/2;
    console.log(something);
    return {"start": Math.ceil(end+1-something),"end": end}

  }
}

var result = FBProcess("F",0,128)

console.log(FBProcess("F",0,127));
 console.log(FBProcess("B",0,63));
console.log(FBProcess("B",32,47));
