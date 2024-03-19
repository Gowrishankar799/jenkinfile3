// counting cards
/*var count = 9;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count++;
            break;     
    }
    return "Change me "+ count;
}
cc(2); cc(3); cc(7);  cc('K'); cc('A');
console.log(cc(4));
// Build java script objects
var obj1 = {
    "name" : "venu jammu",
     age : 30
}
function checkObj(val){
    if(obj1.hasOwnProperty(val)){
        return obj1.name;
    }
    return "Not found";
}
console.log(checkObj("name"));
// Manipulating Complex Objects
//Accessing Nested Objects
var myStroage = {
    "car" : {
        "inside" : {
            "name" : "pavan",
            "sex"  : "male"
        },
        "inside2" : {
            "name" : "balu",
            "sex" : "male"
        }
    },
    "outside" : {
        "name" : "gani",
        "sex" : "male"
    }
}
console.log(myStroage.car.inside2.name);
// ACcessing Nested Arrays
var array1 = [
    {
        "name" : "Bangaram",
        "games" : ["cricket","Hockey","vollyball","badminton"]
    },
    {
        "name" : "Sankar",
        "games" : ["polo","tennis"]
    }
];
console.log(array1[1].games);
// Record Collection
// Iterate with while loops
var myArray = [];
var i = 0;
while(i<5){
    myArray.push(i);
    i++;
}
console.log(myArray);
// Iterate with for loops
var myArray2 = [];
for(var i = 5;i<10;i++){
    myArray2.push(i);
}
console.log(myArray2);
// Iterate Odd Numbers with a For Loop
var myArray3 = [];
for(var i = 0;i<10;i+=2){
    myArray3.push(i);
}
console.log(myArray3);
// Count Backwards with a For Loop
var myArray4 = [];
for(var i = 10;i>0;i-=2){
    myArray4[i] = i;
}
myArray4[0] = myArray2;
console.log(myArray4);
console.log(myArray4[1]);
console.log(myArray2+myArray);
// Iterate Through an Array with a for loop
var ourArray = [1,2,3,4,5];
var total = 0;
for(var i = 0;i<ourArray.length;i++){
    total+=ourArray[i];
}
console.log(total);
// Nested For loops
var product = 1;
function productArray(arr){
for(var i = 0;i<arr.length;i++){
    for(var j = 0;j<arr[i].length;j++){
        product*=arr[i][j];
    }
}
return product;
}
console.log(productArray([[2,3],[1,2]]));
// Iterate with Do ... While Loops
var doArray = [];
var i = 10;
do{
    doArray.push(i);
    i++;
}
while(i<5);
console.log(i,doArray);
// Profile Lookup
var contacts = [
    {
        "name" : "gowri",
        "gender" : "male"
    },
    {
        "name" : "sankar",
        "gender" : ""
    }
];
function lookUpProfile(name, gender){
    for(var i = 0;i<contacts.length;i++){
        if(contacts[i].name == name){
            return contacts[i].gender || "kjjkjkj";
        }
    }
    return "zzzzzz";
}
console.log(lookUpProfile("gowri",""));*/

// Generate Random Fractions
/*function random(){
    return Math.random();
}
console.log(random());
// Generate Random Whole Numbers
function random2(){
    return Math.floor(Math.random()*22)+1;
}
console.log(random2());
// Range between n to n+1
var min = 5;
var max = 15;
function random3(){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(random3());*/
// Use the parseInt Function
// Nan = Not a number
// parseInt method converts decimals to whole numbers
/*function parseIntMethod(str){
    return parseInt(str);
}
console.log(parseIntMethod(4.44444));
// Use the parseInt Function with a Radix
function convertToInteger(str){
    return parseInt(str,2);
}
console.log(convertToInteger("101"));
// Use the conditional(Ternary) Operator
function checkEqual(a,b){
    return a === b ? true : false;
    return a === b;
}
console.log(checkEqual(5,6));
// Use Multiple Conditional (Ternary) Operators
function checkSign(num){
    return num>0? "positive": num<0?"negative":"zero";
}
console.log(checkSign(0));*/
// Difference Between the var and let keywords
/*var catName = "quincy";
var quote;
var catName = "Beau";
function catTalk(){
    "use strict";
    catName = "Oliver";
    quote = catName + " says Meow!";
    return quote;
}
console.log(catTalk());
console.log(catName);
let catName2 = "quincy";
var quote2;
 catName2 = "Beau";
function catTalk2(){
    "use strict";
    catName2 = "Oliver";
    quote2 = catName2 + " says Meow!";
    return quote2;
}
console.log(catTalk2());
console.log(catName2);
// Compare the scope of the Var and Let keywords
function checkScope(){
    "use strict";
    var i = "function scope";
    if(true){
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
console.log(checkScope());
function checkScope2(){
    "use strict";
    let i = "function scope";
    if(true){
       let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
console.log(checkScope2());
// Declare a Read-Only Variable with the const keyword
function printManyTimes(str){
    "use strict"
    var sentence = str +" is cool!";
    sentence = str + " is amazing!";
    for(var i = 0;i<str.length;i+=2){
        console.log(sentence);
    }
}
printManyTimes("Venu Jammu");
function printManyTimes2(str){
    "use strict"
    const sentence = str +" is cool!";
    sentence = str + " is amazing!";// it throws an error bz we reassigning value to the const variable.
    for(var i = 0;i<str.length;i+=2){
        console.log(sentence);
    }
}

function printManyTimes3(str){
    "use strict"
    const sentence = str +" is cool!";
    for(var i = 0;i<str.length;i+=2){
        console.log(sentence);
    }
}
printManyTimes3("Venu Jammu");*/

