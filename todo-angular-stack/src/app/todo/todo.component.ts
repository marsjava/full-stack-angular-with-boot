import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService, Todo } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;
  constructor(
    private routeParam: ActivatedRoute,
    private service: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.routeParam.snapshot.params['id'];
    console.log(`Read by todo Id: ${this.id}`);
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.service.retrieveTodo('Max', this.id).subscribe(
        data => this.todo = data
      );
    }
  }
  saveTodo() {
    if (this.id === -1) {
      this.service.createTodo('Max', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    } else {
        this.service.updateTodo('Max', this.id, this.todo).subscribe(
          data => {
            console.log(data);
            this.router.navigate(['todos']);
          }
        );
    }
  }
}
