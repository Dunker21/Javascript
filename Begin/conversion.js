let age = "20"
let value= true
let none = null
let trash= "123abs"

// console.log(typeof(age))
// console.log(typeof(value))
// console.log(typeof(none))
// console.log(typeof(trash))

let newAge= Number(age)
let newValue= Number(value)
let newNone= Number(none)
let newTrash= Number(trash)

// console.log(typeof(newAge))
// console.log(typeof(newValue))
// console.log(typeof(newNone))
// console.log(typeof(newTrash))

// console.log(newAge) // it will return 20 cause it is converted into the number
// console.log(newValue) // it will return 1 cause it is a boolean
// console.log(newNone) // it will return 0 cause it is null
// console.log(newTrash) // it will return Nan cause it can't convert it into the number

let theBoolean = 1
let FBoolean = 0
let name="vinay"
let nname=""

let NewBoolean = Boolean(theBoolean)
console.log(NewBoolean);

let newFBoolean = Boolean(FBoolean)
console.log(newFBoolean);

let StrBoolean = String(theBoolean)
console.log(StrBoolean);

let newName= Boolean(name)
console.log(newName)

let newNname= Boolean(nname)
console.log(newNname)

// 1=> true;  0=>false;
//"" => false
//"vinay" => true