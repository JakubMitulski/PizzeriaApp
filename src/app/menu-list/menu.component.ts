import { Component, OnInit } from '@angular/core';
import { Meal } from "../common/meal";
import { MenuService } from "../common/menu.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  meals: Meal[];

  constructor(
    private menuService: MenuService,
    private location: Location
  ) {}

  ngOnInit() {
    this.menuService.getMeals().subscribe(meals => this.meals = meals);
  }

  getPizzas(event: Event){
    this.menuService.getPizzas().subscribe(meals => this.meals = meals);
  }

  getPastas(event: Event){
    this.menuService.getPastas().subscribe(meals => this.meals = meals);
  }

  getDrinks(event: Event){
    this.menuService.getDrinks().subscribe(meals => this.meals = meals);
  }

  goBack(): void {
    this.location.back();
  }

}
