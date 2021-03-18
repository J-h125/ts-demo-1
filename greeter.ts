class Student {
    fullName: string;
    firstName:string;
    middleInitial:string;
    lastName:string;
    constructor( firstName,  middleInitial,  lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Student) {
    return "Hello, " + person.firstName + " " +person.middleInitial+" "+ person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML =  greeter(user);