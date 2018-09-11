import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../model/order";
import {OrderService} from "../../services/order.service";
import {ActivatedRoute} from "@angular/router";
import {Meal} from "../../model/meal";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() order: Order;
  meals: Meal[] = [];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(+id)
      .subscribe(res => {
        this.order = res;
        this.meals = this.order.meals;
      });
  }

}
