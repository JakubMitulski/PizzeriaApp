import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from "../../model/order";
import {OrderService} from "../../services/order.service";
import {ActivatedRoute} from "@angular/router";
import {Meal} from "../../model/meal";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  order: Order = <Order>{status: ""};
  meals: Meal[] = [];
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public orderService: OrderService,
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sub = this.orderService.getOrderById(+id)
      .subscribe(res => {
        this.order = res;
        this.meals = this.order.meals;
      });
  }

  saveStatus(order: Order) {
    this.orderService.saveStatus(order).subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
