import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  public getAllItems(){
    return this.http.get(`http://localhost:8080/items`);
  }
  public deleteItem(itemId:any){
    return this.http.delete(`http://localhost:8080/item/${itemId}`);
  }
}
