//if condition

/*
if(condition){
    //code to be executed if condition is true
}
*/

//Example1 : if age is greater than or equal to 18, then print "You are eligible to vote"
console.log("---------------if condition------------------");
let age1:number=20;
if(age1>=18){
    console.log("You are eligible to vote");
}

// if else condition
/*
if(condition){
    //code to be executed if condition is true
}
    else{
    //code to be executed if condition is false
}
*/

//Example2 : if num is divisible by 2, then print "Even Number" else print "Odd Number"
console.log("---------------if else condition------------------");
let num:number=7;
if(num%2==0){
    console.log(num," is a Even Number");
}
else{
    console.log(`${num} is a Odd Number`);
}


//Example 3 : if marks is greater than or equal to 40, then print "Pass" else print "Fail"
console.log("---------------if else condition------------------");
let marks:number=35;
if(marks>=40){
    console.log("Pass");
}
else{
    console.log("Fail");
}

//if else if condition-nested if else condition
/*
if(condition1){
    //code to be executed if condition1 is true
}
    else if(condition2){
    //code to be executed if condition2 is true
}
    else{
    //code to be executed if both condition1 and condition2 are false
}
*/

//example 4: if marks is greater than or equal to 90, then print "A Grade" 
// else if marks is greater than or equal to 80, then print "B Grade" 
// else if marks is greater than or equal to 70, then print "C Grade" 
// else if marks is greater than or equal to 60, then print "D Grade" 
// else print "Fail"

let marks1:number=71;
console.log("---------------if else if condition------------------");

if(marks1>=90 && marks1<=100){
    console.log(" A Grade");
}
else if(marks1>=80 && marks1<90){
    console.log("B Grade");
}
else if(marks1>=70 && marks1<80){
    console.log("C Grade");
}
else if(marks1>=60 && marks1<70){
    console.log("D Grade");
}
else{
    console.log("Fail");
}

//Example 5: Browser selection

let browser:string='XYZ';
console.log("---------------if else if condition------------------");
if(browser==="Chrome"){
    console.log("You are using Chrome browser");
}
else if(browser==="Firefox"){
    console.log("You are using Firefox browser");
}
else if(browser==="Edge"){
    console.log("You are using Edge browser");
}
else if(browser==="Safari"){
    console.log("You are using Safari browser");
}
else{
    console.log("You are using other browser");
}

//Switch case statement
/*
switch(expression){
    case value1:   statemnets;
                 break;  
     case value2:    statements;
              break;
     case value3:    statements;
              break;
     default:   statements;

}   
*/  

//Example 6: Depending on the day of the week, 
// print the name of the day
console.log("---------------Switch case statement------------------");
let day:number=1;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}     

//Example 7 : The switch statement can also include an expression
let x:number=10,y :number=5;
console.log("---------------Switch case statement------------------");
switch(x+y){
    case 10:
        console.log("The sum is 10");
        break;
    case 15:
        console.log("The sum is 15");
        break;
    case 20:
        console.log("The sum is 20");
        break;
    default:
        console.log("The sum is not 10, 15 or 20");
}   




