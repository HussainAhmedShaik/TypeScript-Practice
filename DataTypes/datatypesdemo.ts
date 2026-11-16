/*
1.Premitive Data Types(Built-in Data Types)
Number, String, Boolean, Null, Undefined, Symbol, BigInt,Any,Union Type,Void
2.Non-Premitive Data Types(User-defined Data Types like Objects)
Array,Class,Function,Interface,Enum,Tuple

*/

//1.Number Type
//Represents Both interger and floating-point numbers
let age:number=25;
let price:number=99.99;
let big=9885947017;

console.log("Age is : ",age);
console.log("Price is : " + price);
console.log("Big is : " + big);
console.log("Type of Age is : " + typeof age);
console.log("Type of Price is : " + typeof price);
console.log("Type of Big is : " + typeof big);

//String Type
//Represent textual data enclosed in single quotes(''), double quotes("") or backticks(``)
let Name:string="John Doe";
let message:string='Hello World!';
let greeting:string=`Good Morning!`;

console.log("Name is : ",Name);
console.log("Message is : ",message);
console.log("Greeting is : ",greeting);
console.log( message,greeting,"My Name is : ",Name);//Hello World! Good Morning! My Name is :  John Doe

//Boolean Type
//Represents logical values true or false
console.log("------------------Boolean Type----------------------------");
let isStudent:boolean=true;
let hasJob:boolean=false;

console.log("Is Student : ",isStudent);
console.log("Has Job : ",hasJob);
console.log("Type of Is Student is : " + typeof isStudent);
console.log("Type of Has Job is : " + typeof hasJob);

//4.Null Type and Undefined Type
//Null represents the intentional absence of any value and is represented by the keyword null
//Undefined represents a variable that has been declared but has not been assigned a value and is represented by the keyword undefined  
console.log("------------------Null Type and Undefined Type----------------------------");
let emptyValue:null=null;
let notAssignedValue:undefined=undefined;

console.log("Empty Value is : ",emptyValue);
console.log("Not Assigned Value is : ",notAssignedValue);
console.log("Type of Empty Value is : " + typeof emptyValue);
console.log("Type of Not Assigned Value is : " + typeof notAssignedValue);

let myNumber:number;
console.log("My Number is : ",myNumber); //undefined

//Any datetype
console.log("------------------Any Type----------------------------");
let value:any="welcome";
console.log("Value is : " + value);
console.log("Type of Value is : " , typeof value);

value=10;
console.log("Value is : " + value);
console.log("Type of Value is : " + typeof value);

value=true;
console.log("Value is : " + value);
console.log("Type of Value is : " + typeof value);

//Union Type
//Combines multiple data types into a single type, allowing a variable to hold values of different types. It is denoted using the pipe (|) symbol.
console.log("------------------Union Type----------------------------");
let id:number|string|boolean;
id=10;
console.log("ID is : " + id);
console.log("Type of ID is : " + typeof id);

id="ABC123";
console.log("ID is : " + id);
console.log("Type of ID is : " + typeof id);

id=true;
console.log("ID is : " + id);
console.log("Type of ID is : " + typeof id);

