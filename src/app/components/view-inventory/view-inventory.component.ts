import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {

  inventory:any = []
  displayedColumns: any[] = [
  "inventoryId",
  "itemSize",
  "inStock",
  "avlQty",
  "inTransit",
  "minOrderQuantity",
  "quantityPerBox",
  "reorderPoint",
  "itemName",
  "itemType"
];

  constructor(private inventoryService:  InventoryService) { }



  ngOnInit(): void {
    this.inventoryService.getAllInventory().subscribe(
      (data:any)=>{
      this.inventory=data;
    }
    )
  }

}
