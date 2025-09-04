console.log("FLOW CONTROL");
//if else
if (12 > 17) {
    console.log("12>17");
} else {
    console.log("17>12");
}

// if else else if
let age = 48;
if (age >= 18) {
    console.log("You can drive !");
} else if (age <= 0) {
    console.log("Enter a valid age !")
}
else if (age < 18) {
    console.log("You are underage !");
}

//switch case
let a = 3;

switch (a) {
    case 1:
        console.log("choosed 1");
        break;
    case 2:
        console.log("choosed 2");
        break;
    case 3:
        console.log("choosed 3");
        break;
    case 4:
        console.log("choosed 4");
        break;
    case 5:
        console.log("choosed 5");
        break;
}

function getGrade(val){
    if(val<30) return 'Fail'
    else if(val<60) return 'c'
    else if(val<75) return 'B'
    else if(val<100) return 'A'
}

console.log(getGrade(20));

//rock paper sizor logic
function rps(user, comp){
    if(user===comp) return "DRAW"
    if(user==="rock" && comp==="scissor") return "user";
    if(user==="scissor" && comp==="rock") return "computer";
    if(user==="rock" && comp==="paper") return "computer";
    if(user==="paper" && comp==="rock") return "user";
    if(user==="paper" && comp==="scissor") return "computer";
    if(user==="scissor" && comp==="paper") return "user";
}

console.log(rps("rock", "rock"));