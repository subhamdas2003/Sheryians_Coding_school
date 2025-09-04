console.log("Practice Function")

//convert it into arrow function
// function multiple(a,b){
//     return(a*b);
// }

let  multiply= (a,b)=>{
    return(a*b);
}
console.log(multiply(10,5));

function getScore(...scores){
    let total=0;
    scores.forEach(function(val){
        total=total+val;
    });
    return total;
}
console.log(getScore(10,20,30,40,50));


function checkAge(age){
    if(age>18) return "allowed";
    return "not allowed";
}
console.log(checkAge(20));

function abcd(val){
    val();
}
abcd(function(){
    console.log("hey")
})

//write a bmi calculator
function bmi(weight, height){
    return weight/(height*height);
}

console.log(bmi(65, 1.7).toFixed(2));       //toFixed(2) give 2 decimal no

//greet function with default name
function greet(name= "guest"){
    console.log(`hello ${name}, nice to meet you !`);
}

greet();

// create a reusable discount calculator
function discountCalculator(discount){
    return function (price){
        return price-price*(discount/100);
    }
}
let discounter = discountCalculator(10);
console.log(discounter(200));

//counter
function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}

let c= counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

//create a function to double a value
function double(val){
    return val*2;
}
console.log(double(10));

//use iffie to isolate a variable
(function (){
    const password="secret password";
    console.log(password);
})();
//unable to access this outside

