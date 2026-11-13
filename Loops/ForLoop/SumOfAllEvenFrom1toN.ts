let n:number=20,sum:number=0;
for(let i:number=1;i<=n;i++){
    if(i%2==0){
        sum+=i;
    }
}
console.log(`The Sum of all even numbers from 1 to ${n} is : ${sum}`);