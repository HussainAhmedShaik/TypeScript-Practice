let char:String='t';
if(char>='A' && char<='Z'){
    if(char=='A' || char=='E' || char=='I' || char=='O' || char=='U'){
        console.log(char," is an UpperCase Vowel");
    }else{
        console.log(char," is an UpperCase Consonant");
    }
} else{
    console.log(char," is not an UpperCase Character");
}