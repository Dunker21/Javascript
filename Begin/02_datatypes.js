"use strict"; //treat all JS code as newer version

//alert(3+9) // it is not allowed in node js

let name="Vinay"
let age=20
let expectation=392384820484023231n
let single= true
let income=null
let skills=undefined

// console.log(typeof(name));
// console.log(typeof(age));
// console.log(typeof(expectation));
// console.log(typeof(single));
// console.log(typeof(income));
// console.log(typeof(skills));

// number => 2 to power 53
// bigint
// string =>
// boolean
// true/ false
// null => standalone value
// undefined


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive)      Heap(Non-primitive)
let player="drakula"
let controller=player
controller="Justin"

console.log(player);
console.log(controller);// it is like call by value




let obj={
    name:"vinay",
    age:20
}

let adder=obj

adder.name="dunkirk" // it is like call by reference

console.table([obj,adder])