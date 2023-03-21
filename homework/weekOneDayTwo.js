// homework day 2
 
let animal = 'tiger' 

switch(animal){
    case 'cow':
    console.log('moo') 
        break 
    case'tiger':
        console.log('roar')
        break
    case'rooster':
        console.log('cock-a-doodle-do')
}

//question two

const fruit = 'banana'

if (fruit === 'banana') {
    console.log('its yellow')
} else if (fruit === 'kiwi') {
    console.log('its brown')
} else if (fruit === 'watermelon') {
    console.log('its green')
} else if (fruit === 'apple') {
    console.log ('red')
}

function getSum (param1, param2) {
   const totalSum = param1 + param2 
   return totalSum 
}

const result = getSum (4, 5)
console.log(result)