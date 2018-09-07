import {Component, Input, OnInit} from '@angular/core';
import {Meal} from "../meal";
import {ActivatedRoute} from "@angular/router";
import {MenuService} from "../services/menu.service";
import {OrderService} from "../services/order.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit { //

@Input() meal: Meal;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private orderService: OrderService,
  ) { }

  // ngOnInit(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.menuService.getMealById(id)
  //     .subscribe(meal => this.meal = meal);
  // }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.menuService.getMealById(+id)
      //.pipe(takeUntil(this.destroy$))
      .subscribe(res => this.meal = res);
  }


}
