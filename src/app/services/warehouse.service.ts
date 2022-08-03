import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http:  HttpClient) { }

  public getAllWarehouses(){
    return this.http.get(`http://localhost:8080/warehouses`)
  }
  public deleteWarehouse(warehouseId:any){
    return this.http.delete(`http://localhost:8080/warehouse/${warehouseId}`)
  }
}
