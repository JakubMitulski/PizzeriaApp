import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Order} from "../model/order";
import {Meal} from "../model/meal";
import {OrderService} from "../services/order.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  order: Order;
  meals: Meal[] = [];
  mealsIds: number[] = [];

  orderForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(readonly orderService: OrderService, private router: Router) {
    this.order = <Order>{};
  }

  ngOnInit() {
    this.produceMealIdsArray();
  }

  onSubmit() {
    this.order.firstName = this.orderForm.get('firstName').value;
    this.order.lastName = this.orderForm.get('lastName').value;
    this.order.address = this.orderForm.get('address').value;
    this.order.phone = this.orderForm.get('phone').value;
    this.order.status = 'order';
    this.order.mealIds = this.mealsIds;
    this.order.orderDate = new Date();
    this.orderService.saveOrder(this.order).subscribe();
    this.router.navigate(['/info']);
  }

  getMeals() {
    return this.orderService.getOrder();
  }

  produceMealIdsArray(): void {
    this.meals = this.getMeals();
    this.meals.forEach(meal => this.mealsIds.push(meal.id));
  }

}
