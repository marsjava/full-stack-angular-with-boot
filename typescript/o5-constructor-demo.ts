class Employee {
    // properties
    firstName: string;
    lastName: string;
    constructor(theFirst: string, theSecond: string) {
        this.firstName = theFirst;
        this.lastName = theSecond;
    }
}
let myEmployee = new Employee('David', 'Martin');

console.log(myEmployee.firstName);
console.log(myEmployee.lastName);