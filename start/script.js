//var, let, const
console.log("Hiiii")

const a="15";
const b=5;
const c=17;

d=(a+b+c);
console.log(d);
console.log(typeof(d));

console.log(Number(d)+5);
console.log(`this is ${d}`);

let name="90";
const roll=123;

console.log("My name is",name,"and my roll number is",roll);

console.log(`My name is ${name} and my roll number is ${roll}`);


//re-assignment and re-declaration
var x=12;
x=30;
var x=50;          // re-declaration & re-assignment allowed in var
console.log(x);

let y=20;
y=40;               // re-assignment allowed in let but not re-declaration
console.log(y);

// let y=50;            re-declaration not allowed in let

//temporal dead zone
// console.log(z);     not allowed   cant access before initialization
let z=100;
console.log(z);

//hoisting impact per type

console.log(e); //op: undefined
var e=70;       //devides in 2 parts
//1. var e;  (undefined)
//2. e=70;
//var e=undefined go to first line

// console.log(age); //not allowed cant access before initialization
// let age=25;

//scope
var f=10;
{
    var f=20;   //re-declaration and re-assignment allowed in var
    console.log("Inside: ",f);
}
console.log("Outside",f);

let g=15;
{
    // let g=25;   //re-declaration inside block
    let g=25;         //re-assignment allowed in let
    console.log("Inside: ",g);
}
console.log("Outside",g);

if(true){
    let h=55;
    var i=65;
    const j=75;
}
//console.log(h);  //not allowed h is block scoped
console.log(i);    //allowed i is function scoped
//console.log(j);  //not allowed j is block scoped

