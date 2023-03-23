//question1 
 
function homework(param1, param2) {
const newTotal = param1 * param2
return newTotal
}

const result = homework(99, 100)
console.log(result)

//question2
function assignGrade(score) {
if (score >= 90) {
    return 'A'
} else if (score >= 80) {
    return 'B'
} else if (score >= 70) {
    return 'C'
} else if (score >= 60) {
    return 'D'
} else ( score > 59) 
   return 'F'
}

const earnedGrade1 = assignGrade(90)
const earnedGrade2 = assignGrade(42)
const earnedGrade3 = assignGrade(75)
const earnedGrade4 = assignGrade(68)
const earnedGrade5 = assignGrade(88)
console.log(earnedGrade1)
console.log(earnedGrade2)
console.log(earnedGrade3)
console.log(earnedGrade4)
console.log(earnedGrade5)

// question3

const  dogsNPuppies = [
    "dog 1",   //0
    "dog 2",  //1
    "dog 3",  //2
    [         //3
        "pup 1",  //0
        "pup 2",  //1
        "pup 3"  // 2

    ],

]
 //question4
 console.log(dogsNPuppies[3][1])
 console.log(dogsNPuppies[1])