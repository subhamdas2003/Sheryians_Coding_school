// Object.keys(object name)

let object1={
    name:"subham",
    age: 21,
    mail:"subhamdasbikky2003@gmail.com"
}

console.log(Object.keys(object1))
// op: [ 'name', 'age', 'mail' ]            this put all the keys into an array

//object.entries(obj name)
console.log(Object.entries(object1))            //this create the array of each key and value
/*
[
  [ 'name', 'subham' ],
  [ 'age', 21 ],
  [ 'mail', 'subhamdasbikky2003@gmail.com' ]
]
*/