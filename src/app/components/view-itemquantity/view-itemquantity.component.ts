import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { ItemQuantityService } from 'src/app/services/item-quantity.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-itemquantity',
  templateUrl: './view-itemquantity.component.html',
  styleUrls: ['./view-itemquantity.component.css']
})
export class ViewItemquantityComponent implements OnInit {
  itemQuantity: any = []
  displayedColumns: any = [
  'warehouseId', 
  'warehouseName', 
  'areaName', 
  'cityName', 
  'countryName', 
  'inventoryId', 
  'itemSize', 
  'inStock', 
  'avlQty', 
  'itemName', 
  'itemType', 
  'productType', 
  'brandName',
  "update"
];


  constructor(private itemQuantityService: ItemQuantityService,public userService: UserService,private route: Router) { }

  ngOnInit(): void {
    this.itemQuantityService.getItemQuantity().subscribe((data: any) => {
      this.itemQuantity = data;

    });
  }

  public setItemQuantity(warehouseId:any,inventoryId:any){
    this.route.navigate([`warehouse/${warehouseId}/item/quantity/${inventoryId}`])

  }
}
