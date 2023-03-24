// length function
const strlength = () => {
    const string = "great idea Megan!"
    console.log(string.length);

}

//invoke
strlength()


const toUpper = () => {
    const string = "local scope"
        console.log("str uppercase:" ,string.toUpperCase())

}

toUpper()

// trim 

const strTrim = () => {
    const string = " hola soy dora"
        console.log('str trim:', string.trim())
}

strTrim()


//replace

const strReplace = () => {
    const string = 'i didnt sleep much last night'
    const subject = 'sleep much'
    const replace = " eat much"
    console.log(' str replace:', string.replace(subject, replace))

}
strReplace()

//substring

const strSub = () => {
    const str = " i like big fonts and i cannot lie"
    console.log('subString:', str.substring(6,15))

}

strSub()



