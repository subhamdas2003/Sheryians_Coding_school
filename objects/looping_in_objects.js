let obj={
    name:"subham",
    age: 21,
    email: "subhamdasbikky2003@gmail.com"
};
//to access keys through loop
for(let key in obj){
    console.log(key);
}
// ____________________
// op: 
// name
// age
// email
// ___________________
//to access key values though loop
for(let key in obj){
    console.log(obj[key]);
}
// ___________________
// subham
// 21
// subhamdasbikky2003@gmail.com
// ___________________
//to print both
for(let val in obj){
    console.log(val,":", obj[val])
}
// _________________________
// name: subham
// age :21
// email: subhamdasbikky2003@gmail.com

let obj2={
    name:"Tapas",
    age: 22,
    email: "tapasranjanpatra@gmail.com"
};
//to access keys through loop
for(let variable in obj2){
    console.log(variable)
}
// ___________________
// op: 
// name
// age
// email
for(let variable in obj2){
    console.log(obj2[variable])
}
// _________________________
// op: 
// Tapas
// 22
// tapasranjanpatra@gmail.com
// ___________________________
//to print both
for(let varName in obj2){
    console.log(varName, ":", obj2[varName])
}
// name Tapas
// age 22
// email tapasranjanpatra@gmail.com


