import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'max';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router
  // Angular.giveMeRouter
  // Dependency Injection - inbuild features

  constructor(
    private router: Router,
    private service: HardcodeAuthenticationService,
    private authService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin(): void {
    if (this.service.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
  handleBasicAuthLogin(): void {
    console.log('1. call handleBasicAuthLogin method.');
    this.authService.executeBasicAuthService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data);
            this.invalidLogin = false;
            this.router.navigate(['welcome', this.username]);
          },
          error => {
            console.log(error);
            this.invalidLogin = true;
          }
        );
  }
}
