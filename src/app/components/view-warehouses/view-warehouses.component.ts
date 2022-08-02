import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-view-warehouses',
  templateUrl: './view-warehouses.component.html',
  styleUrls: ['./view-warehouses.component.css']
})
export class ViewWarehousesComponent implements OnInit {

  warehouse:any = []
  displayedColumns: any[] = [
  "warehouseId",
  "warehouseName",
  "areaName",
  "cityName",
  "countryName"
  ];

  constructor(private warehouseService : WarehouseService) { }

  ngOnInit(): void {
    this.warehouseService.getAllWarehouses().subscribe(
      (data:any)=>{
        console.log(data);
        this.warehouse=data;
      }
    )
  }

}
