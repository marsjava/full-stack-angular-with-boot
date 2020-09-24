import { Student } from './o7-accessor-demo';
let student = new Student('David', 'Martin');
console.log(student.firstName+' '+student.lastName);
student.firstName = 'James';
student.lastName = 'Gostling';
console.log(student.firstName+' '+student.lastName);