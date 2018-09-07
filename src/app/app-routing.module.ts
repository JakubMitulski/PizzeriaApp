import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu-list/menu.component";
import {MealDetailComponent} from "./menu-list-item/meal-detail.component";
import {OrderComponent} from "./order-list/order.component";

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'pizza', component: MenuComponent},
  {path: 'pasta', component: MenuComponent},
  {path: 'drink', component: MenuComponent},
  {path: 'menu/:id', component: MealDetailComponent},
  {path: 'order', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
