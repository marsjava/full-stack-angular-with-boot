import { Component, OnInit } from '@angular/core';
import { TodoDataService, Todo } from '../service/data/todo-data.service';
/* Future to develop
1. No Navigation Menu and Footer
2. No Security for Menus
3. Hardcoded Logic in the TodoList and Login Components
4. Formatting Bootstrap
5. Remaining functionality Add, Edit and Delete
6. Spring boot
7. Spring Security
*/
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private service: TodoDataService) { }

  ngOnInit(): void {
    this.service.retrieveAllTodos('Max').subscribe(
      response => {
        this.todos = response;
        console.log(this.todos);
      }
    );
  }

}
