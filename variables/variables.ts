//console.log("Good Morning! This is a TypeScript demo.");
//variable:container which can hold/store some data/value
// var ,let,const
//syntax :   keyword variableName:data type = value;
// ex: var age:number = 25;

//var age: number = 25;
//console.log("Age is : " + age);

//var   vs   let   vs   const
//----------------------------
/*
  1) scope
  2) Declaration/Value Assignment
  3) Re-Declaration
  4) Hoisting
  5) Re-Assignment/Re-Initialization
*/
//var - we don't use var in typescript, we use let and const instead of var
// let - we use let for variable declaration, we can re-assign the value but we can't re-declare the variable
// const - we use const for variable declaration, we can't re-assign the value and we can't re-declare the variable

// scope-accessibility of variable in a program(functional scope(var) & block scope(let & const))

//example2 1: var (Functional scope)

function varScope(){
  if(true){
    var name:string = "John";
    console.log("Inside if block : " + name);
  }
  //console.log("Inside if block : " + name);
}
varScope(); //Output: Inside if block : John



