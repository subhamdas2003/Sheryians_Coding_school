console.log("FUNCTIONS");

//method 1

function danceballiye(){
    for(let i=0; i<5; i++){
        console.log(`chak de fatteeee ${i+1} baar!!!`);
    }
}

danceballiye();
console.log("again")
danceballiye();

//method 2
let hny=function(){
    console.log("Happy new Year");
}

hny()

//fat arrow function
let fnc= () =>{
    console.log("UNDER fat arrow funcn");
}

// parameters and argument
function dance(v1){
    console.log(`${v1} naach raha he`);
}

dance("haathi")

function add(v1, v2){
    // console.log(v1,"+", v2,"=",v1+v2);
    console.log(`${v1}+${v2}=${v1+v2}`);
}
add(5,6)


function addition(v1,v2){
    console.log(v1+v2);
}

addition();             //NaN

function addition2(v1,v2){
    console.log(v1,v2);
}
addition2();            //undefiend ubdefiend

function addition3(v1,v2){
    console.log(v1,v2);
}
addition2(1);           // 1 undefiend

// DEfault Value
function addTwoNumbers(v1=0, v2=0){     //declared default value
    console.log(v1+v2);
}
addTwoNumbers();        //0
addTwoNumbers(5,2);     //7

//rest value
function abcd(...val){
    console.log(val);
}
abcd(1,2,3,4,5,6,7);    //(7) [1, 2, 3, 4, 5, 6, 7]

function abc(v1,v2,v3,...val){
    console.log(v1,v2,v3,val);
}
abc(1,2,3,4,5,6,7);     //1 2 3 (4) [4, 5, 6, 7]

//return and early access
function checkReturn(){
    return 25;
}

let valueOfFunction= checkReturn();
console.log(valueOfFunction);       //25



function checkReturn2(v1){
    return 25+v1;
}

let valueOfFunction2= checkReturn2(10);
console.log(valueOfFunction2);       //35

//first class functions

/* JavaScript treats functions as values:
Assign to variables
Pass as arguments
Return from other functions*/
function shout(msg) {
  return msg.toUpperCase();
}
function processMessage(fn) {
  console.log(fn("hello"));
}
processMessage(shout);

//higher order function
// Functions that accept other functions or return functions.
function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}
let double = createMultiplier(2);
console.log(double(5)); // 10

// pure impure function
let x=20;
function pure(){
    console.log("I dont affect any outer variables value im pure function");
}

function huii(){
    a++;
}
//this is an impure function it regulates the value of "a" whivh is a variable after function

//closure: one function which return another function which should use a variable from the parent function
function xyz(){
    let o=30;
    return function(){
        console.log("huiiiii");
        console.log(o);
    }
}

xyz();


//lexical scoping
function abcd(){
    let a=10;
    //cant print b and c here
    function defg(){
        let b=20;
        //can print a and b but not c 
        function ghij(){
            let c=30;
            // can print all a b and c here
        }
    }
}
//IIFE(immidate invoke function Expresion)
(function(){
    console.log("print immidate.")
})();

