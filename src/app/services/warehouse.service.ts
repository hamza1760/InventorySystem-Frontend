import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http:  HttpClient) { }

  public getAllWarehouses(){
    return this.http.get(`http://localhost:8080/warehouses`);
  }
  public deleteWarehouse(warehouseId:any){
    return this.http.delete(`http://localhost:8080/warehouse/${warehouseId}`);
  }

  public placeInventoryInWarehouse(warehouseId:any,Inventory:any){
    return this.http.put(`http://localhost:8080/warehouse/${warehouseId}`,Inventory);
  }

  public getItemQuantity(){
    return this.http.get(`http://localhost:8080/warehouse/item/quantity`);
  }

  public setItemQuantity(warehouseId:any,Inventory:any){
    return this.http.put(`http://localhost:8080/warehouse/${warehouseId}/item/quantity`,Inventory);
  }

}
