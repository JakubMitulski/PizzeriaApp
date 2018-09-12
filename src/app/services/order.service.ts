import {Injectable} from '@angular/core';
import {Meal} from "../model/meal";
import {Order} from "../model/order";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  meals: Meal[] = [];

  constructor(
    private http: HttpClient) {
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

  calculatePrice() {
    let totalPrice: number = 0;
    this.meals.forEach(meal => totalPrice = +totalPrice + +meal.price);
    return totalPrice;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('http://localhost:3000/orders', order);
  }

  getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`http://localhost:3000/orders/${id}`);
  }

  saveStatus(order: Order): Observable<Order>{
    return this.http.put<Order>(`http://localhost:3000/orders/${order.id}`, order);
  }
}
