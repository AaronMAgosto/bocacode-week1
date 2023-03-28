// // 1. You are given the following "car" object:
//  let myCar = {brand: "Toyota", make: "Prius", color: "red"}. 
//  Please use destructuring to access the color property.
 
const car = {
    year:'2022',
    make:'volkswagen',
    model:'tiguan',
    color:'black',
    type: 'midsize suv',
 }

 const { color } = car
console.log(color)
 

 //2. Write a function that converts hours into seconds.
 // Return the result. Invoke the function.

 function convert(hours) {
    const seconds = 3600
    return hours * seconds;
  }
  console.log(convert(500))
  
