class Person {
    // field
    fullName: string;
    age: number;
    gender: string;
    eyeColor: string;


    // constructor
    constructor(passedInName: string, age: number, gender: string) {
        this.fullName = passedInName;
        this.age = age;
        this.gender = gender;
        this.eyeColor = "Green";
    }

    // functions
    display(printToConsole: boolean = true): string {
        let displayMessage: string = "Person Full name: " + this.fullName
        console.log("Person Full name: " + this.fullName);
        console.log("Person Age: " + this.age);
        console.log("Person Gender: " + this.gender);
        console.log("Person Eye color: " + this.eyeColor);

        return displayMessage;
    }
}

let joeBloggs = new Person("Joe Bloggs", 32, "Male");

let variableName = joeBloggs.display();

joeBloggs.eyeColor = "Brown";

joeBloggs.display();

let listOfPeople: Person[] = [];

listOfPeople.push(joeBloggs);

console.log(listOfPeople)
