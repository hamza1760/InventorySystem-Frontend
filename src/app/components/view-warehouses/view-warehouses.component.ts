import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-view-warehouses',
  templateUrl: './view-warehouses.component.html',
  styleUrls: ['./view-warehouses.component.css']
})
export class ViewWarehousesComponent implements OnInit {

  warehouses:any = []
  displayedColumns: any[] = [
  "warehouseId",
  "warehouseName",
  "areaName",
  "cityName",
  "countryName",
  "addInventory",
  "delete"
  
  ];

  constructor(private warehouseService : WarehouseService,public userService:UserService,public route: Router) { }

  ngOnInit(): void {
    this.warehouseService.getAllWarehouses().subscribe(
      (data:any)=>{
        console.log(data);
        this.warehouses=data;
      }
    )
  }

  public placeInventory(warehouseId:any){
    this.route.navigate([`/warehouse/${warehouseId}/place-inventory`])
  }

  public deleteWarehouse(warehouseId:any){
    this.warehouseService.deleteWarehouse(warehouseId).subscribe(
      (data:any)=>{
        this.warehouses = this.warehouses.filter((warehouse:any)=>warehouse.warehouseId!=warehouseId);
        alert("Warehouse deleted");
      }
    )
  }


  

}
