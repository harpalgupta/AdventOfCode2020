let input = "";
var os = require("os");

const fs = require("fs");
try {
  input = fs.readFileSync("./day6Input.txt", "utf8");
// input = fs.readFileSync("./day6DemoInput.txt", "utf8");
} catch (err) {
  console.error(err);
}

let groups = input.split(/^\s*$/gm);
let uniqueAnswerCount = 0;

let totalSameAnswerCount =0;

groups.forEach((group,groupIndex) => {
  let uniqueAnswers = {};
  let countSameAnswersPerGroup=0;


  let peoplesAnswers = [];

  let people = group.split(os.EOL).filter((p) => p !== "");
  let numberOfPeople = people.length;

  //   console.log(numberOfPeople)


  people.forEach((personResponse) => {
    let personsAnswers = personResponse.split("");
    peoplesAnswers.push(personsAnswers);
  });

  if(numberOfPeople ==1)  {
    console.log(peoplesAnswers+" num ppl "+numberOfPeople +"num answers" + peoplesAnswers[0].length)
    totalSameAnswerCount+= peoplesAnswers[0].length -1

  }




  for (let currentQuestion=0; currentQuestion < peoplesAnswers.length; currentQuestion++) {
    
    let answer ="";
    let countSameAnswer =1;

    for (let currentPerson =0; currentPerson < peoplesAnswers.length; currentPerson++) {
        // console.log(currentPerson+" "+ currentQuestion)
        if( currentPerson===0){
            answer = peoplesAnswers[currentPerson][currentQuestion]
            // console.log("lll"+answer)
        }
        else if (answer !== undefined && peoplesAnswers[currentPerson][currentQuestion] === answer){
          console.log("<<<<"+answer)
            countSameAnswer++

        }
    }
  
    if (countSameAnswer===numberOfPeople){
        
        console.log(groupIndex+ " "+ answer +" same answer for whol group")
        totalSameAnswerCount++
          }
    
   
      
  }

  // totalSameAnswerCount+= countSameAnswersPerGroup

  
});

 console.log(totalSameAnswerCount)
