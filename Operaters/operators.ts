let a:number=10,b:number=20;

//Arithmetic Operators
console.log("---------------Arithmetic Operators------------------");
console.log("Addition of a and b is : ",a+b);
console.log("Subtraction of a and b is : ",a-b);
console.log("Multiplication of a and b is : ",a*b);
console.log("Division of a and b is : ",a/b);//quotient
console.log("Modulus of a and b is : ",a%b);//remainder
console.log("",a**b);//a raised to the power of b


//Assignment Operators
console.log("---------------Assignment Operators------------------");
a=100;
b=50;

/*a=a+b;
console.log("Value of a after a=a+b is : ",a);*/

a+=b;//a=a+b
console.log("Value of a after a+=b is : ",a);
a-=b;//a=a-b
console.log("Value of a after a-=b is : ",a);
a*=b;//a=a*b
console.log("Value of a after a*=b is : ",a);
a/=b;//a=a/b
console.log("Value of a after a/=b is : ",a);
a%=b;//a=a%b
console.log("Value of a after a%=b is : ",a);  

//Relational Operators-Relational operators are used to compare two values and return a boolean value (true or false) based on the comparison.
// > < >= <= == != ===(Strict equality) !==(Strict inequality)
console.log("---------------Relational Operators------------------");
a=10;
b=20;

console.log("Is a greater than b : ",a>b);
console.log("Is a less than b : ",a<b);
console.log("Is a greater than or equal to b : ",a>=b); 
console.log("Is a less than or equal to b : ",a<=b);
console.log("Is a equal to b : 1",a==b);
console.log("Is a not equal to b : ",a!=b);
console.log("Is a strictly equal to b : 2",a===b);
console.log("Is a strictly not equal to b : ",a!==b);

//Difference between == and ===
console.log("---------------Difference between == and ===------------------");
let num1:any=10; // Number
let num2:any="10"; // String
console.log("Is num1 equal to num2 using == : ",num1==num2);
// == compares values after type conversion, so it returns true because the string "10" is converted to the number 10 before comparison.
console.log("Is num1 equal to num2 using === : ",num1===num2);
// === compares both value and type, so it returns false because num1 is a number and num2 is a string.

//Logical Operators-Logical operators are used to combine multiple boolean expressions and return a boolean value based on the logical operation performed.
// && (Logical AND), || (Logical OR), ! (Logical NOT)
// Returns true if both operands are true, otherwise returns false.
//Works on boolean values and returns true if at least one of the operands is true, otherwise returns false.
// b1              b2               &&          ||           !
//----------------------------------------------------------------
// true            true             true        true         false
// true            false            false       true         false
// false           true             false       true         true
// false           false            false       false        true
console.log("---------------Logical Operators------------------");
let x:boolean=true;
let y:boolean=false; 
console.log("Logical AND of x and y is : ",x&&y);//false
console.log("Logical OR of x and y is : ",x||y); //true
console.log("Logical NOT of x is : ",!x);//false
console.log("Logical NOT of y is : ",!y);//true

// Combination of Logical Operators & Relational Operators
console.log("---------------Combination of Logical Operators & Relational Operators------------------");
let p:number=10;
let q:number=20;
console.log("Is p greater than 5 AND q less than 30 : ",(p>5)&&(q<30));//true
console.log("Is p less than 5 OR q greater than 30 : ",(p<5)||(q>30));//false


//Increment and Decrement Operators-Increment and decrement operators are used to increase or decrease the value of a variable by 1. 
// They can be used in both prefix and postfix forms.
console.log("---------------Increment and Decrement Operators------------------");
let num:number=10;
console.log("Value of num is : ",num);
num++;//Postfix Increment
console.log("Value of num after Postfix Increment is : ",num);

++num;//Prefix Increment
console.log("Value of num after Prefix Increment is : ",num);

num--;//Postfix Decrement
console.log("Value of num after Postfix Decrement is : ",num);

--num;//Prefix Decrement
console.log("Value of num after Prefix Decrement is : ",num);

let res:number=num++;
console.log("Value of res after Postfix Increment is : ",res);//10
console.log(num);

//Ternary Operator-
// The ternary operator is a shorthand way of writing an if-else statement. 
// It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

//exp ? true : false
//exp ? res1 : res2
console.log("---------------Ternary Operator------------------");
let age:number=18;
let result:string=(age>=18)?"You are eligible to vote":"You are not eligible to vote";
console.log(result);

let c:number=10,
d:number=20;
let max:number=(c>d)?c:d;
console.log("Maximum of c and d is : ",max);

let personAge:number=25;
let result1:String=(personAge>=18)?"Person is an adult":"Person is a Minor";
console.log(result1);





