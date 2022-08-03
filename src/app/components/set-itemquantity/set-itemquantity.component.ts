import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-set-itemquantity',
  templateUrl: './set-itemquantity.component.html',
  styleUrls: ['./set-itemquantity.component.css']
})
export class SetItemquantityComponent implements OnInit {

  Inventory ={
    itemSize: '',
    inStock: '',
    avlQty: '',
    inTransit: '',
    minOrderQuantity: '',
    quantityPerBox: '',
    reorderPoint: '',
  }

  constructor(private warehouseService: WarehouseService,private inventoryService:InventoryService,private route : ActivatedRoute) { }

  warehouseId=0;
  inventoryId=0;

  ngOnInit(): void {
    this.warehouseId= this.route.snapshot.params['warehouseId'];
    this.inventoryId= this.route.snapshot.params['inventoryId'];
    this.inventoryService.getInventoryById(this.inventoryId).subscribe(
      (data:any)=>{
        this.Inventory=data;
      }
    )
      }
  

  public setItemQuantity(){
    this.warehouseService.setItemQuantity(this.warehouseId,this.Inventory).subscribe(
      (data:any)=>{
        alert("Success");
      }
    )
  
  }


}
