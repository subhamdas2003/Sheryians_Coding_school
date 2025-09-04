console.log("Arrays");

//method 1
let arr1=[];
arr1=[100,200,3000];
console.log(typeof(arr1))   //object
console.log(arr1)

//method 2
let arr2= new Array();
// arr2=[50,60,70];

// method 3
let arr=[10,20,30,40,50];
console.log(typeof(arr))    //object
console.log(arr);

//access array emements
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

console.log(arr[10]);   //undefiened

//modify value
// before arr=[10,20,30,40,50];
arr[4]=90;      //after arr=[10,20,30,40,900];
console.log(arr);

// array methods