import { Injectable } from '@angular/core';
import {Credentials} from "../model/credentials";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginState: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.loginState = false;
  }

  getLoginState() {
    return this.loginState;
  }

  logIn(credentials: Credentials, adminCredentials: Credentials[]) {
    for(let i = 0; i < adminCredentials.length; i++){
      if (adminCredentials[i].password === credentials.password) {
        this.loginState = true;
        this.router.navigate(['/admin']);
      }
    }
    if (this.loginState === false){
      this.router.navigate(['/login-failure']);
    }
  }

  logOut() {
    this.loginState = false;
    this.router.navigate(['/']);
  }

  getAdminCredentials(): Observable<Credentials[]>{
    return this.http.get<Credentials[]>('http://localhost:3000/users?login=admin');
  }
}
