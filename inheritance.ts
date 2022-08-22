interface IAnimal {
    legs: number;
    species: string;
    age: number;

    getAgeAndHowManyYearsOld(): string;
}

class Animal implements IAnimal {
    legs: number;
    species: string;
    age: number;

    constructor() {
        this.legs = 0;
        this.species = "";
        this.age = 0;
    }

    getAgeAndHowManyYearsOld(): string {
        return "Has " + this.legs + " legs and is " + this.age + " many years old.";
    }
}

class Tiger extends Animal /* implements IAnimal */ {
    claws: number;

    constructor() {
        super();
        this.claws = 28;        
    }
}

class Monkey extends Animal {
    tail: number;

    constructor() {
        super();
        this.tail = 17;
    }
}

class Parrot extends Animal {
    canFly: boolean;

    constructor() {
        super();
        this.canFly = true;
    }
}

let animals: IAnimal[] = [];
let tiger: Tiger = new Tiger();
tiger.legs = 4;
tiger.age = 11;
tiger.species = "Mannal";
tiger.claws = 28;

let monkey: IAnimal = new Monkey();
tiger.legs = 2;
tiger.age = 7;
tiger.species = "Mannal";
// monkey.tail = 15;

let parrot: Parrot = new Parrot();
parrot.legs = 2;
parrot.age = 2;
parrot.species = "Bird";
parrot.canFly = true;

animals.push(tiger);
animals.push(monkey);
animals.push(parrot);

for (let index = 0; index < animals.length; index++) {
    const animal = animals[index];
    
    if (animal instanceof Tiger) {
        console.log("This animal is a Tiger");
    } else if (animal instanceof Monkey) {
        console.log("This animal is a Monkey");
    } else if (animal instanceof Parrot) {
        console.log("This animal is a Parrot");
    }
}


var tigerInfo: string = tiger.getAgeAndHowManyYearsOld();
var parrotInfo: string = tiger.getAgeAndHowManyYearsOld();

// function getTigerAgeAndHowManyLegs(tiger: Tiger): string {
//     return "Has " + tiger.legs + " legs and is " + tiger.age + " many years old.";
// }

// function getParrotAgeAndHowManyLegs(parrot: Parrot): string {
//     return "Has " + parrot.legs + " legs and is " + parrot.age + " many years old.";
// }

// function getMonkeyAgeAndHowManyLegs(monkey: Monkey): string {
//     return "Has " + monkey.legs + " legs and is " + monkey.age + " many years old.";
// }

let HelloBob: string = "Hello bob";
let cat: IAnimal = new Tiger();