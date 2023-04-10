class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' +  this.name)
        }, 1000)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }.bind(this), 1000)
    }
}

let jedi = new Person('Obi Wan Kenobi');

console.log('Console Log: ' + this.name);
console.log(jedi);
jedi.printNameArrow();
jedi.printNameFunction();