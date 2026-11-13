//objects-Object contains properties and behavior
// object contains variables & methods
// object is collection of key and value pairs
// 
// Ex:
// employee--name,designation,sal,dep
//  bonus(),getEmpDetails(),setDetails()
// 
// student - name,sid,grade
//   getDetails(),setDetails()
// 
// Different ways to create an object in js/ts
// 1.using object type -Directly define the values for variable(js/ts)
// 2. inline type object-we also define the datatype of the keys(ts)
// 3.using type aliases(JS/TS)
// 4.using the classes(JS ES16/TS)
// 
// 1. using 'object' type-Directly the values for variable
// The Typescript object -Type representing all values that are not in primitive types.
/*
let employee:object={
    name:"John",
    age:30,
    salary:50000,
    job :"Engineer"
}
    */

let employee={
    name:"John",
    age:30,
    salary:50000,
    job :"Engineer",
    getDetails:function(this:{name: string ,age:number,salary:number,job:string}){
        console.log("Name : "+this.name+"\nAge : "+this.age+"\nSalary : "+this.salary+"\nJob : "+this.job)
    }
}
console.log(typeof employee);

//Accessing object-approach 1("using .notation")
console.log(employee.name,employee.age,employee.salary,employee.job);
employee.getDetails();

//accessing object - approach2("using bracket notation")
console.log("----approach 2-------");
console.log(employee["name"],employee["salary"],employee["job"]);
employee["getDetails"]();
//
// To modify the value
//employee.job="Manager";
employee["job"]="Manager";
console.log("Modified Job :",employee.job);

//=====================================================================
// 2. Inline Type Object- We also define dataType of (Ts)

let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} = {
    name: "Scott",
    age: 15,
    grade: "A",

    getSummary() {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
};

console.log(student.getSummary());

//=====================================================================
// 3. Using Type Aliases(JS/TS): allows creating a new name for a type. 
// Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you'd otherwise have to write by hand.
console.log("----Using Type Aliases(JS/TS)----");
type Product = {
    name:string,
    prince:number,
    getInfo:()=>string
};

let book1:Product={
    name:"The Great Gatsby",
    price:10.99,
    getInfo:function(){
        return `${this.name} costs $${this.price}`;
    }           
}

let book2:Product={
    name:"To Kill a Mockingbird",
    price:12.99,
    getInfo:function(){
        return `${this.name} costs $${this.price}`;
    }
}

let book3:Product={
    name:"1984",
    price:9.99,
    getInfo:function(){
        return `${this.name} costs $${this.price}`;
    }   
}
console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());

for(let book of [book1,book2,book3]){
    console.log(book.getInfo());
}   

for(let i in book1){
    
    console.log(book1.name);
}

//Example 2 :Intersection of types
type Person = {
    name: string;
    age: number;
};
type Contact = {
    email: string;
    phone: string;
};
type Candidate = Person & Contact & {
    getContactInfo:()=>string;
}

let cnd:Candidate={
 name:"Alice",
 email:"alice@example.com",
 phone:"123-456-7890",
 age:30,
 getContactInfo:function(){
    return `Name: ${this.name}, Age:${this.age}, Email: ${this.email}, Phone: ${this.phone}`;
 }
}

console.log(cnd.getContactInfo());//Name: Alice,Age:30, Email: alice@example.com, Phone: 123-456-7890

//approch 4: using classes(JS ES16/TS)
console.log("----Using Classes(JS ES16/TS)----");

class Person{
    ssn:string;
    firstName:string;
    lastName:string;

    constructor(ssn:string,firstName:string,lastName:string){
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName():string{
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails():string{
        return `SSN : ${this.ssn}, Full Name : ${this.getFullName()}`;
    }
}

let person1=new Person("123-45-6789","John","Doe");
console.log(person1.getDetails());//SSN : 123-45-6789, Full Name : John Doe

let person2=new Person("987-65-4321","Jane","Smith");
console.log(person2.getDetails());//SSN : 987-65-4321, Full Name : Jane Smith   

let data=new Person("111-22-3333","Alice","Johnson");
console.log(data.getDetails());//SSN : 111-22-3333, Full Name : Alice Johnson


