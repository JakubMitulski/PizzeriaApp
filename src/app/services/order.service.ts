import {Injectable} from '@angular/core';
import {Meal} from "../meal";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  meals: Meal[] = [];

  constructor() {
  }

  addItemToOrder(meal: Meal) {
    this.meals.push(meal);
  }

  clearOrder() {
    this.meals = [];
  }

  getOrder() {
    return this.meals;
  }

  getMeals(): Meal[] {
    return this.meals;
  }

  calculatePrice() {
    let totalPrice: number = 0;
    this.meals.forEach(meal => totalPrice = +totalPrice + +meal.price);
    return totalPrice;
  }
}
