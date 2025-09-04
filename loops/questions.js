console.log("qsns");

// // q1. 1 to 10 using for-loop
for(i=1; i<11; i++){
    console.log(i);
}

//q2. 10 to 1 using while
let j=10;
while(j>0){
    console.log(j);
    j--;
}

//q3. 1 to 15 odd no using while
let k=1;
while(k<16){
    if(k%2!==0){
        console.log(k);
    }
    k++;
}

//q4. table og 5
for(let i=1; i<11; i++){
    console.log(5,'*',i,5*i)
}
//or
for(let i=1; i<11; i++){
    console.log(`5*${i}=${5*i}`);
}


//sum of first 100 natural no
let sum=0;
for(let i=1; i<101; i++){
    sum=sum+i;
}
console.log(sum);

//n*[(n+1)/2]  rile for first n natural no
console.log(100*((100+1)/2));

//print all no devided by 3 between 1 & 50
for(let i=1; i<50; i++){
    if(i%3==0){
        console.log(i);
    }
}

//ask user a number and print from 1 to that number is odd or even
// let num=prompt("give a number:");
let num=10;
for(let i=1; i<=num;i++){
    if(i%2===0){
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
}

//count how many numbers from 1 to 100 dividible by both 3 and 5
let count =0;
for(let i=1; i<=100; i++){
    if(i%3===0 && i%5===0){
        count++;
    }
}
console.log(count);

//stop at first multiple of 7
for(let i=1; i<100; i++){
    if(i%7===0){
        break;
    }
    console.log(i);
}

//skipps multiples of 3 between 1 to 20
for(let i=1; i<21; i++){
    if(i%3===0){
        continue;
    }
    console.log(i);
}

// print 5 odd numbers only but have to gie the loop from 1 to 100
let odds=0;
for(let i=1; i<101; i++){
    if(i%2==1){
        odds++;
        if(odds===6){
            break;
        }
        console.log(i);
    }
}

