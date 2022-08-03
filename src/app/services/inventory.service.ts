import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http : HttpClient) { }

  public getAllInventory(){
    return this.http.get(`http://localhost:8080/inventories`)
  }
  public deleteInventory(inventoryId:any){
  return this.http.delete(`http://localhost:8080/inventory/${inventoryId}`)
  }
}
