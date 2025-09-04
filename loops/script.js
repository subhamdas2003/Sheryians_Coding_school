console.log("LOOPS")
// forloop
// while
//do-while
//for in
//for of
// for each


//forloop
for(let i=1; i<=10; i++){
    console.log(i);
}
for(let i=1; i<=10; i++){
    console.log("huiHUi",i);
}


// while
let i=20;
while(i<100){
    console.log(i);
    //run untill the given condition is true
    i+=10;
}

// do while
let j=10;
do{
    console.log(j);
    //run atleast once even if the condition is not true
    j+=10;
}
while(j>100);

//break and continue
for(let i=1; i<100; i++){
    console.log(`number is ${i}`);
    if(i===30){
        break;
    }
    //it will print untill 30
}

for(i=1; i<20; i++){
    if(i%2===0){
        continue;
    }
    console.log(`even ${i}`);
    //skip all even numbers
}