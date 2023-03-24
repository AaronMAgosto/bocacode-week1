/*  objectiove: create a fubction that converts a string to a friendly sentence.

. string method: toLowerCase(), toUpperCase(), trim(),
. arrow function


*/
function convertSentence(text) {
 const newText = text.toLowerCase()
 const newText2 = newText[0].toUpperCase()
 return newText2
}

const convertSentence2 = (text) => {
const newText = text.toLowerCase()
const newText2 = newText[0].toUpperCase()
const finalText = newText2 + newText.substring(1)
return newText2
}

const sentence = 'type Better pleAse'
const result = convertSentence2(sentence)

console.log('original:', sentence)
console.log('result:', result)