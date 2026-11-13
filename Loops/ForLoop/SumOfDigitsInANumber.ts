let myNumber:number=56789;
let sum:number=0;
for(let i=myNumber;i>0;i=Math.floor(i/10)){
    sum+=i%10;
}
console.log(`The Sum of all Digits in the number ${myNumber} is  :${sum}`);