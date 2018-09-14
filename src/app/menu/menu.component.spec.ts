import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {HttpClientModule} from "@angular/common/http";
import {MenuService} from "../services/menu.service";
import {OrderService} from "../services/order.service";
import {RouterTestingModule} from "@angular/router/testing";
import {of} from "rxjs";
import {Router} from "@angular/router";
import {Meal} from "../model/meal";

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

  it('should test getPizzas method', inject([MenuService], (service: MenuService) => {
    //Given
    const menuService = TestBed.get(MenuService);
    const getAvailablePizzasSpy = spyOn(menuService, 'getAvailablePizzas').and.returnValue(of([]));

    //When
    component.getPizzas();

    //Then
    expect(getAvailablePizzasSpy).toHaveBeenCalled();
  }));

  it('should test getPastas method', inject([MenuService], (service: MenuService) => {
    //Given
    const menuService = TestBed.get(MenuService);
    const getAvailablePastasSpy = spyOn(menuService, 'getAvailablePastas').and.returnValue(of([]));

    //When
    component.getPastas();

    //Then
    expect(getAvailablePastasSpy).toHaveBeenCalled();
  }));

  it('should test getDrinks method', inject([MenuService], (service: MenuService) => {
    //Given
    const menuService = TestBed.get(MenuService);
    const getAvailableDrinksSpy = spyOn(menuService, 'getAvailableDrinks').and.returnValue(of([]));

    //When
    component.getDrinks();

    //Then
    expect(getAvailableDrinksSpy).toHaveBeenCalled();
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

  it('should test addItemToOrder method', inject([OrderService], (service: OrderService) => {
    //Given
    const orderService = TestBed.get(OrderService);
    const orderServiceSpy = spyOn(orderService, 'addItemToOrder');
    const meal = <Meal>{};

    //When
    component.addItemToOrder(meal);

    //Then
    expect(orderServiceSpy).toHaveBeenCalled();
  }));

  it('should test ngOnInit method', inject([OrderService], (service: OrderService) => {
    //Given
    const menuService = TestBed.get(MenuService);
    const menuServiceSpy = spyOn(menuService, 'getAvailableMeals').and.returnValue(of([]));

    //When
    component.ngOnInit();

    //Then
    expect(menuServiceSpy).toHaveBeenCalled();
  }));

});
