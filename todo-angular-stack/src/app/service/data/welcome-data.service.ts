import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Hello {
  constructor(private message: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(
    private http: HttpClient
  ) { }
  executeHelloworldBeanService() {
    return this.http.get<Hello>('http://localhost:8080/hello-bean');
  }
  executeHelloworldBeanParamService(paramValue) {
    return this.http.get<Hello>(`http://localhost:8080/hello-bean-param/${paramValue}`);
  }
}
