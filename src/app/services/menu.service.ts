import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, of} from "rxjs";
import { Meal } from "../model/meal";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient) { }

  getMeals(): Observable<Meal[]>{
    return this.http.get<Meal[]>('http://localhost:3000/meals?isAvailable=true');
  }

  getPizzas(): Observable<Meal[]>{
    return this.http.get<Meal[]>('http://localhost:3000/meals?type=pizza&&isAvailable=true');
  }

  getPastas(): Observable<Meal[]>{
    return this.http.get<Meal[]>('http://localhost:3000/meals?type=pasta&&isAvailable=true');
  }

  getDrinks(): Observable<Meal[]>{
    return this.http.get<Meal[]>('http://localhost:3000/meals?type=drink&&isAvailable=true');
  }

  getMealById(id: number): Observable<Meal> {
    return this.http.get<Meal>(`http://localhost:3000/meals/${id}`);
  }
}