// Mutate an Array Declared with const
/*const s = [5,7,2];
function editInPlace() {
    "use strict"
   // s = [2,5,7];// It gives an error bz we are assaigning a value to s.
}
editInPlace();
function editInPlace2() {
    "use strict"
   // s = [2,5,7];// It gives an error bz we are assaigning a value to s.
   s[0] = 2;// It is also not working.
   s[1] = 5;
   s[2] = 7;
}
editInPlace2();
console.log(s);*/
// Prevent Object Mutation
/*function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        pi : 3.14
    };
    try{
        MATH_CONSTANTS.pi = 55;
    }
    catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.pi
}
const pi = freezeObj();
console.log(pi);
// Write Arrow Functions with Parameters
var myConcat = function(arr1,arr2){
    return arr1.concat(arr2);
};
console.log(myConcat([1,2,3],[4,5,6]));
 
 var myConcat2 = (arr1,arr2) => arr1.concat(arr2);
 console.log(myConcat2([1,2,3],[4,5,6]));
 // Write Higher Order Arrow Functions
 const realNumberArray = [5,6,9,8,7];
 const squareList = (arr) => {
    const squaredIntegers = arr;
    return squaredIntegers;
 };
 const squaredIntegers = squareList(realNumberArray);
 console.log(squaredIntegers);
 const realNumberArray2 = [5,6,9,8,7,0,0,0,999];
 const squareList2 = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0);
    return squaredIntegers;
 };
 const squaredIntegers2 = squareList2(realNumberArray2);
 console.log(squaredIntegers2);
 const realNumberArray3 = [5,6,9,8,7,0,0,0,999,55,66,88,77];
 const squareList3 = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
    return squaredIntegers;
 };
 const squaredIntegers3 = squareList2(realNumberArray3);
 console.log(squaredIntegers3);*/
 // Write Higher Order Arrow Functions
 const increment = (function() {
    return function increment4(number, value){
        return number+value;
    };
 })();
 console.log(increment(5,2));
 console.log(increment(5));

 const increment2 = (function() {
    return function increment7(number, value = 1){
        return number+value;
    };
 })();
 console.log(increment2(5,2));
 console.log(increment2(5));
 
 // Use the Rest Operator with Function Parameters
 const sum = (function() {
    return function sum(x,y,z){
        const args = [x,y,z];
        return args.reduce((a,b) => a+b,0)
    };
 })();
 console.log(sum(1,2,3));

 const sum2 = (function() {
    return function sum(...args){
        //const args = [x,y,z];
        return args.reduce((a,b) => a+b,0)
    };
 })();
 console.log(sum2(1,2,9));
  
 // Use the Spread Operator to Evalute Arrays In - Place
 const arr1 = ['JAN','FEB','MAR','APR','MAY'];
 let arr2;
 (function() {
    arr2 = arr1; // change this line
    arr1[0] = 'potato';
 })();
 console.log(arr2);

 const arr3 = ['JAN','FEB','MAR','APR','MAY'];
 let arr4;
 (function() {
    arr4 = [...arr3]; // change this line
    arr3[0] = 'potato';
 })();
 console.log(arr4);
 // Use Destructuring Assignment to Assign Variables from Objects
 var voxel = {x: 3.6, y:7.4, z: 6.54};
 var x = voxel.x;
 var y = voxel.y;
 var z = voxel.z;
 const {x : a, y : b, z : c } = voxel;
  
 const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
 };
 function getTempOfTmrw(avgTemperatures){
    "use strict";
    // change code below this line
    const tempOfTomorrow = undefined;// change this line
    // change code above this line
    return tempOfTomorrow;
 }
 console.log(getTempOfTmrw(AVG_TEMPERATURES));

 const AVG_TEMPERATURES2 = {
    today: 77.5,
    tomorrow: 79
 };
 function getTempOfTmrw2(avgTemperatures){
    "use strict";
    // change code below this line
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    // change code above this line
    return tempOfTomorrow;
 }
 console.log(getTempOfTmrw2(AVG_TEMPERATURES2));
  
 // Destructuring assignment with Nested Objects
 








