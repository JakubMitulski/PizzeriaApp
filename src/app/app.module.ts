import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu-list/menu.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MealDetailComponent } from './menu-list-item/meal-detail.component';
import { OrderComponent } from './order-list/order.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MealDetailComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


