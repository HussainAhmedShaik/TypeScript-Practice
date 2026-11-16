let mystring = "   welcome to typescript a  b  ";

let words = mystring.trim().split(/\s+/);
console.log( " Words : ",words);

let smallestLength = words[0].length;

for (let word of words) {
    if (word.length < smallestLength) {
        smallestLength = word.length;
    }
}

let smallestWords = words.filter(word => word.length === smallestLength);

console.log(smallestWords);