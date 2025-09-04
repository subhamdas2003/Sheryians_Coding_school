// 01. add mango at end and pinaple at biggining=======================================

let fruit=["banana", "apple"];
fruit.push("pinapple");
fruit.unshift("mango")

// console.log(fruit);

//02. replace banana with kiwi-------------------------------------------------------

// fruit.pop("banana");
// fruit.unshift("kiwi");

fruit[1]="KIWI";

// console.log(fruit);

// 03.remove last item-----------------------------------------------------------
//use pop()

//04. insert red and blue at index 2-----------------------------------------------
let colours=["black", "white", "orange", "green"];

colours.splice(2,0,"red", "blue");      //[ 'black', 'white', 'red', 'blue', 'orange', 'green' ]

// console.log(colours)

//insert 11 at index 1-=============================================

colours.splice(1,0,11)

// console.log(colours)
/*
[
  'black', 11,
  'white', 'red',
  'blue',  'orange',
  'green'
]
  */

// 05 extract only middle 3 elements from array------------------------------------
let items=[1,2,3,4,5,6]     //from 2 to 4
let newArr=items.slice(1,4);
// console.log(newArr);

//06. get nos less than 10----------------------------------------------------
let arr=[5,10,15,20,4,80]
let lessthan10=arr.filter(function(val){
    return val<10
})
// console.log(lessthan10)

//add all no of this arr using reduce-------------------------------------------------------------
let arr5=[10,20,30,40,50];
let addition=arr5.reduce(function(accumulator, value){
    return accumulator+value;
}, 0)

// console.log(addition)

//08. use .find() to get the first no which is less than 10-------------------------
let arr1=[12,15,3,8,20]

let less10= arr1.find(function(value){
    return value < 10
})

// console.log(less10);

//use .some() to find is there anyone whose mark bellow 35-------------------------
let arr2= [45,60,28,90];
// console.log(arr.some(function(val){
//     return val<35;
// }))

// 10. check everyone is even or not-----------------------------------------------
// console.log(arr2.every(function(val){
//     return val%2===0
// }))

//12. merge using spread=======================================================

let a=[1,2]
let b=[3,4]

let c=[...a, ...b]
console.log(c)

//13. add con. using spread operator
let countries=["usa", "uae", "uk"]
let all_countries=["IND", ...countries];

console.log(all_countries)

//clone the array using spread operator

let orgArr=[4,6,9,0,2]
let cloneArr=[...orgArr]

console.log(cloneArr)


