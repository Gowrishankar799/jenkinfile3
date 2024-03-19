// JAVA SCRIPT STRING FUNCTIONS.
   /*let str = "Hello Gowri";
   let val = str.length;
   console.log(val);

   //Append variables to Strings
   var myStr = "Gowri";
   var myStr2 = " Sankar";
   myStr+=myStr2;
   var mystr3 = "I am Mr. ";
   mystr3+=myStr;
   console.log(mystr3);
   // Find the length of the string.
   console.log(mystr3.length);
   // Bracket Notation to find first character in string.
   var myStr4 = "Gowri Sankar";
   var firstCharacterofmyStr4 = myStr4[0];
   console.log(firstCharacterofmyStr4);
   //Strings are immutable
   var mystr5 = "jello world";
   mystr5[0] = "h";
   console.log(mystr5);
   mystr5 = "Hello world";
   console.log(mystr5);
   // Bracket Notation to find N th character in the string.
   var thirdChar = mystr5[2];
   var lastChar = mystr5[mystr5.length-1];
   console.log(lastChar);
   console.log(thirdChar);
   // Bracket Notation to find N th to last Character in String
   // from last 2nd char
   console.log(mystr5[mystr5.length-2]);
   // word blanks
   function wordBlanks(noun,adjective,verb,adverb){
    var result = "";
    result+="The "+noun+" " +adjective+" " +verb+ " "+adverb+ " I am gowri sankar";
    return result;
   }
   console.log(wordBlanks("dog","big","ran","quickly"));
   console.log(wordBlanks("bike","slow","flew","slowly"));
   // Store multiple values with arrays.
   var array = ["Gowri",456];
   console.log(array);
   // multi dimentional arrays.
   var multiArray = [["gowri",456],["sankar",654]];
   console.log(multiArray);
   // access array data with indexes
   console.log(array[0]);
   // Modify array data with indexes
   var array2 = [10,11,12];
   array2[0] = 45;
   console.log(array2);
   // Access multi dimentional array with indexes.
   var array3 = [[1,2,3,],[4,5,6],[7,8,9],[[11,22,33],22,11]];
   var element = array3[3][0];
   console.log(element);
   // Manipulate arrays with push()
   var strArray = ["dog","bark","hello"];
 //  strArray.push(["venu","Gowri"]);
   console.log(strArray);
   var array4 = [["gowri",23],["sankar",56]];
   //array4.push(["jammu",56]);
   console.log(array4);
   array4.pop();
   console.log(array4);
   strArray.pop();// it removes last element of the array.
   console.log(strArray);
   var removeelement = strArray.shift();// It removes first element of the array.
   console.log(strArray);
   var element2 = array4.shift();
   console.log(array4);*/
   // Manipulate arrays with unshift()
   /*var strArray4 = ["venu","gowri","sankar"];
   strArray4.shift();
   strArray4.unshift("jammu");// it adds the element in first in the array
   console.log(strArray4);
   var strArray5 = [["gowri",34],["sankar",55]];
   strArray5.shift();
   strArray5.unshift(["jammu",655]);
   console.log(strArray5);
   // Write Reusable code with functions
   function methodWithNoArgs(){
    console.log("I am Mr Gowri Sankara rao");
   }
   methodWithNoArgs();
   function methodWithArgs(a,b){
    console.log(a+b);
   }
   methodWithArgs(10,65);
   // Global scope and functions
   var myGlobal = 10;
   function fun1(){
    //oopsGlobal = 10;// without using var key word theses variable acts like global variable.
   }
   function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
      output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
      output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
   }
   // local scope and functions
   function myLocalScope(){
    var myVar = 44;
    console.log(myVar);
   }
   myLocalScope();
   //console.log(myVar);
   // Global vs local scope in functions.
   var globalVar = "T-shirt";
   function outfit(){
    var globalVar = "pant";// when we write var key word this variable scope is in that function only
    // globalVar = "pant" this keyword acts like global variable.
    return globalVar;
   }
   console.log(outfit());
   console.log(globalVar);*/
   // Return a value from a functions with Return
   /*function sevenMinus(num){
    var element = num-7;
    return element;
   }
   console.log(sevenMinus(44));
   function multiplyFive(num){
    var element = num*5;
    return element;
   }
   console.log(multiplyFive(89));
   // Understanding undefined value returned from a function
   var sum = 0;
   function addThree(){
    sum+=3;
   }
   function addFive(){
    sum+=5;
   }
   console.log(addFive());// this method is void thats why its gived undefined.
   //Assainment with returned value
   var processed = 0;
   function addSix(num){
    return num+6;
   }
   processed = addSix(6);
   var rem = 0;
   function remainder(num){
    return num%2;
   }
   rem = remainder(2);
   console.log(processed+" "+ rem);
   // Stand in line
   function nextInLine(arr, item){
    // push method add items to the last
    arr.push(item);
    // shift method deletes the first items of the array
    return arr.shift();
   }
   var array = [1,2,3,4,5];
   console.log("Before array "+ JSON.stringify(array));
   console.log(nextInLine(array,7));
   console.log("After array "+ JSON.stringify(array)); 
// Boolean values
   function welcomeToBooleans(){
    return true;
   }
   console.log(welcomeToBooleans());
   //Use conditional logic with if statements.
   function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
      return "Yes, It is true";
    }
    return "No, it is not true";
   }
   console.log(trueOrFalse(true));
   // Comaprision with equality operator
   function isEqualOperator(val){
    if(val == '10'){
      return "Its equal";
    }
    return "its not equal";
   }
   console.log(isEqualOperator(10));
   // Comparision with the Strict equality operator
   // 10 == 10 --> true
   //10 == '10' --> true  Here String converts to int
   // 10 === 10 -- > true
   // 10 === '10' --> false
   function isEqualOperator2(val){
    if(val === '10'){
      return "Its equal";
    }
    return "its not equal";
   }
   console.log(isEqualOperator2(10));
   // Practice Comparing different Values
   function compareEquality(a,b){
    if(a === b){
      return "its equal";
    }
    return "its not equal";
   }
   console.log(compareEquality(10,"10"));*/
   // Comparision with inEquality Operator
   /*var myGlobal = 10;
   function fun1(){
    myGlobal2 = 2;
   }
   function fun2(val){
    var output = "";
    if(typeof myGlobal != val){
      output+="answer is "+myGlobal;
    }
    console.log(output);
   }
   fun1();
   fun2(11);
   function isNotEqual(a,b){
    return a == b ? "not equal" : "equal";
   }
   console.log(isNotEqual(10,'10'));
   // Comparison with the Strict Inequality Operator
   function isNotEqual(a,b){
    return a !== b ? "not equal" : "equal";
   }
   console.log(isNotEqual(10,'10'));
   // Comparisons with the Logical and Operator
   function testGreaterThan(val){
    if(val>10){
    return "greater than ten";
    }
    if(val>100){
      return "greater than hundered";
    }
    return "I am gowri sankar";
   }
   console.log(testGreaterThan(10));
   // Comparision with the Greater than or Equal to Operator
   function testGreaterThanEqualto(val){
    if(val>=10){
      return "10 or greater";
    }
    if(val>=20){
      return "20 or greater";
    }
    return "greater than 100";
   }
   console.log(testGreaterThanEqualto(10));
   // Comparison with less than operator
   function testLessThan(val){
    if(val<10) return "less than 10";
    if(val<20) return "less than 20";
    return "less than 100";
   }
   console.log(testLessThan(10));
   // Comparison with less than or Equal to operator
   function testLessThanEqualto(val){
    if(val<=10) return "less than 10";
    if(val<=20) return "less than 20";
    return "less than 100";
   }
   console.log(testLessThanEqualto(10));*/
   // Comparisons with the logical and operators
   /*function logicalAnd(val){
    if(val<=50 && val>=20)
    return "the value is between the 20 and 50";
   return "The value is not between the range";
   }
   console.log(logicalAnd(20));
   // Comparisons with the logical Or Operator
   function testLogicalOr(val){
    if(val<10 || val>44){
      return "value is in the range";
    }
    return "I am gowri sankar";
   }
   console.log(testLogicalOr(15));
   // Else Statements
   function elseStatement(val){
    if(val>5) return "value is greater than 5";
    else return "value isless than 5";
   }
   console.log(elseStatement(4));
   // If else statements
   function ifElse(val){
    if(val>10){
      return "small";
    }
    else if(val>100){
      return "medium";
    }
    else return "high";
   }
   console.log(ifElse(10));
   // switch statements
   function switchCase(val){
    var output = "";
    switch(val){
      case 1 :
        return "One";
        break;
      case 2 :
        return "Two";
        break;
        case 3 :
          return "Three";
          break;
          default :
          return "four";
          break;
    }
   }
   console.log(switchCase(3));
   function switchCase2(val){
    var output = "";
    switch(val){
     // var output = "";
      case 1 :
      case 2 :
      case 3 :
       output+="one";
        break;
        case 4 :
          case 5 :
          case 6 :
          output =  "two";
          break;
            case 7 :
              case 8:
              case 9 :
               output = "Three";
               break;
                default :
               output = "four";
               return output;
    }
   }
   console.log(switchCase2(3));*/
   // creating objects
   /*var object1 = {
    "name" : "Jammu. Gowri sankar",
    age : 25,
    "sex" : "male"
   }
   // Accessing Object Properties with Dot Notation.
   var object2 = {
    "name" : "gowri sankar",
    "game" : "cricket",
    "sex" : "male",
    "nationality" : "Indian",
    "place" : "Andhra Pradesh",
   }
   console.log(object2.name);
   console.log(object2["game"]);
   // Accessing Object properties with Bracket Notation
   // variables  with space used
   var object3 = {
    "name " : "jammu gowri sankar",
    "game " : "Hockey",
    "place " : "Andhra Pradesh"
   }
   console.log(object3["name "]);
   // Accessing Object Properties with Variables
   var object4 = {
    12 : "hi",
    10 : "gowri",
    11 : "sankar"
   }
   var element = 10;
   console.log(object4[element]);
  // Updating Object Properties
  object3.name = "venu jammu";
  console.log(object3.name);
  // add new properties to an object
  object3.sex = "male";
  object3['age'] = "age";
  console.log(object3);
  // deleting properties of the object.
  delete object1.name;
  console.log(object1);
  function phoneticLookUp(val){
    var output = "";
    var object = {
      "name" : "venu Jammu",
      "age" : "ages",
      "place" : "andhra pradesh"
    }
    output = object[val];
    return output;
  }
  console.log(phoneticLookUp("name"));*/
    







  // manupulating complex objects
  

//scope declaration of var and let  very important during interviews

   let i = 10;
 if (true){
    let i=50;
     console.log(i)
 }
console.log(i)


// var x=0;
// if(true){
//     var x=20;
//     console.log(x)
// }
// console.log(x)



// var supports hoisting and let does not hoisting
// console.log(y);
// console.log(z);
// let y=80;
// var z=90;
/*var global = 90;
function globalMethod(val){
   global = 10;
  return val+global;
}
console.log(globalMethod(12));
console.log(global);*/
// Returning Early Pattern from Functions
function abTest(a,b) {
  if(a<0 || b<0)
  return undefined;
return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
}
console.log(abTest(5,5));


