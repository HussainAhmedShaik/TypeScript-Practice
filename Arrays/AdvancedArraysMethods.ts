//================== forEach(),map(),filter(),reduce() ,some(),every()==================//

// forEach() - method - executes a provided function once for each array element.
// it takes function as a parameter
//syntax: array.forEach(function(currentValue, index, array){})

//currentValue -The current element being processed in the array.
//index - The index of the current element being processed in the array.
//array - The array that forEach() is being applied to for current element.

//Example 1-Get index of all the fruits along with value.
let fruits:string[]=["Apple","Banana","Mango","Orange","Kiwi"]; 

console.log("Printing fruits along with their index using forloop......");

for(let i in fruits){
    console.log(`Index of ${fruits[i]} is ${[i]}`);
}

console.log("Printing fruits along with their index using for...Each method......");
/*
    fruits.forEach(function(element,index){
        console.log(`Index of ${element} is ${index}`);
    })
*/

//using arraow function
fruits.forEach((element,index)=>{
    console.log(`Index of ${element} is ${index}`);
})


//Example 2 -Print the all names of the fruits in uppercase using forEach() method.
console.log("Printing fruits in uppercase using for...Each method......");

fruits.forEach((element)=>{
    console.log(element.toUpperCase());

    // console.log(element.toLocaleUpperCase());
})


//2. map() - Create a new array with the results of calling the function on every element of an array.
//it takes function as a parameter
// Returns the same number of elements that we have in original array

//Syntax:array.map(function(currentValue,index,array){})


//Example 1 : Get square of all the numbers in an array
let numbers:number[]=[1,2,3,4,5];

let squaredNumbers=numbers.map(function(element){
    return (element*element);

})

console.log("Original Array : ",numbers);
console.log("Squared Array : ",squaredNumbers);

//Ex 2: Double the number of each element of array
/*
let doubledNumber=numbers.map((element)=>{
return(element *2);
})
*/

let doubledNumber=numbers.map((element)=>element*2); // if we have single return statement inside the arrow function then '{}' and 'return' are neglected
console.log("Original Array : ",numbers);
console.log(" Doubled Numbers : ",doubledNumber);


// 3. filter() - creates a new array with all the elements that pass/satisfy the function
// It takes function as a parameter
// Returns either same or fewer numbers of elements compared to original array

// Syntax=array.filter(function(currentValue,index,array){})

//Example 1 : Get the only Even Numbers from an array
let evenNumbers=numbers.filter((num)=>num%2==0);

console.log("Even Numbers : ",evenNumbers);
 

//Example 2: Get the only numbers which is > 3 from an array
let filteredNumbers=numbers.filter((num)=>num>3);
console.log("Numbers is Greater than 3 : ",filteredNumbers);

// reduce()-Applies a function on every element of an array and returns a single value

//syntax - array.reduce(function(accumulator,currentValue,index,array){})

// accumulator- The accumulated value from previous iteration
//currentValue- The current element being processed

//example 1:Get the total(sum) of all  the elements in an array

/*
let total=0;
for(let i=0;i<numbers.length;i++){
    total=total+numbers[i];//
}
console.log("Sum of all the numbers : ",total);
*/

//using reduce method
/*

let totalResult=numbers.reduce((total,element)=>{
    return (total+element);
},0); // here "0" is default value of accumulator

*/

let totalResult=numbers.reduce((total,element)=>total+element,0); //here "0" is default value of accumulator

console.log("Sum of elements in array : ",totalResult); //15


//5. some()- Check if any elements satisfies a condition
//Returns true if at least one element pass the condition,else false

//Syntax:array.some(function(currentValue,index,array){})

//Example 1: check array contains negative value or not
 let negativeValues=numbers.some((element)=>element<0);
 console.log("Has Negative Element : ",negativeValues);//false

let positivesValues=numbers.some((element)=>element>0);
console.log("Has Negative Element : ",positivesValues);//true

//every()- checks if all elements satisfy a condition
//Returns true if all elements pass the condition,else false

//syntax: array.every(function(currentValue,index,array){})
//Example1: check the all elemments in array even

let isAllEven=numbers.every((element)=>element%2==0);
console.log("Is all elements are Even : ",isAllEven);

let isAllGreaterThan1=numbers.every((element)=>element>=1);
console.log("Is all Elements Greater Than One : ",isAllGreaterThan1);

let isAllNumbersPositive=numbers.every((element)=>element>0);
console.log("is all Numbers Positive : ",isAllNumbersPositive);




