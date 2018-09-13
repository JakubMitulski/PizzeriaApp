import {inject, TestBed} from '@angular/core/testing';

import {OrderService} from './order.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {Meal} from "../model/meal";
import {Order} from "../model/order";

describe('OrderService', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));

  it('should add item to order', inject([OrderService], (service: OrderService) => {
    const meal = <Meal>{};

    service.addItemToOrder(meal);

    expect(service.meals.length).toBe(1);
  }));

  it('should clear the order', inject([OrderService], (service: OrderService) => {
    service.clearOrder();

    expect(service.meals.length).toBe(0);
  }));

  it('should return order', inject([OrderService], (service: OrderService) => {
    var order = service.getOrder();

    expect(order).toBeTruthy();
  }));

  it('should calculate price of the order', inject([OrderService], (service: OrderService) => {
    //Given
    const mealOne = <Meal>{
      price: 5
    };
    const mealTwo = <Meal>{
      price: 10
    };
    const mealThree = <Meal>{
      price: 15
    };

    //When
    service.addItemToOrder(mealOne);
    service.addItemToOrder(mealTwo);
    service.addItemToOrder(mealThree);

    //Then
    expect(service.calculatePrice()).toBe(30);
  }));

  it('should save order', inject([OrderService], (service: OrderService) => {
    //Given
    const clientModule = TestBed.get(HttpClient);
    const postSpy = spyOn(clientModule, 'post');
    const order = <Order>{};

    //When
    service.saveOrder(order);

    //Then
    expect(postSpy).toHaveBeenCalled();
  }));

});
