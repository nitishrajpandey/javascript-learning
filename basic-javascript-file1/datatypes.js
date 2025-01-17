// *********************************************************************************

"use strict" // when we apply this we strictly follow latest javascript rule

// *******************************************************************************

// alert(3+3)  // we are using nodejs not browser this function work on browser console

// *********************************************************************************

console.log("hello"); console.log("nitish") // this is not good code readiability

//*********************************************************************************

console.log(typeof "hello"); // typeof show the type of value or variable  
// output => string

// *********************************************************************************
// Datatypes
let userId = 12425; // number
console.log(userId);
console.log(typeof userId);


let bigNumber = 5n; //bigInt => n
console.log(bigNumber);
console.log(typeof bigNumber);


let name = "nitish" // string => ""
console.log(name);
console.log(typeof name);


let boolean = true; //boolean => true/false
console.log(boolean);
console.log(typeof boolean);


let value1 = null; //null (standalone value)
console.log(value1);
console.log(typeof value1);


let value2 = undefined; //undefined (you not give the value)
console.log(value2);
console.log(typeof value2);


// symbol => uniquesness

const id = Symbol('123')
console.log(id);


// ****************************************** important ************************

//primitive datatype (store in stack memories)
let userName1="nitish";
let userName2=userName1;
userName2="navneet";
console.log(userName1); //not change the value because they store copy value
console.log(userName2);

//refrence datatype (store in heap memories)

let objone = {
    email:"nitish@gmail.com",
    age:32
}
 let objtwo=objone;
 objtwo.email="navneet@gmail.com"
 console.log(objone) //the value is change
 console.log(objtwo) //the value is change

//********************************************************************* */
// object => refrence datatypes

// array
let array1=["shaktiman","padman","ironman"];
console.log(typeof array1)   //object

// object
let obj1={
    key1:"value"
}
console.log(typeof obj1);   //object

//function
function functionName(){

    console.log();
}
console.log(typeof functionName);   //function


// ***********************************************************************************

//   datatypes conversion

/*
// number to string conveter 
let score = 33;
console.log(score);
console.log(typeof score);
let newScore=String(score);
console.log(newScore);
console.log(typeof newScore);
*/

/*
//string to number
let StringScore = "33a"; // pure number nahi hone pe NaN de dega output me
console.log(StringScore);
console.log(typeof StringScore);
let newNumberScore=Number(StringScore);
console.log(newNumberScore);
console.log(typeof newNumberScore);

*/


// ***************************************************************************

//*************operation


// this is change we change value to negative 
let value =3
let negValue= -value
console.log(negValue);

/*
// this is basic math operation 
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2**3);
console.log(2%3);

*/


// concate two string

let str1="hello"
let str2=" nitish"

console.log(str1+str2);  //=> hello nitish

// some intresting output

console.log("1"+2);    //12
console.log(1+"2");     //12
console.log("1"+2+2);   //122
console.log(1+2+"2");  // 32
