// For Loops : A for loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition. 
// The for loop is useful when the number of iterations is known before entering the loop.
console.log("---------------For Loop------------------");
/*
for(initialization; condition; increment/decrement){
    //statements to be executed;
}

*/
//Example 1 : Print numbers from 1 to 10
for(let i:number=1;i<=10;i++){
    console.log(i);
}

//Example 2: print even numbers from 1 to 20
console.log("Even numbers from 1 to 20 are : ");
for(let i:number=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}

//Example 3: print odd numbers from 1 to 20
console.log("Odd numbers from 1 to 20 are : ");
for(let i:number=1;i<=20;i++){
    if(i%2!=0){
        console.log(i);
    }
}

//Example 4 : Print 10 to 1 in reverse order
console.log("Numbers from 10 to 1 are : ");
for(let i:number=10;i>=1;i--){
    console.log(i);
}


// example 5
let i:number;
console.log("Numbers from 1 to 5 are : ");
for(i=1;i<=5;i++){
    console.log("Value of i is : ",i);
}

