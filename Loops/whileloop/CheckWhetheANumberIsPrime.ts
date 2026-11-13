let givenNum=15,i=2,isPrime=true;
if(givenNum<2){
    isPrime=false;
}
while(i<=Math.sqrt(givenNum) && isPrime){
            if(givenNum%i==0){
                isPrime=false;
            }
            i++;
}
if(isPrime){
    console.log(givenNum," is a prime number");
}
else{
    console.log(givenNum," is not a prime number");
}

