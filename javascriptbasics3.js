//Destructuring assignment with Nested Objects
const Local_forecast = {
    today: {min: 72, max: 83 },
    tomorrow: {min: 73.3, max: 84.6}
};
function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow : { max : maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(Local_forecast));
// Use Destructuring Assignment to Assign Variables from Arrays
const [z,x,,y] = [1,2,3,4,5,6];
console.log(z,x,y);
let a = 8, b = 6;
(() => {
    "use strict";
})();
// Use Destructuring Assignment with the Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const[,, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
// Use Destructuring Assignment to Pass an Object as a Functions parameters
const stats = {
    max: 56.23,
    standard_deviation: 4.34,
    median: 34.32,
    mode: 12.30,
    min: -0.23,
    average: 35.21
};
const half = (function(){
    return function half(stats){
        return (stats.max + stats.min)/2.0;
    };
})();
console.log(stats);
console.log(half(stats));

const half2 = (function(){
    return function half({max, min}){
        return (max +  min)/2.0;
    };
})();
//console.log(stats);
console.log(half2(stats));

// Create Strings using Template Literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
// Template literal with multi - line and string interpolation 
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
// Write Concise Object Literal Declarations Using Simple fields
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Zodiac Hasbro",56,"male"));

const createPerson2 = (name, age, gender) => ({name, age, gender});
    
console.log(createPerson2("Zodiac Hasbro",56,"male"));

// Write Concise Declarative Functions
// Use class Syntax to Define a Constructor Function
 var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
 }
 var zeus = new SpaceShuttle('Jupiter');
 console.log(zeus.targetPlanet);

 const bicycle = {
    gear: 2,
    setGear(Gear){
        // "use Strict";
        this.gear = Gear;
    }
 };
 bicycle.setGear(4);
 console.log(bicycle.gear);

 function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
 }
 const Vegetable = makeClass();
 const carrot = new Vegetable('carrot');
 console.log(carrot.name);
 
 // Use getters and setters to Control Access to an Object
 class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updateAuthor){
        this._author = updatedAuthor;
    }
 }
 function makeClass() {
    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp-32);
        }
        get temperature(){
            return this._temp;
        }
    }
    return Thermostat;
 }
 const Thermostat = makeClass();
 const thermos = new Thermostat(76);
 let temp = thermos.temperature;
 thermos.temperature = 26;
 temp = thermos.temperature;
 console.log(temp);
  
 // Understand the Differences Between import and require
const cap = capitalizeString("hello!");//
console.log(cap);//



