/*
 Arrays in TypeScript
 ------------------------------
 - An array is a special type of Variable that  stores multiple values
 - The Values can be of the same data type or different data types
 - The values are stored in a contiguous memory location and can be accessed using an index number
 - The index number starts from 0 and goes upto n-1 where n is the number of elements in the array
 - Arrays are an ordered collection of elements and can be of any data type like number, string, boolean, object, etc.
 - Arrays can be created using the array literal notation or the array constructor
 - The array literal notation is the most common way to create an array and is done using square brackets []    

*/
/*
// Approach 1: Array Literal Notation
let names:string[]=[]; // Declaration of an empty array of strings

// Initialization/assignment of values to the array
names=["Hussain","Thomas","John","Smith"];

// Accessing the elements of the array using index number
console.log("First Element: ",names[0]);
console.log("Second Element: ",names[1]);
console.log("Third Element: ",names[2]);
console.log("Fourth Element: ",names[3]);

*/
 let names:string[]=["Hussain","Thomas","John","Smith"]; // Declaration and Initialization 
console.log("First Element: ",names[0]);
console.log("Second Element: ",names[1]);
console.log("Third Element: ",names[2]);
console.log("Fourth Element: ",names[3]);
               
console.log("-------Approach 2 : using the generic Array<T> type...here T is the type of the elements in the array");
// Approach 2 : using the generic Array<T> type...here T is the type of the elements in the array
let empNames:Array<String>=["Hussain1","Thomas1","John1","Smith"];
console.log("First Element: ",empNames[0]);
console.log("Second Element: ",empNames[1]);
console.log("Third Element: ",empNames[2]);
console.log("Fourth Element: ",empNames[3]);

let empIds:Array<number>=[101,102,103,104];
console.log("First Element: ",empIds[0]);
console.log("Second Element: ",empIds[1]);
console.log("Third Element: ",empIds[2]);
console.log("Fourth Element: ",empIds[3]);

console.log("--------- using union------")
let data:Array<string | number>=[101,"Hussain",102,"Thomas",103,"John",104,"Smith"];
console.log("First Element: ",data[0]);
console.log("Second Element: ",data[1]);

console.log("--------- using any type------")
let mixedData:Array<any>=[101,"Hussain",true,102,"Thomas",false,103,"John",true,104,"Smith",false,null,undefined];
console.log("First Element: ",mixedData[0]);
console.log("Second Element: ",mixedData[1]);   

console.log("Size of an array: ",mixedData.length); // size of an array

// Example 1 : Iterating over an array using a traditional for loop
console.log("---------Iterating over an array using a traditional for loop------")
console.log("Employee Names :    ")
for(let i=0;i<empNames.length;i++){

    console.log(empNames[i]);       
}

//Example 2 : Iterating over an array using a for...in loop
// it follows the index number of the array and not the value of the array
console.log("Employee Ids :")
for(let i in empIds){
    console.log(empIds[i]);
}


//Example 3: Iterating over an array using a for...of loop
// It follows the value of the array and not the index number of the array
console.log("Employee Names :")
for (let value of mixedData){
      console.log(value);
}

// Array with the function 
// Search an element in an array using a function
function search(element:number,arr:number[]):boolean{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===element){
            return true; //Element found in the array

        }
    } 
    return false; //Element not found in the array
}

let arr:number[]=[101,102,103,104,105];
console.log(search(102,arr));//true
console.log(search(125,arr));//false

//Example 5 : A function takes an Array and returns an array
function captalizeWords(arr:string[]):string[]{
    let result:string[]=[];
    for(let i=0;i<arr.length;i++){
        result[i]=arr[i].toUpperCase();
    
    } 
    return result;
}

let words:string[]=["hello","world","typescript"];
console.log(captalizeWords(words)); //["HELLO","WORLD","TYPESCRIPT"])

