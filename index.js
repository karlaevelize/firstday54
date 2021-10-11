//1. Declare variables with different data types

const name = "Luis" //string
const age = 33 //number
const hasPets = true //boolean

//the problem

const name1 = "Martina"
const age1 = 24
const hasPets1 = true

const name2 = "Ekaterina"
const age2 = 30
const hasPets2 = true

// console.log(name, age1, hasPets, name1, age, hasPets1)

//the first solution (not that we kinda fall in the same situation)

const person1 = {
  name: "Luis",
  age: 33, 
  hasPet: true 
}

const person2 = {
  name2: "Ekaterina",
  age2: 30,
  hasPets2: true
}

// console.log(person1, person2)

//the final solution

const people = [
  {
    name: "Luis",
    age: 33, 
    hasPet: true 
  },
  {
    name2: "Ekaterina",
    age2: 30,
    hasPets2: true
  }
]

// console.log(people)

//2. Write functions and call it

function sayHello(){
  console.log("Hello")
}
// sayHello()

function sayHelloToSomeone(name, age){ //name and age are parameters
  console.log(`Hello ${name} and you are ${age} years old`) //template string, you can pass variables, use ${variable}
}

// sayHelloToSomeone("Johann", 33) //passing arguments, same oder as declared

//2.1 Arrow functions
// Just a different way of writing functions

const sayHelloFromArrowFunction = (name, age) => {
  console.log("Arrow!")
}

// sayHelloFromArrowFunction()

//3. Console.log vs Return
//With retun you can save the value and access it later, not possible with console.log

const sayBye = () => {
 console.log("Bye")
}

// const anotherReturn = sayBye()
// console.log(anotherReturn), this will return undefined

const sayGoodBye = () => {
   return "Goodbye" //the function fives a value back
}

// const functionReturn = sayGoodBye() => with return we can access the value
// console.log(functionReturn), this returns "Goodbye"

//4. Conditionals

const open = true

const openOrClosed = () => {
  if(open){
    console.log("It's open")
  } else {
    console.log("it's closed")
  }
}

//openOrClosed()

// || OR (one must be true)
// && AND (both must be true)

//Busines is open from 10 to 17
//Welcome
//It's closed

const hour = 17

const isItOpenOrClosed = (hour) => { //Luis's code, solution for challenge
  if (hour>9 && hour<17){
    console.log("It's open")
  } else {
    console.log("It's closed")
  }
}

// isItOpenOrClosed(10)


// 4.1 Ternary operator
//A shorter way to write if/else statements

const randomNumber = 7

if (randomNumber > 7){
  console.log("bigger")
} else {
  console.log("smaller")
}

randomNumber > 7 //write a condition
  ? console.log("bigger") //if the condition is true
  : console.log("smaller") //else

randomNumber > 5 ? console.log("bigger") : console.log("smaller") //can also be written in one line

hour > 10 && hour < 17 ? console.log("open") : console.log("closed") // example with hour