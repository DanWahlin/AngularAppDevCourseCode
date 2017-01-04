//#1: Person with public properties
class Person1 {
    firstName: string;
    lastName: string;

    constructor(fname: string, lname: string) {
        this.firstName = fname;
        this.lastName = lname;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

var person1 = new Person1('John', 'Doe');
alert(person1.getFullName());


//#2: Person using simplified way of definine properties using public/private in the constructor
class Person2 {

    constructor(public firstName: string, public lastName: string) {

    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

var person2 = new Person2('John', 'Doe');
alert(person2.getFullName());

//#Bonus: Person that accepts an object in its constructor. Object is defined using a TypeScript interface.
interface IPerson {
    name: string;
    age?: number;
    city: string;
    state: string;
}

class Person3 {

    
    constructor(public personInfo: IPerson) {

    }

}

var person3 = new Person3({
    name: 'Fred',
    age: 65,
    city: 'Chandler',
    state: 'Arizona'
});
alert(person3.personInfo.city);