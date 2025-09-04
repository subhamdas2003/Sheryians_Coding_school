let arr=[1,2,3,4,5,6];
// console.log(arr);
///////==============================push pop sift unsift=================//////////
arr.push(100);
// console.log(arr);

arr.pop();
// console.log(arr);       //used to remove last element

arr.shift();
// console.log(arr)        //remove the first element

arr.unshift(10);
// console.log(arr)        //add an element at first
////////////////****************************************slice and splice***********************////////
let arr2=[1,2,3,4,5,6,7,8,9]
// console.log(arr2)
// console.log(arr2.slice(2,4))         //  [3,4]

// console.log(arr2.splice(0,3));         //    [1,2,3]
// console.log(arr2)                       //  [4,5,6,7,8,9]
//////////////////-----------------------------reverse-------------------------------------------/////
let arr3=[10,20,30,40,50,60,70]
arr3.reverse();
// console.log(arr3);               //this reverse the array

let arr4=[16,893,65,0,84,16,65,65,90,146,1,10];
// arr4.sort();
// console.log(arr4);           //sort the array from min to max

//************************************** */ for assending and decending order******************************//

let arr5=[10,30,50,90,1,40]
//=====================================assending order=============================////////
// console.log(arr5.sort(function(a,b){
//     return(a-b);
// }))
//======================================decending order=============================//////
// console.log(arr5.sort(function(a,b){
//     return(b-a);
// }))

////////////===============for-each, map, filter================////////////
let arr6=[11, 62,3,4,25];

// //---------------------------------- for each----------------------////
// arr6.forEach(function (val){
//     console.log(val+5);
// })

// //------------------------------------ map-------------------------///////
// let new_arr=arr6.map(function(val){
//     return 10;
// })

// console.log(new_arr);       //[10,10,10,10,10]

// let new_arr2=arr6.map(function(val){
//     if(val>10){
//         return 10;
//     }
// })

// console.log(new_arr2);       // [ 10, 10, undefined, undefined, 10 ]

//--------------------------filter----------------------------------////////
let arr7=[1,2,3,4,5,6,7,8,9];
let new_arr2 = arr7.filter(function(val){
    if(val>4)   return true;
})

// console.log(new_arr2);      //[ 5, 6, 7, 8, 9 ]

//----------------------------reduce-------------------------------------/////
let arr8=[1,2,3,4,5,6];

let new_arr3=arr8.reduce(function(accumulator, val){
    return accumulator+val;         //it will add all nos,   at first accumulator=0, at first 0+val(1)=1, now ac=1, again ac(1)+val(2)=3,  now ac=3, again ac(3)+val(3)=6......
}, 0);
// console.log(new_arr3);      //21  

////////---------------find, some, every-----------------------///
////////---------------------find------------------------------///
let arr9=[1,2,3,4,5,6,7,8,9,10,11,12]

let va =arr9.find(function(val){
    return val===1;
})                                  // if find that no then will return that otherwise it will show undefiened
let va2 =arr9.find(function(val){
    return val===90;
})                                  // if find that no then will return that otherwise it will show undefiened

// console.log(va);        //1
// console.log(va2);        //undefiened

///////////--------------------some------------------------------------///
let arr10=[10,20,30,50,60,70,90];

let any=arr10.some(function(val){
    return val>60                   //it will show true if there is any value greater than 60
})
let any2=arr10.some(function(val){
    return val>100                  //it will show true if there is any value greater than 100 otherwise false
})

// console.log(any)                //true
// console.log(any2)                //false

/////////-------------------------every---------------------------------///
let every1=arr10.every(function(val){
    return val>60                   //it will show TRUE if *EVERY* value is greater than 60
})

let every2=arr10.every(function(value){
    return value>5                  ////it will show TRUE if *EVERY* value is greater than 5
})
console.log(every1);                //FALSE
console.log(every2);                //TRUE



