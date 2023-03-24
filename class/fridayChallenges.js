//question1 create a function that converts farenheit to celsius

function convertTemp (F) {
let celsius = (1 * F - 32) * 5 / 9

return celsius
}

const tempConvert = convertTemp (50)
console.log(tempConvert + ' C')

//question2 create a functiom that converts yen to usd
function dollarConversion (YEN) {
const USD = YEN * 0.0077
return USD
}
const finalConversion = dollarConversion (1000)
console.log (finalConversion + ' USD')


//question3 get largest number from array

const Array = [
    7, //0
    3, //1
    81, //2
    4, //3
    
]
// console.log(Array[2]);
let largest = 0
for(let i = 0; i < Array.length; i++)
//  basically says let the index start at the 0 place; go through the entire index, and keeps adding till it gets to the highest number
if (largest < Array[i]) (largest= Array[i])
console.log(largest)




// //question4
