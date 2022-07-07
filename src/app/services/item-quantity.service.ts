import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemQuantityService {

  constructor(private http: HttpClient) { }

  public getitemQuantity(){
    return this.http.get('http://localhost:8181/itemsinwarehouse/');
  }
}
