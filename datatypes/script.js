// 2 types of datatypes: 1. Primitive 2. Non-primitive
// 1. Primitive datatypes: 1.Number 2.String 3.Null 4.Undefined 5.Symbol 6.BigInt 7.Boolean

// 1.Numbers
let a=12;
let b=a;

console.log("a:",a,"b: ", b);

// 2. strings

// single quotes: ' '
// double quotes: " "
// backticks: ` `
// these are used to wrap string values
let str1='Hello';

console.log(`str1: ${str1}`);

// 3.null and undefined
let mark=null;
console.log(typeof(mark));  //object
console.log(mark);        //null

let xyz;   //undefined
console.log(typeof(xyz));
console.log(xyz);   //undefined


// 4.symbol
let sym1 = Symbol('unique');
let sym2 = Symbol('unique');

console.log(sym1===sym2);  //false

let obj={
    uid: 1,
    name: 'John',
    age: 21,
    email: 'subhamdasbikky2003@gmail.com'
}

console.log(obj);   //{uid: 1, name: 'John', age: 21, email: 'subhamdasbikky2003@gmail.com'}

let u1=Symbol('uid'); //unique
obj[u1]=123;
console.log(obj);   //{uid: 1, name: 'John', age: 21, email: 'subhamdasbikky2003@gmail.com', Symbol(uid): 123}

console.log(typeof(sym1));  //symbol

// 5.bigNumber

let bigNumber= Number.MAX_SAFE_INTEGER;
console.log(bigNumber);  //9007199254740991
console.log(typeof(bigNumber));  //number

let c= bigNumber+10;
console.log(c);  //9007199254741001

let d= bigNumber+30;
console.log(d);  //9007199254741000

let bigInt= BigInt(9007199254740991);
console.log(bigInt);  //9007199254740991n
console.log(typeof(bigInt));  //bigint

// 6. Boolean

let isLoggedIn=true;
console.log(typeof(isLoggedIn));  //boolean
console.log(isLoggedIn);  //true

// 2. Non-primitive datatypes: 1.Object 2.Array 3.Function
// 1.Object
let person={
    name: 'John',
    age: 21,
    email: 'xyz@mai.cm'
}
console.log(typeof(person));  //object
console.log(person);  //{name: 'John', age: 21, email: 'xyz@mai.com

// 2.Array
let arr=[1,2,3,4,5];
console.log(typeof(arr));  //object
console.log(arr);  //[1, 2, 3, 4, 5]

// 3.Function
function sum(a,b){
    return a+b;
}
console.log(typeof(sum));  //function
console.log(sum(2,3));  //5

//type conversion
let a1=10;   //number
let b1="20"; //string
let c1=true; //boolean
let d1=null; //object
let e1=undefined; //undefined
let f1=Symbol('unique'); //symbol
let g1=BigInt(9007199254740991); //bigint
let h1={name: 'John', age: 21}; //object
let i1=[1,2,3,4,5]; //object
let j1=function sum(a,b){return a+b}; //function

console.log(typeof(a1), typeof(b1), typeof(c1), typeof(d1), typeof(e1), typeof(f1), typeof(g1), typeof(h1), typeof(i1), typeof(j1));

let a2=String(a1);
let b2=Number(b1);
let c2=Number(c1);
let d2=String(d1);
let e2=String(e1);
// let f2=Number(f1); //not possible
let g2=String(g1);
let h2=String(h1);
let i2=String(i1);
let j2=String(j1);

console.log(typeof(a2), typeof(b2), typeof(c2), typeof(d2), typeof(e2), /*typeof(f2),*/ typeof(g2), typeof(h2), typeof(i2), typeof(j2));
console.log(a2, b2, c2, d2, e2, /*f2,*/ g2, h2, i2, j2);

// dynamic typing 
let e=10;   //number
e="Hello"; //string
e=true;    //boolean

console.log(e);
console.log(typeof(e));

// concatination
let m=10;
let n=20;
let o="30";
console.log(m+n+o);  //3030
console.log(o+m+n);  //301020

let t=50;
let u="40";
console.log(t+u);  //5040
console.log(typeof(t+u));  //string
console.log(t+Number(u));  //90
console.log(typeof(t+Number(u)));  //number

console.log(t-u);          //10
console.log(typeof(t-u));  //number 