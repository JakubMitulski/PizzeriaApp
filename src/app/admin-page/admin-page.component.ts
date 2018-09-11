import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {MenuService} from "../services/menu.service";
import {Meal} from "../model/meal";
import {Router} from "@angular/router";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  meals: Meal[];

  constructor(public loginService: LoginService,
              public menuService: MenuService,
              private orderService: OrderService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.menuService.getAllMeals().subscribe(meals => this.meals = meals);
  }

  getDetails(id: number) {
    this.router.navigate(['/menu', id]);
  }

  setAvailability(meal: Meal, availability: boolean) {
    this.menuService.setAvailability(meal, availability).subscribe();
  }

}
