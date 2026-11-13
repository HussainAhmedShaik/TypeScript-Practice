let num1:number=10,num2:number=20,result:number=3;
do{
    switch(result){
        case 1:
            console.log("Addition of Two Numbers is : ",num1+num2);
            break;
        case 2:
            console.log("Subtraction of Two Numbers is : ",num1-num2);
            break;
        case 3:
            console.log("Multiplication of Two Numbers is : ",num1*num2);
            break;
        case 4:
            console.log("Division of Two Numbers is : ",num1/num2);
            break;
        default:
            console.log("Invalid Input");
            break;
    }
    result++;
}while(result<=4);