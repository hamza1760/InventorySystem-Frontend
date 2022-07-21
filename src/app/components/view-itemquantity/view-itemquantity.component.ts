import { Component, OnInit } from '@angular/core';
import { switchAll } from 'rxjs';
import { ItemQuantityService } from 'src/app/services/item-quantity.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-itemquantity',
  templateUrl: './view-itemquantity.component.html',
  styleUrls: ['./view-itemquantity.component.css']
})
export class ViewItemquantityComponent implements OnInit {
  getItemQuantity: any = []
  displayedColumns: any = ['warehouseId', 'warehouseName', 'areaName', 'cityName', 'countryName', 'inventoryId', 'itemSize', 'inStock', 'avlQty', 'itemName', 'itemId', 'itemType', 'productType', 'brandName'];


  constructor(private itemQuantity: ItemQuantityService) { }

  ngOnInit(): void {
    this.itemQuantity.getItemQuantity().subscribe((data: any) => {
      this.getItemQuantity = data;
      console.log(this.getItemQuantity)

    });
  }
}
