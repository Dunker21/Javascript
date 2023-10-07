let name= "Vinay"
let kills="12"

// console.log(name+" "+kills); // most outdated way to merge strings don't use this

console.log(`My name is ${name} and i have ${kills} kills`); //Latest and smartest ways to pass parameters into an expression

// `` => these are back ticks which is used in above statement

// The JavaScript *prototype* property allows you to add new properties to objects:

const pegrun= new String("Vinay")
// with this new keyword we are making pegrun an object
console.log(pegrun[0]);
//this indexing[] is not of an array but of an object

/* 
[0]:"V"      [0]=> is the key and  "V" is the value 
[1]:"i"
[2]:"n"
[3]:"a"
[4]:"y"
*/ 
// so we access these values by []
console.log(pegrun.__proto__)  //this is the way to write prototype in js
//--------------------------------------------------------------------------
console.log(pegrun.length);

//--------------------------------------------------------------------------
console.log(pegrun.toUpperCase()); //It is necessary to write () after the function
// toUpperCase is a function and we can and use this function by 
// writing this toUpperCase() not this toUpperCase

//--------------------------------------------------------------------------
console.log(pegrun.concat(" Yadav"));

//--------------------------------------------------------------------------
console.log(pegrun.charAt(3));


//--------------------------------------------------------------------------
let lowerChar= pegrun.toLowerCase()
console.log(lowerChar);

//--------------------------------------------------------------------------
const sliceChar = pegrun.slice(-5,3)
console.log(sliceChar);

const newString = "     Space      "
console.log(newString);
//--------------------------------------------------------------------------
console.log(newString.trim()); // It will remove all the spaces from the constant

//--------------------------------------------------------------------------
console.log(newString.bold());

const url ="https://google.com/first%23984page"

//--------------------------------------------------------------------------
console.log(url.replace("%23984","--")) // It will replace provided item with given location or item



//--------------------------------------------------------------------------
console.log(url.includes("google")) //It check if this "google" exists in that constant
console.log(url.includes("Sunar Pichai"))

//--------------------------------------------------------------------------
const address = "H.no- 381, Rajokari, New Delhi, India"
// I want to split these words within these , 
// and convert these split into an **Array**
console.log(address.split(','));
//You can give limit to it as well

//--------------------------------------------------------------------------
console.log(address.split(',',3));

//--------------------------------------------------------------------------
const animal = "lion tailed macaque"

//--------------------------------------------------------------------------
console.log(pegrun.valueOf()); 
//--------------------------------------------------------------------------
console.log(animal.charCodeAt(4));
//--------------------------------------------------------------------------
console.log(animal.codePointAt(4));
