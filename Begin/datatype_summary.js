// primitive datatypes
// 7 types : SSBBNNU
// Symbol, String , Boolean , BigInt, Number , Null, Undefined.

//Non-primitive datatypes 
// Arrays , Objects , Functions


let num = Symbol('abc')
let newNum = Symbol('abc')

// console.log(num === newNum);  // false 

let bigNumber = 213789263413423324n // only by writing " n " at the end you will get 'bigint' otherwise you will always get 'Number'

 // arrays

 let seasons=["winter","summer","autumn","spring","rainy"]

 let obj = {
    name:"vinay",
    age:20
 }

 
 let fun = function() {
     
     console.log(obj)
    
     
    }
    function print() {
       
        console.log(seasons)
        
 }
//  fun();
//  print();

 function multi(a,b){

   for(let i=1;i<= 10;i++)
   {
    console.log(i*a)
   }


 }


multi(3,4)

console.log(typeof fun);  // if you write fun() it will call function and show undefined as a data type