
function loopWhile() { 
    let i = 0;
    const end = 5

while( i < end) {
const result = i + " " + 'hello'
console.log(result)
i++
}
}

// this is temerpate literal using backtic `` DONT FORGET THE `````
function madLib(name, car, color) {
    const sentence = `Hello your name is ${name}. you drive a ${car}. which is ${color}`
    console.log(sentence)
}

madLib('sloth', 'ford', 'black')