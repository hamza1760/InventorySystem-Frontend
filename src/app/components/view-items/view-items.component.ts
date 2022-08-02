import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  item:any = []
  displayedColumns: any[] = [
  "itemId", 
  "itemName", 
  "productType",
  "brandName"
  ];

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(
      (data:any)=>{
        this.item=data;
      }
    )
  }


}
