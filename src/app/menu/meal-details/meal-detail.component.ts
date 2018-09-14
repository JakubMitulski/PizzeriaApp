import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meal} from "../../model/meal";
import {ActivatedRoute} from "@angular/router";
import {MenuService} from "../../services/menu.service";
import {LoginService} from "../../services/login.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit, OnDestroy {

  meal: Meal;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    public loginService: LoginService,
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sub = this.menuService.getMealById(+id)
      .subscribe(res => this.meal = res);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
