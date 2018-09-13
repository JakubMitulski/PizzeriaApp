import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MenuService} from "../services/menu.service";
import {OrderService} from "../services/order.service";
import {RouterTestingModule} from "@angular/router/testing";
import {of} from "rxjs";
import {Order} from "../model/order";
import {Router} from "@angular/router";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [
        MenuService,
        OrderService,
        ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service after component-getPizzas method call', inject([MenuService], (service: MenuService) => {
    //Given
    const menuService = TestBed.get(MenuService);
    const getAvailablePizzasSpy = spyOn(menuService, 'getAvailablePizzas').and.returnValue(of([]));

    //When
    component.getPizzas();

    //Then
    expect(getAvailablePizzasSpy).toHaveBeenCalled();
  }));

  it('should test getPizzas method', inject([MenuService], (service: MenuService) => {
    //Given
    const menuService = TestBed.get(MenuService);
    const getAvailablePizzasSpy = spyOn(menuService, 'getAvailablePizzas').and.returnValue(of([]));

    //When
    component.getPizzas();

    //Then
    expect(getAvailablePizzasSpy).toHaveBeenCalled();
  }));

  it('should test getDetails method', inject([OrderService], (service: OrderService) => {
    //Given
    const routerModule = TestBed.get(Router);
    const navigateSpy = spyOn(routerModule, 'navigate');
    const id = 1;

    //When
    component.getDetails(id);

    //Then
    expect(navigateSpy).toHaveBeenCalled();
  }));



});
