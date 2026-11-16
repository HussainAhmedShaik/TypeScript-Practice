let numbers:number[]=[10,20,30,50];
numbers.push(40);
numbers.sort((a,b)=>a-b);
console.log(numbers);//[ 10, 20, 30, 40, 50 ]

//2. Remove the last element using pop()
numbers=[10,20,30,40,50,60];
numbers.pop();// last element eliminated
console.log(numbers);//[ 10, 20, 30, 40, 50 ]

//3.Remove the first element using shift()
numbers=[10,20,30,40,50,60];
numbers.shift();// first elemnet is eliminated
console.log(numbers);//[ 20, 30, 40, 50, 60 ]

//4.Add elements at the beginning using unshift()
numbers=[10,20,30,40,50];
numbers.unshift(60);// first elemnet is eliminated
console.log(numbers);//[ 60, 10, 20, 30, 40, 50 ]

//5.Concatenate two arrays using concat()
let num1:number[]=[10,30,50];
let num2:number[]=[20,40,60];

let result=num1.concat(num2);
result.sort((a,b)=>a-b);
console.log(result);//[ 10, 20, 30, 40, 50, 60 ]

result.sort((a,b)=>b-a);
console.log(result);//[ 60, 50, 40, 30, 20, 10 ]

//6.Extract a subarray using slice()
numbers=[10,20,30,40,50,60];
result=numbers.slice(1,4);//1 and 4 are index. slice(m,n)
//m is from index and nis n-1 index
console.log(result);//[ 20, 30, 40 ]


//7.Insert and delete elements using  splice()
numbers=[10,20,30,40,50];
numbers.splice(1,2);
console.log(numbers);//[ 10, 40, 50 ]

numbers=[10,40,50];
numbers.splice(1,0,20,30);
console.log(numbers);//[ 10, 20, 30, 40, 50 ]

//8. Find index using indexOf()
numbers=[1,2,3,4,5];
let index=numbers.indexOf(3);
console.log(index);//2

//9. Check if an element exists using includes()
let fruits:string[]=["Apple","Mango","Strawberry","Kiwi","Papaya"];
console.log(fruits.includes("tomato"));//false
console.log(fruits.includes("Mango"));//true

//10.Convert an array to a string using toString()
fruits=["Apple","Mango","Strawberry","Kiwi","Papaya"];
console.log(fruits.toString());//Apple,Mango,Strawberry,Kiwi,Papaya

//11. Iterate using forEach()
numbers=[10,20,30,40,60];
numbers.forEach((num)=>{
    console.log(num);
})

//12.Double values using map()
numbers=[10,20,30,40,60];
 result=numbers.map((num)=>{
    return num*2;
})
console.log(result);[ 20, 40, 60, 80, 120 ]

// 13. Filter even numbers using filter()
numbers=[1,2,3,4,5,6,7,8,9];
let evenNumbers=numbers.filter((num)=>{
    return (num%2==0);
})
console.log(evenNumbers);//[ 2, 4, 6, 8 ]

//14. Find the sum using reduce()
numbers=[1,2,3,4,5];
let sum=numbers.reduce((total,element)=>total+element,0);
console.log(sum);// 15

//15. Check if at least one element is even using some()
numbers=[10,11,12,13,14,15,16];
let someResult=numbers.some((num)=>num%2==0);
console.log(someResult);//true

//16.Check if all elements are positive using every()
numbers=[2,3,4,5,-6,0];
let everyResult=numbers.every((num)=>num>0);
console.log(everyResult);//false

//17. Remove duplicates using filter() and indexOf()
numbers=[10,20,30,10,50,20,50,60,70];
let uniqueNumbers=numbers.filter((number,index)=>{
    return numbers.indexOf(number)===index;
});

console.log(uniqueNumbers);//[ 10, 20, 30, 50, 60, 70 ]

//18. Reverse an array
numbers=[10,20,30,40,50]

let reversed=[...numbers].reverse();
console.log("After Reversed : ",reversed);//After Reversed :  [ 50, 40, 30, 20, 10 ]








