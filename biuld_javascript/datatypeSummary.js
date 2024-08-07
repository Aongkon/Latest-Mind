//primitive:
//7 types : String, Boolean, Number, Null, Undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

let isLoggedIn = false
let outSideValue = null
// const userEmail;

const bigNumber = 4867583649563946495624666n;
console.log(typeof outSideValue)

const Id = Symbol('123');
const anotherId = Symbol('123')

console.log(Id === anotherId)



//Reference (Non primitive): object, array, function

const heros = ["Salmansha", "Shahrukh", "Mahesh" ]

let someObject = {
    name : "tofan",
    age : 45
}

//function(){}  //function k amra variable a declare korte pari
const myFunction = function(){
    console.log("Hello world")
}