import { Component, OnInit } from '@angular/core';
import { ItemQuantityService } from 'src/app/services/item-quantity.service';

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
  'brandName'
];


  constructor(private itemQuantityService: ItemQuantityService) { }

  ngOnInit(): void {
    this.itemQuantity.getItemQuantity().subscribe((data: any) => {
      this.itemQuantity = data;
      console.log(this.itemQuantity)

    });
  }
}
