let obj={
    name:"subham",
    age: 21,
    email: "subhamdasbikky2003@gmail.com"
};

//-----------------------------copy using spread operator
let obj2={...obj};
console.log(obj2)

//-------------------------------using Object.assign()
let obj3=Object.assign(obj)
console.log (obj3)

let obj4=Object.assign({pincode: 759020},obj)           //here pincode will assign to the new object
console.log(obj4)
// --------------------
                                                                                // {
                                                                                //   pincode: 759020,
                                                                                //   name: 'subham',
                                                                                //   age: 21,
                                                                                //   email: 'subhamdasbikky2003@gmail.com'
                                                                                // }


let details={
    name:"subham",
    age: 21,
    email: "subhamdasbikky2003@gmail.com",
    address:{
        city:"Dhenkanal",
        state:"Odishs"
    }
};

let details2={...details}
details2.address.city="Cuttack"

console.log(details2.address.city)                 // here te city becomes cuttack its ok
console.log(details.address.city)                   //but here the main object is also changed

//now it comes to deep clone
//--------------------------------------------Deep clone-----------------
// convert to string and then again to real form
let india={
    name: "bharat",
    population: 750,
    states: 29,
    HighestReligion: "Hindu",
    Capital: "Delhi"
}


// now copy
let newIndia=JSON.parse(JSON.stringify(india))



console.log(JSON.stringify(india))          //{"name":"bharat","population":750,"states":29,"HighestReligion":"Hindu","Capital":"Delhi"}
// to convert again to previous state

console.log(JSON.parse(JSON.stringify(india)))          //back to normal


