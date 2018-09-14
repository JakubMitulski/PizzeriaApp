import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Credentials} from "../model/credentials";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  credentials: Credentials;
  adminCredentials: Credentials[] = [];
  sub: Subscription;

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(readonly loginService: LoginService) {
    this.credentials = <Credentials>{};
  }

  ngOnInit() {
    this.sub = this.loginService.getAdminCredentials().subscribe(cred => this.adminCredentials = cred);
  }

  onSubmit() {
    this.credentials.login = this.loginForm.get('login').value;
    this.credentials.password = this.loginForm.get('password').value;
    this.loginService.logIn(this.credentials, this.adminCredentials);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
