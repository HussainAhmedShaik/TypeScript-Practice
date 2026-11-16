// string- Text value or a combination of characters
/*
1. single quote-String Literal ('Single Quote')
2. Double quote- String Literal("Double Quote")
3. backtick(``)-String template-When we try to use string variable inside another string value ${variable}

// index in string starts with 0

'' or "" 0r ``(backtick)

*/

// Declaration

let str1:string="This is a double quote String";
let str2:string='This is a single quote String';
let str3:string=`This is a backtick quote String`;

console.log(str1,str2,str3);
console.log(`${str1}${str2}${str3}`);
console.log(str1+ "\n" +str2+ "\n" +str3);


//string methods

let str:string="Hello, TypeScript";

//1. Length 
console.log("Length of String : ",str.length);

// 2. toUpperCase() and tolowercase
console.log("Upper case : ",str.toUpperCase());
console.log("Lower case : ",str.toLowerCase());

//3. chatAt(index) and indexof(string)
console.log("Character of 5th Index : ",str.charAt(5)); // ,
console.log("Index of Type :",str.indexOf("Type"));// 7

//substring
console.log(str.substring(0,5));//Hello
console.log(str.substring(3,6));//lo,

// 5. includes() : returns boolean value
console.log(str.includes("abc"));//false
console.log(str.includes("Type"));//true
console.log(str.includes(" "));//true

//6. startswith() and endswith():returns boolean value
console.log("Start with \"Hello\" : ",str.startsWith("Hello"));//True
console.log("Start with \"HELLO\" : ",str.startsWith("HELLO"));//false

//replace()
console.log("Updated String : ",str.replace("TypeScript","World!"));
console.log(str);

//split()-break the string into multiple parts based on delimeter,returns an array
console.log(str.split(" "));//[ 'Hello,', 'TypeScript' ]
console.log(str.split("/"));//[ 'Hello, TypeScript' ]


let mystring:string="abc@gmail.com,xyz";
let splitString=mystring.split(",")
console.log("Email : ",splitString[0]);
console.log("password : ",splitString[1]);

//9.trim() .trimStart() and .trimEnd
mystring="   welcome to typescript   ";
console.log("Original String : ",mystring);//     welcome to typescript
console.log("Trim String : ",mystring.trim());//Trim String :  welcome to typescript
console.log("TrimStart string : ",mystring.trimStart(   ));//Trimstart string :  welcome to typescript
console.log("Trim End String : ",mystring.trimEnd(   ));//Trim End String :     welcome to typescript

//concat
str1="Welcome";
str2=" to the TypeScript";
str3=" and JavaScript";

console.log("After Concatenation : ",str1.concat(str2));//After Concatenation :  Welcome to the TypeScript
console.log("Welocme".concat(" to the TypeScript"));//Welocme to the TypeScript
console.log(str1.concat(str2).concat(str3));//Welcome to the TypeScript and JavaScript

//concept of string immutability
// mutable- chage the original value-string buffer and string builder
// immutable-cannot chab=nge the original value
// 
// mutliline string
let multiline:string=`Welcome
to typescript`;  // wu can use backtick operatir for multiine









