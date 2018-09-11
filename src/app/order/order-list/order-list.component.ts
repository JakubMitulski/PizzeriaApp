import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Order} from "../../model/order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(orders => this.orders = orders);
  }

  getDetails(id: number) {
    this.router.navigate(['/orders', id]);
  }

}
