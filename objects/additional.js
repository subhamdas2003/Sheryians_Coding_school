//-------------optional chaining
let user = {
  name: "Amit",
  address: {
    city: "Delhi",
    pincode: 110001
  }
}

console.log(user?.address?.city);    // Delhi  
console.log(user?.profile?.email);  // undefined (no error)

//----------------computed properties
let key = "marks";
let report = {
  [key]: 89
};

console.log(report);
