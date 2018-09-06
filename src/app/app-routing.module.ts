import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu-list/menu.component";

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'pizza', component: MenuComponent},
  {path: 'pasta', component: MenuComponent},
  {path: 'drink', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
