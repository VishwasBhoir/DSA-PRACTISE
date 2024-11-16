class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    introduce() {
        console.log(
            `I am ${this.name}, I'm ${this.age} and I work as ${this.job}`
        );
    }
}

const person1 = new Person('Vishwas', 29, 'SDE');
person1.introduce();
const person2 = new Person('Bhranti', 28, 'SN');
person2.introduce();
