import { Component, OnInit } from '@angular/core';
/* Future to develop
1. No Navigation Menu and Footer
2. No Security for Menus
3. Hardcoded Logic in the TodoList and Login Components
4. Formatting Bootstrap
5. Remaining functionality Add, Edit and Delete
6. Spring boot
7. Spring Security
*/
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date){}
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos = [
    new Todo(1, 'Became an expert Full-stack', false, new Date()),
    new Todo(2, 'Learn Angular with Microservices', false, new Date()),
    new Todo(3, 'Learn Spring Cloud services', false, new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
