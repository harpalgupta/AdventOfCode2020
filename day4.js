let input = [];

const fs = require("fs");
try {
  input = fs.readFileSync("./day4Input.txt", "utf8").split("\n\n");
} catch (err) {
  console.error(err);
}


const GetJsonPassport=(passport)=>{
  var tempPass = passport.replace(/\s/gm,"\",\"");
  tempPass = tempPass.replace(/:/gm,"\":\"");
  var json = `{ \"${tempPass}\" }`;
  return json;
}


const IsPassportCorrect=(passport)=>{

  var keysNeeded=["byr","iyr","eyr","hgt","hcl","ecl","pid"]

  var failedReason ="";

  keysNeeded.forEach(key => {
    // console.log("checking key",key)
    if(!(passport[key])) {
      failedReason+= (key+" not in passport")
      console.log("missing key",key)
    } 

  });

  if(failedReason===""){
    return true
  }
  
  return false
  
}


const CheckAllPassports=(passportInput) =>{

  let validPassportCount =0;
  let invalidPassportCount =0;

  passportInput.forEach(passport => {
    var passport = JSON.parse(GetJsonPassport(passport));

    if(IsPassportCorrect(passport)){
      validPassportCount++
    }
    else{
      invalidPassportCount++
    }
});

console.log(`Valid Passports: ${validPassportCount} Invalid Passports: ${invalidPassportCount}`)

const YearCheck=(year,min,max)=>{
return year.length()===4 && year>=min && year<=max

}

const HeightCheck = (height)=>{
  if (height.search("cm")){
    return height>=150 & height<=193
  }
  else{
    return height>=59 & height<=76

  }

}

const PassportDataCheck =(passport)=>{


  YearCheck(passport["byr"],1920,2020);
  YearCheck(passport["iyr"],2010,2020);
  YearCheck(passport["eyr"],2020,2030);
  HeightCheck(passport["hgt"])


 
}

//Part2 checks...
//length,min,max
// byr 4,1920,2002.
// iyr 4,2010,2020.
// eyr 4,2020,2030.

// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.

// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.

// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

}

CheckAllPassports(input);


