//do while loop : A do while loop is a control flow statement that executes a block of code at least once,
//  and then repeatedly executes the block as long as a specified condition evaluates to true. 
// The syntax for a do while loop in TypeScript is as follows:

/*

do{
//statements to be executed;
}while(condition);

*/

//Example 1 : Print numbers from 1 to 5
let Num:number=1;
console.log("Numbers from 1 to 5 are : ");
do{
    console.log(Num);
    Num++;
}while(Num<=5);

//Example 2: 10 9 8.......1
let Num1:number=10;
console.log("Numbers from 10 to 1 are : ");
do{
    console.log(Num1);
    Num1--;
}while(Num1>=1);