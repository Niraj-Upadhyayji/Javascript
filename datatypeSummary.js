// Primitive 
// Primitive datatype are seven types

//  String , Number , Boolean , null , undefined , Symbol, BigInt (These datatype are call by value)

const score =100
const scoreValue = 100.4

const isLoggedin = false
const outsideTemp = null
let userEmail


const id = Symbol("123")
const anotherId = Symbol("123")
const bigNumber = 867669878797n // This is bigInt number

console.log(id === anotherId);


//  Reference (Non primitive)


// Array , object , Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Niraj",
    age:22
}


const myFunction = function(){
    console.log("Hello World");
}