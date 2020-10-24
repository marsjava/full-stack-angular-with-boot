import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
export class AuthenticationBean{
  constructor(public message: string) {}
}
export const TOKEN = 'token';
export const AUTH_USER = 'authUser';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJwtAuthService(username, password): any {
    return this.http.post<any>(
      `${API_URL}/authenticate`, {username, password}
    ).pipe(map(
      data => {
        sessionStorage.setItem(AUTH_USER, username);
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
      }
    ));
  }

  executeBasicAuthService(username, password): any {
    const basicAuth = 'Basic ' + window.btoa(username + ':' + password);
    const headers = new HttpHeaders({
      Authorization: basicAuth
    });
    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`, {headers}
    ).pipe(map(
      data => {
        sessionStorage.setItem(AUTH_USER, username);
        sessionStorage.setItem(TOKEN, basicAuth);
        return data;
      }
    ));
  }

  getAuthUser(): any {
    return sessionStorage.getItem(AUTH_USER);
  }
  getAuthToken(): any {
    if (this.getAuthUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }
  isUserLoggedIn(): boolean{
    const user = sessionStorage.getItem(AUTH_USER);
    return !(user === null);
  }
  logout(): void{
    sessionStorage.removeItem(AUTH_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
