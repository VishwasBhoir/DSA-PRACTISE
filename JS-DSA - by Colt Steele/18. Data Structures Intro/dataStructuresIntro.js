class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.fullName();
        this.lateMarks = 0;
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    markLate() {
        this.lateMarks++;
        if (this.lateMarks <= 3 && this.lateMarks >= 0) {
            console.log(`${this.name} has ${this.lateMarks} Latemarks.`);
        } else {
            console.log(`You are Expelled. ${this.lateMarks} late marks!`);
        }
    }

    static enrollStudents() {
        return 'ENROLLING STUDENT!';
    }
}

let vishwas = new Student('Vishwas', 'Bhoir');
let bhranti = new Student('Bhranti', 'Bhoir');
bhranti.lastName = 'Kor';

console.log(Student.enrollStudents());
