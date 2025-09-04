//01. access the val of first-name from this object
const user={
    "first-name":"Subham"
}

console.log(user["first-name"])

//sccess age dynamically

let key="age"
const user2={
    age: 26
}

console.log(user2[key]);    //26

//03 destructure name and age from student object

let student={
    name:"Subham",
    age:25
}

let{name,age}=student
console.log(name)
console.log(age)
