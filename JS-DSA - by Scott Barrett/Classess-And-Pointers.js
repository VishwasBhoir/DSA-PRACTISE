class Cookies {
    constructor(color) {
        this.color = color;
        console.log(`${this.color} Cookie`);
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color
    }

}

// const greenCookie = new Cookies('green');
// const blueCookie = new Cookies('blue');
// blueCookie.setColor('White')
// console.log(blueCookie.getColor())


// POINTERS

let num1 = 5;
let num2 = num1;

console.log(num1);
console.log(num2);

num1 = 10;
console.log(num1);
console.log(num2);