import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {MenuService} from "../services/menu.service";
import {Meal} from "../model/meal";
import {Router} from "@angular/router";
import {OrderService} from "../services/order.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit, OnDestroy {

  meals: Meal[];
  sub: Subscription;

  constructor(public loginService: LoginService,
              public menuService: MenuService,
              private orderService: OrderService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.sub = this.menuService.getAllMeals().subscribe(meals => this.meals = meals);
  }

  getDetails(id: number) {
    this.router.navigate(['/menu', id]);
  }

  setAvailability(meal: Meal, availability: boolean) {
    this.sub = this.menuService.setAvailability(meal, availability).subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
