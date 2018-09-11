import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {MealDetailComponent} from "./menu/meal-details/meal-detail.component";
import {OrderComponent} from "./order/order.component";
import {OrderSummaryComponent} from "./order/order-summary/order-summary.component";
import {OrderInfoComponent} from "./order/order-info/order-info.component";
import {LoginComponent} from "./login/login.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {LoginFailureComponent} from "./login/login-failure/login-failure.component";
import {OrderListComponent} from "./order/order-list/order-list.component";
import {OrderDetailsComponent} from "./order/order-details/order-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/menu',  pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'pizza', component: MenuComponent},
  {path: 'pasta', component: MenuComponent},
  {path: 'drink', component: MenuComponent},
  {path: 'menu/:id', component: MealDetailComponent},
  {path: 'order', component: OrderComponent},
  {path: 'summary', component: OrderSummaryComponent},
  {path: 'info', component: OrderInfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'login-failure', component: LoginFailureComponent},
  {path: 'orders', component: OrderListComponent},
  {path: 'orders/:id', component: OrderDetailsComponent},
];

//TODO dodac guarda can activate

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
