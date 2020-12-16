let input = [];

const fs = require("fs");
try {
  input = fs.readFileSync("./day4Input.txt", "utf8").split("\n\n");
} catch (err) {
  console.error(err);
}

const GetJsonPassport = (passport) => {
  var tempPass = passport.replace(/\s/gm, '","');
  tempPass = tempPass.replace(/:/gm, '":"');
  var json = `{ \"${tempPass}\" }`;
  return json;
};

const IsPassportCorrect = (passport) => {
  var keysNeeded = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  var failedReason = "";

  keysNeeded.forEach((key) => {
    if (!passport[key]) {
      failedReason += key + " not in passport";
      console.log("missing key", key);
    }
  });

  if (failedReason === "") {
    return true;
  }

  return false;
};


const YearCheck = (year, min, max) => {

  return year.toString().length === 4 && year * 1 >= min && year * 1 <= max;
};

const HeightCheck = (height) => {

  if (new RegExp(/\d+cm/).test(height)) {
    console.log(height.slice(0, -2), "cm");
    return (height.slice(0, -2) * 1 >= 150) & (height.slice(0, -2) * 1 <= 193);
  } else if (new RegExp(/\d+in/).test(height)) {
    return (height.slice(0, -2) * 1 >= 59) & (height.slice(0, -2) * 1 <= 76);
  }
};

const HairColourCheck = (hairColour) => {
  return new RegExp(/#[0-9a-f]{6}\b/gm).test(hairColour);
};

const EyeColourCheck = (eyeColour) => {
  return new RegExp(/amb\b|blu\b|brn\b|gry\b|grn\b|hzl\b|oth\b/).test(
    eyeColour
  );
};

const PassporIDCheck = (pid) => {
  parseInt(pid)
  return new RegExp(/^\d{9}\b/).test(pid);
};

const PassportDataCheck = (passport) => {
  if (
    YearCheck(passport["byr"], 1920, 2002) &&
    YearCheck(passport["iyr"], 2010, 2020) &&
    YearCheck(passport["eyr"], 2020, 2030) &&
    HeightCheck(passport["hgt"]) &&
    HairColourCheck(passport["hcl"]) &&
    EyeColourCheck(passport["ecl"]) &&
    PassporIDCheck(passport["pid"])
  )
    return true;
  else {
    console.log(passport);
    return false;
  }
};

const CheckAllPassports = (passportInput) => {
  let validPassportCount = 0;
  let invalidPassportCount = 0;

  let validPassportPart2 = 0;
  passportInput.forEach((passport) => {

    
    var passport = JSON.parse(GetJsonPassport(passport));

    if (IsPassportCorrect(passport)) {
      validPassportCount++;

      if (PassportDataCheck(passport)) {
        validPassportPart2++;
        console.log(passport["pid"])
      }
    } else {
      invalidPassportCount++;
    }
  });

  console.log(
    `Valid Passports: ${validPassportCount} Invalid Passports: ${invalidPassportCount}`
  );
  console.log(`valid Passports part 2: ${validPassportPart2}`);
};

CheckAllPassports(input);

