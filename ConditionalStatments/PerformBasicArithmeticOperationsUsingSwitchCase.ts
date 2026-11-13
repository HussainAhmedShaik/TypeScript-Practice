let Number1:number=10,Number2:number=20;
let operation:String='+';
switch(operation){
    case '+':
        console.log(Number1+Number2);
        break;
    case '-':
        console.log(Number1-Number2);
        break;
    case '*':
        console.log(Number1*Number2);
        break;
    case '/':
        console.log(Number1/Number2);
        break;
    default:
        console.log("Invalid Operation");
}