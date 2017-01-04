interface IPerson {
    name: string;
    age?: number;
    city: string;
    state: string;
}

class Person {

    constructor(public personInfo: IPerson) {

    }

}

var person = new Person({
    name: 'Fred',
    age: 65,
    city: 'Chandler',
    state: 'Arizona'
});
alert(person.personInfo.city);