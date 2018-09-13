import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MealDetailComponent} from './meal-detail.component';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {MenuService} from "../../services/menu.service";
import {LoginService} from "../../services/login.service";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";

describe('MealDetailComponent', () => {
  let component: MealDetailComponent;
  let fixture: ComponentFixture<MealDetailComponent>;

  // beforeEach(async(() => {
  //   const activatedRouteValue = jasmine.createSpy('ActivatedRoute');
  //   TestBed.configureTestingModule({
  //     declarations: [ MealDetailComponent ],
  //     providers: [
  //       HttpClient,
  //       HttpHandler,
  //       MenuService,
  //       LoginService,
  //       {provide: ActivatedRoute, useValue: activatedRouteValue},
  //       {provide: Router, useClass: class {navigate = jasmine.createSpy("navigate")}}
  //      ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MealDetailComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
