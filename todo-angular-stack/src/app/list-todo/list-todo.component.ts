import { Component, OnInit } from '@angular/core';
import { TodoDataService, Todo } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
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
  message = '';
  constructor(private service: TodoDataService, private route: Router) { }

  ngOnInit(): void {
    this.retreiveTodos();
  }

  retreiveTodos() {
    this.service.retrieveAllTodos('Max').subscribe(
      response => {
        this.todos = response;
        console.log(this.todos);
      }
    );
  }

  deleteById(id) {
    console.log(`Delete todo ${id}`);
    this.service.deleteTodo('Max', id).subscribe(
      response => {
        console.log(response);
        this.retreiveTodos();
        this.message = `Delete of Todo ${id} Successful!`;
      }
    );
  }

  updateById(id) {
    console.log(`Update Todo ${id}`);
    this.route.navigate(['todos', id]);
  }

  addTodo() {
    this.route.navigate(['todos', -1]);
  }
}
