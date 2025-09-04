arr= [1,2,3,4,5];

// let [a,b]=arr;          //coppy elements from arr first and second             #  console.log([a,b]);     // [1,2]
let [a,b,,,e]=arr;
// [1,2,-,-,5]      so e=5
// console.log([e]);     // [5]

let arr2=[1,2,3,4,5,6,7,8,9,];
let arr_new=[...arr2];

console.log(arr2);
console.log(arr_new);               //values are same here arr_new is a separate new array copy of arr2
