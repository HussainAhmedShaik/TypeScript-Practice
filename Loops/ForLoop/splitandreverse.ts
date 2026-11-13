let str: string = "I Love Java Programme";
let words: string[] = str.split(" ");
let reversedWords: string = "";

for(let i=words.length-1;i>=0;i--){
    reversedWords = reversedWords + words[i] + " ";

}console.log("The Reversed Words are : ",reversedWords);