// print 5 number 1 2 3 4 5

/*
while(condition){
  // code to be executed
}
*/
let i:number=1;
while(i<=5){
  console.log(i);
  i++;
}

// example 2: print even numbers from 1 to 10
//method 1
let j:number=2;
while(j<=10){
    console.log(j);
    j+=2;
}

//method2 
let k:number=1;
console.log(" method 2 :Even numbers from 1 to 10 are : ");
while(k<=10){
    if(k%2==0){
        console.log(k);
    }
    k++;
} 

// Example 3 : Print odd numbers from 1 to 10
let m:number=1;
console.log("Odd numbers from 1 to 10 are : ");
while(m<=10){
    console.log(m);
    m+=2;
}

//Another method
let n:number=1;
console.log("Another method : Odd numbers from 1 to 10 are : ");
while(n<=10){
    if(n%2!=0){
        console.log(n);
    }
    ++n;
}

//Example 4: print numbers from 10 to 1
let o:number=10;
console.log("Numbers from 10 to 1 are : ");
while(o>=1){
    console.log(o);
    o--;
}

//another method
while(true){
    console.log(1);
}