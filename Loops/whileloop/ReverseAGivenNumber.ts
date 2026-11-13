let givenNumber=56743;
let reversedNumber=0;
while(givenNumber>0){
    let digit=givenNumber%10;
    reversedNumber=reversedNumber*10+digit;
    givenNumber=Math.floor(givenNumber/10);
}
 console.log("Reversed Number is : ",reversedNumber);