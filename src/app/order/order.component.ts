import {Component, OnInit} from '@angular/core';
import {Meal} from "../model/meal";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  meals: Meal[]=[];

  constructor(
    public orderService: OrderService,
  ) {}

  ngOnInit() {
    this.meals = this.orderService.getOrder();
  }

  removeItemFromOrder(id: number) {
    this.orderService.removeItemFromOrder(id);
  }
}
