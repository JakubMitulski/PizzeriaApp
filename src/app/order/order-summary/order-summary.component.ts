import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Order} from "../../model/order";
import {Meal} from "../../model/meal";
import {OrderService} from "../../services/order.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit, OnDestroy {

  order: Order;
  meals: Meal[] = [];
  sub: Subscription;

  orderForm = new FormGroup({
    firstName: new FormControl('', [ Validators.required ]),
    lastName: new FormControl('', [ Validators.required ]),
    address: new FormControl('', [ Validators.required ]),
    phone: new FormControl('', [ Validators.required ]),
  });

  constructor(readonly orderService: OrderService, private router: Router) {
    this.order = <Order>{};
  }

  ngOnInit() {
    this.meals = this.orderService.getOrder();
  }

  onSubmit() {
    this.order.firstName = this.orderForm.get('firstName').value;
    this.order.lastName = this.orderForm.get('lastName').value;
    this.order.address = this.orderForm.get('address').value;
    this.order.phone = this.orderForm.get('phone').value;
    this.order.status = 'ordered';
    this.order.meals = this.meals;
    this.order.orderDate = new Date();
    this.sub = this.orderService.saveOrder(this.order).subscribe(() => {
      this.orderService.clearOrder();
      this.router.navigate(['/info']);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
