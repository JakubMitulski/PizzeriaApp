import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Meal } from "./meal";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(readonly httpClient: HttpClient) { }

  getMeals(): Observable<Meal[]>{
    return this.httpClient.get<Meal[]>('http://localhost:3000/meals');
  }

  getPizzas(): Observable<Meal[]>{
    return this.httpClient.get<Meal[]>('http://localhost:3000/meals?type=pizza');
  }

  getPastas(): Observable<Meal[]>{
    return this.httpClient.get<Meal[]>('http://localhost:3000/meals?type=pasta');
  }

  getDrinks(): Observable<Meal[]>{
    return this.httpClient.get<Meal[]>('http://localhost:3000/meals?type=drink');
  }

}
