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

  getAllMeals(): Observable<Meal[]>{
    return this.http.get<Meal[]>('http://localhost:3000/meals');
  }

  getAvailableMeals(): Observable<Meal[]>{
    return this.http.get<Meal[]>('http://localhost:3000/meals?isAvailable=true');
  }

  getAvailablePizzas(): Observable<Meal[]>{
    return this.http.get<Meal[]>('http://localhost:3000/meals?type=pizza&&isAvailable=true');
  }

  getAvailablePastas(): Observable<Meal[]>{
    return this.http.get<Meal[]>('http://localhost:3000/meals?type=pasta&&isAvailable=true');
  }

  getAvailableDrinks(): Observable<Meal[]>{
    return this.http.get<Meal[]>('http://localhost:3000/meals?type=drink&&isAvailable=true');
  }

  getMealById(id: number): Observable<Meal> {
    return this.http.get<Meal>(`http://localhost:3000/meals/${id}`);
  }

  setAvailability(meal: Meal, availability: boolean): Observable<Meal>{
    meal.isAvailable = availability;
    return this.http.put<Meal>(`http://localhost:3000/meals/${meal.id}`, meal);
  }
}
