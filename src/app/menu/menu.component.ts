import {Component, OnInit} from '@angular/core';
import {Meal} from "../model/meal";
import {MenuService} from "../services/menu.service";
import {Location} from '@angular/common';
import {Router} from "@angular/router";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  meals: Meal[];
  meal: Meal;

  constructor(
    private menuService: MenuService,
    private orderService: OrderService,
    private location: Location,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.menuService.getAvailableMeals().subscribe(meals => this.meals = meals);
  }

  getPizzas() {
    this.menuService.getAvailablePizzas().subscribe(meals => this.meals = meals);
  }

  getPastas() {
    this.menuService.getAvailablePastas().subscribe(meals => this.meals = meals);
  }

  getDrinks() {
    this.menuService.getAvailableDrinks().subscribe(meals => this.meals = meals);
  }

  getDetails(id: number) {
    this.router.navigate(['/menu', id]);
  }

  addItemToOrder(meal: Meal) {
    this.orderService.addItemToOrder(meal);
  }

  getMealById(id: number) {
    this.menuService.getMealById(id).subscribe(meal => this.meal = meal);
  }

}
