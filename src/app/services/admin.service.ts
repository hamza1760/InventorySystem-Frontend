import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  public addItem(item:any){
    return this.http.post("http://localhost:8080/item/",item);
  }
  public addWarehouse(warehouse:any){
    return this.http.post("http://localhost:8080/warehouse/",warehouse);
  }

  public addInventory(Inventory:any){
    return this.http.post("http://localhost:8080/inventory/",Inventory);
  }

}