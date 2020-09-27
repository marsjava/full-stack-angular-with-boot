import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

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
    private service: HardcodeAuthenticationService) { }

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
}
