import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }
  authenticate(username, password): boolean {
    if (username === 'max' && password === 'dummy') {
      sessionStorage.setItem('authUser', username);
      return true;
    }
    return false;
  }
  isUserLoggedIn(): boolean{
    const user = sessionStorage.getItem('authUser');
    return !(user === null);
  }
  logout(): void{
    sessionStorage.removeItem('authUser');
  }
}
