import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MealDetailComponent } from './menu/meal-details/meal-detail.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrderInfoComponent } from './order/order-info/order-info.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginFailureComponent } from './login/login-failure/login-failure.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import {RoleGuard} from "./commons/role-guard";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MealDetailComponent,
    OrderComponent,
    OrderSummaryComponent,
    OrderInfoComponent,
    LoginComponent,
    AdminPageComponent,
    LoginFailureComponent,
    OrderListComponent,
    OrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}


