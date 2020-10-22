import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../app.constants';
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

  executeHelloworldBeanService(): any {
    // let basicAuth = 'Basic ' + window.btoa('max:dummy');
    // let headers = new HttpHeaders({
    //   Authorization: basicAuth
    // });
    return this.http.get<Hello>(`${API_URL}/hello-bean`
    // {headers}
    );
  }

  executeHelloworldBeanParamService(paramValue): any {
    return this.http.get<Hello>(`${API_URL}/hello-bean-param/${paramValue}`);
  }
}
