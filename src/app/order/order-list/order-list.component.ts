import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Order} from "../../model/order";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

  orders: Order[];
  sub: Subscription;

  constructor(private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.orderService.getAllOrders().subscribe(orders => this.orders = orders);
  }

  getDetails(id: number) {
    this.router.navigate(['/orders', id]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
