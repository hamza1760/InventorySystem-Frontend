import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {

  inventories:any = []
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
  "itemType",
  "delete"
];

  constructor(private inventoryService:  InventoryService,public userService:UserService) { }



  ngOnInit(): void {
    this.inventoryService.getAllInventory().subscribe(
      (data:any)=>{
      this.inventories=data;
    }
    )
  }
  public deleteInventory(inventoryId:any){
    this.inventoryService.deleteInventory(inventoryId).subscribe(
      (data:any)=>{
        this.inventories = this.inventories.filter((inventory:any)=>inventory.inventoryId!=inventoryId);
        alert("inventory deleted");
      }
    )
  }


}
