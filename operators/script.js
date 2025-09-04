console.log("operators");

//arithmatic operators
console.log(5+3);  //8
console.log(5-3);  //2
console.log(5*3);  //15
console.log(5/3);  //1.6666
console.log(5%3);  //2
console.log(5**3); //125

//comparison operators

console.log(5==3);  //false
console.log(5!=3);  //true
console.log(5>3);   //true
console.log(5<3);   //false
console.log(5>=3);  //true
console.log(5<=3);  //false
console.log(5==='5'); //false
console.log(5!=='5'); //true
console.log(5=='5');  //true
console.log(5!='5');  //false
console.log(5===5); //true

//assignment operators
let a=5;
let b=3;
let c;
let d;
d=a;  //d=5
console.log(d);

d+=b;  //d=d+b  =>  d=5+3=8
console.log(d);
d-=b;  //d=d-b  =>  d=8-3=5
console.log(d);
d*=b;  //d=d*b  =>  d=5*3=15
console.log(d);
d/=b;  //d=d/b  =>  d=15/3=5
console.log(d);
d%=b;  //d=d%b  =>  d=5%3=2
console.log(d);
d**=b; //d=d**b =>  d=2**3=8
console.log(d);
d++;   //d=d+1
console.log(d);
d--;   //d=d-1
console.log(d);
d=--a + b++;  //d=4+3=7  a=4  b=4
console.log(d);
d=++a + ++b;  //d=5+5=10  a=5  b=5
console.log(d);

//logical operators
console.log(true && true);   //true
console.log(true && false);  //false
console.log(false && true);  //false
console.log(false && false); //false
console.log(true || true);   //true
console.log(true || false);  //true
console.log(false || true);  //true
console.log(false || false); //false
console.log(!true);  //false
console.log(!false); //true
console.log( !(5>3) ); //false
console.log( (5>3) && (3<2) ); //false
console.log( (5>3) || (3<2) ); //true

//unary operator
console.log( typeof(6) ); //number
console.log( typeof(name) ); //string

let x=15;
console.log( ++x ); //16
console.log( x++ ); //16
console.log( x );   //17
console.log( --x ); //16
console.log( x-- ); //16
console.log( x );   //15

let y="90";
console.log(typeof(y));     //string
console.log(typeof(+y));    //number
console.log(typeof(y));     //string

let z=[5,6,7];
console.log(z)
console.log(typeof(z))      //object
console.log(z instanceof Array) //true
let obj={}
console.log(obj instanceof Object)//true
console.log(obj instanceof Array)//False
// console.log(instanceof(z));  //error


//ternary operator
// ?:
a=30;
b=50
console.log((a>b)?("a is bigger"):("b is bigger"));
(a%2===0)?console.log("Devided by 2"):("its an odd no");
