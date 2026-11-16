let numbers:number[]=[10,20,30,40,50];
let fruits:string[]=["Apple","Banana","Mango","Orange"];
console.log("Numbers Array:", numbers);
console.log("Fruits Array:", fruits);

// length- attritube(Not a method)
console.log("Size of numbers array: ",numbers.length);
console.log("Size of fruits array: ",fruits.length);

console.log("--------- using push------")
//push() - method - Adds one or more elements to the end of an array and returns the new length of the array.
// syntax: array.push(element1, ..., elementN)
numbers.push(60,70);
console.log("Numbers Array after push:",numbers);

fruits.push("Grapes","Pineapple");
console.log("Fruits Array after push:",fruits);

console.log("--------- using pop------")
//pop() - method - Removes the last element from an array and returns that element. This method changes the length of the array.
// syntax: array.pop()
let removedNumber:number=numbers.pop();
console.log("Removed Number: ",removedNumber);
console.log("Numbers Array after pop:",numbers);

let removedFruit:string=fruits.pop();
console.log("Removed Fruit: ",removedFruit);
console.log("Fruits Array after pop:",fruits);

console.log("--------- using shift------")
// shift() - method - Removes the first element from an array and returns that removed element. 
// This method changes the length of the array.
// syntax: array.shift()
let shiftedNumber:number=numbers.shift();
console.log("Shifted Number: ",shiftedNumber);
console.log("Numbers Array after shift:",numbers);

console.log("--------- using unshift------")
// unshift() - method - Adds one or more elements to the beginning of an array and returns the new length of the array.
// syntax: array.unshift(element1, ..., elementN)
let newUnshift:number=numbers.unshift(5,18);
console.log("Numbers Array after unshift:",numbers);
console.log("New Length of Numbers Array after unshift:",numbers.length);

let unshiftedFruit:string=fruits.unshift("Strawberry","Watermelon");
console.log("Fruits Array after unshift:",fruits);
console.log("New Length of Fruits Array after unshift:",fruits.length);

console.log("-----Concat() method-----");
// Concat() - method - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// syntax: array1.concat(array2, array3, ..., arrayX)
let numbers1:number[]=[1,2,3,4,5];
let numbers2:number[]=[6,7,8,9,10];
let mergedNumbers:number[]=numbers1.concat(numbers2);
console.log("Merged Numbers Array: ",mergedNumbers);

let fruits1:string[]=["Apple","Banana"];
let fruits2:string[]=["Mango","Orange"];
let mergedFruits:string[]=fruits1.concat(fruits2);
console.log("Merged Fruits Array: ",mergedFruits);

console.log("-----slice() method-----");
// slice() - method - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). 
// The original array will not be modified.
// syntax: array.slice(start, end)
// mergedNumbers=[1,2,3,4,5,6,7,8,9,10];
let slicedNumbers:number[]=mergedNumbers.slice(2,6);
console.log("Sliced Numbers Array: ",slicedNumbers);//output: [3,4,5,6]

//Fruits Array:  [ 'Apple', 'Banana', 'Mango', 'Orange' ]
let slicedFruits:string[]=mergedFruits.slice(1,3);
console.log("Sliced Fruits Array: ",slicedFruits);//[ 'Banana', 'Mango' ]
console.log("After Sliced Merged Fruits Array: ",mergedFruits);//[ 'Apple', 'Banana', 'Mango', 'Orange' ]

console.log("-----splice() method-----");
// splice() - method - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// syntax: array.splice(start, deleteCount, item1, item2, ..., itemN)

console.log("Numbers Array before splice : ",mergedNumbers);//[1, 2, 3, 4,5,6, 7, 8, 9, 10];
let splicedNumbers:number[]=mergedNumbers.splice(3,4,11,12,13);
console.log("Spliced Numbers Array: ",splicedNumbers);//[4,5,6,7]
console.log("Numbers Array after splice : ",mergedNumbers);//[1, 2, 3, 11, 12, 13, 8, 9, 10];

console.log("Fruits Array before splice : ",mergedFruits);//[ 'Apple', 'Banana', 'Mango', 'Orange' ]
let splicedFruits:string[]=mergedFruits.splice(1,2,"Grapes","Pineapple");
console.log("Spliced Fruits Array: ",splicedFruits);// [ 'Banana', 'Mango' ]
console.log("Fruits Array after splice : ",mergedFruits);//[ 'Apple', 'Grapes', 'Pineapple', 'Orange' ]


console.log("-----indexOf() method-----");
// indexOf() - method - returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax: array.indexOf(searchElement, fromIndex)
// mergedNumbers Array:  [ 1, 2, 3, 11, 12, 13, 8, 9, 10 ]
let indexOfNumber:number=mergedNumbers.indexOf(12);
console.log("Index of 12 in Merged Numbers Array: ",indexOfNumber);//4

//mergedFruits Array:  [ 'Apple', 'Grapes', 'Pineapple', 'Orange' ]
let indexOfFruit:number=mergedFruits.indexOf("Pineapple");
console.log("Index of Pineapple in Merged Fruits Array: ",indexOfFruit);//2 

let indexOfPapaya:number=mergedFruits.indexOf("Papaya");
console.log("Index of Papaya in Merged Fruits Array: ",indexOfPapaya);//-1

console.log("-----includes() method-----");
// includes() - method - determines whether an array includes a certain value among its entries, 
// returning true or false as appropriate.
// syntax: array.includes(searchElement, fromIndex)
// mergedNumbers Array:  [ 1, 2, 3, 11, 12, 13, 8, 9, 10 ]
let includesNumbers:boolean=mergedNumbers.includes(11);
console.log("Does Merged Numbers Array include 11? ",includesNumbers);//true
console.log("Does Merged Numbers Array include 15? ",mergedNumbers.includes(15));//false

//mergedFruits Array:  [ 'Apple', 'Grapes', 'Pineapple', 'Orange' ]
let includesFruits:boolean=mergedFruits.includes("Grapes");
console.log("Does Merged Fruits Array include Grapes? ",mergedFruits.includes("Grapes"));//true
console.log("Does Merged Fruits Array include Papaya? ",mergedFruits.includes("Papaya"));//false

console.log("-----reverse() method-----");
// reverse() - method - reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// syntax: array.reverse()
// mergedNumbers Array:  [ 1, 2, 3, 11, 12, 13, 8, 9, 10 ]
let reversedNumbers:number[]=mergedNumbers.reverse();
console.log("Reversed Merged Numbers Array: ",reversedNumbers);//[ 10, 9, 8, 13, 12, 11, 3, 2, 1 ]

console.log("------toString() method-----");
// toString() - method - returns a string representing the specified array and its elements.
// syntax: array.toString()
// reversedNumbers Array:  [ 10, 9, 8, 13, 12, 11, 3, 2, 1 ]
let  numbersString:string=reversedNumbers.toString();
console.log("Numbers Array as String: ",numbersString);//10,9,8,13,12,11,3,2,1










