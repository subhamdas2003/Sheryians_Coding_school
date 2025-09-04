//////////////////================declaration and access===================////////////////
let obj={
    first_name:"Subham",
    //"key":"Value"
    last_name: "Das",
    age:21,
    pin:759020,
    state:"Odisha"
}

console.log(obj)

console.log(obj.age)

console.log(obj['pin'])
console.log(obj['first_name'])


let another_firstName="first_name";
//so now we can access first_name by nother_firstName 
console.log(obj[another_firstName])             //subham

//===================================nesting and deep access============================/////////////
const user={
    name: "harsh",
    age: 21,
    address:{
        city:"Bhubaneswar",
        pin:"756014",
        location:{
            lat: 23.2,
            lng: 77.4
        }
    }
}
//-------------for gettin the lng :
let longitude=user.address.location.lng;
console.log(longitude);             //77.4

//--------------for gettin the lng and lat at once:

let {lat,lng}=user.address.location;
console.log({lat,lng});             // { lat: 23.2, lng: 77.4 }
// ------------now they both are separate variables

console.log(lat)                //23.2
console.log(lng)                //77.4



