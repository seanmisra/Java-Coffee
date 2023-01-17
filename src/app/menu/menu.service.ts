import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../model/menuItem.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  rootUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }



  getAllFoodItems():Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.rootUrl + 'getFood');
  }

  getAllDrinksItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.rootUrl + 'getDrinks');
  }
}
