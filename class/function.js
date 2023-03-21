//function decloration
function message(firstName) {
console.log("hello " + firstName)
}

function getMeow() {
console.log("meow")
}

function getSumTotal(firstNumber, secondNumber){
const result = firstNumber + secondNumber;
console.log(result);
}

function makePie(quantity) {
    const pie = '🥧'.repeat(quantity)
    console.log(pie)
}

function makeAnimal(animal, quantity) {
const result = animal.repeat(quantity)
return result;
} 

function generateLoudSpkr(text) {
const newText ='🔈 ' + text.toUpperCase();
return newText;


}

//invoke the function
// message("jarvis");
// message("cat who are you?") 
// getSumTotal(2,5)
// getSumTotal(42,0)
// makePie(4000)

const computer = generateLoudSpkr('lower your damn voice')

console.log(computer)

// const renderResult = makeAnimal('🐼', 953)

// console.log(renderResult)