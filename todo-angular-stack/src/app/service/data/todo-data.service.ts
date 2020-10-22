import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date){}
}
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username): any {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }
  deleteTodo(username, id): any {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }
  retrieveTodo(username, id): any {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }
  updateTodo(username, id, todo): any {
    return this.http.put(
      `${API_URL}/users/${username}/todos/${id}`,
      todo);
  }
  createTodo(username, todo): any {
    return this.http.post(
      `${API_URL}/users/${username}/todos`,
      todo);
  }
}
