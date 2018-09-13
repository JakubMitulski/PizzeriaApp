import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {HttpClientModule} from "@angular/common/http";
import {MenuService} from "../services/menu.service";
import {OrderService} from "../services/order.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    const locationValue = jasmine.createSpy('Location');
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
});
