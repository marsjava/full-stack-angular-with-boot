import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    const basicAuthToken = this.basicAuthService.getAuthToken();
    const username = this.basicAuthService.getAuthUser();
    console.log('3. invoke intercept method.' + basicAuthToken + '->' + username);
    if (basicAuthToken && username) {
      request = request.clone({
        setHeaders: {
          Authorization : basicAuthToken
        }
      });
    }
    return next.handle(request);
  }
}
