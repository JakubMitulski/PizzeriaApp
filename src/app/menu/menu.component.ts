import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meal} from "../model/meal";
import {MenuService} from "../services/menu.service";
import {Location} from '@angular/common';
import {Router} from "@angular/router";
import {OrderService} from "../services/order.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  meals: Meal[];
  meal: Meal;
  mealsSub: Subscription;

  constructor(
    private menuService: MenuService,
    public orderService: OrderService,
    private location: Location,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.mealsSub = this.menuService.getAvailableMeals().subscribe(meals => this.meals = meals);
  }

  getPizzas() {
    this.mealsSub = this.menuService.getAvailablePizzas().subscribe(meals => this.meals = meals);
  }

  getPastas() {
    this.mealsSub = this.menuService.getAvailablePastas().subscribe(meals => this.meals = meals);
  }

  getDrinks() {
    this.mealsSub = this.menuService.getAvailableDrinks().subscribe(meals => this.meals = meals);
  }

  getDetails(id: number) {
    this.router.navigate(['/menu', id]);
  }

  addItemToOrder(meal: Meal) {
    this.orderService.addItemToOrder(meal);
  }

  ngOnDestroy(): void {
    this.mealsSub.unsubscribe();
  }

}
