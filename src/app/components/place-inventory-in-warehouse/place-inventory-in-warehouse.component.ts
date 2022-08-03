import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-place-inventory-in-warehouse',
  templateUrl: './place-inventory-in-warehouse.component.html',
  styleUrls: ['./place-inventory-in-warehouse.component.css']
})
export class PlaceInventoryInWarehouseComponent implements OnInit {


  inventory={
    inventoryId: ''
  }

  constructor(private warehouseService: WarehouseService,private route:ActivatedRoute) {
  }

  warehouseId=0;

  ngOnInit(): void {
    this.warehouseId= this.route.snapshot.params['warehouseId'];
  }

  public placeInventory(){
    this.warehouseService.placeInventoryInWarehouse(this.warehouseId,this.inventory).subscribe(
      (data:any)=>{
        alert("Inventory placed in warehouse");
      }
    )
  }

}
