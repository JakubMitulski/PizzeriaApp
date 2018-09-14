import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {LoginService} from "../services/login.service";

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private readonly loginService: LoginService,
  ) {
  }

  canActivate(): boolean {
    const loginState = this.loginService.loginState;

    if (!loginState) {
      alert("Access denied, log in first!");
    }

    return loginState;
  }

}
