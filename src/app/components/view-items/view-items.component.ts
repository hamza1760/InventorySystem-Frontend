import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  items:any = []
  displayedColumns: any[] = [
  "itemId", 
  "itemName", 
  "productType",
  "brandName",
  "delete"
  ];

  constructor(public itemService: ItemService,public userService: UserService) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(
      (data:any)=>{
        this.items=data;
      }
    )
  }

  public deleteItem(itemId:any){
    this.itemService.deleteItem(itemId).subscribe(
      (data:any)=>{
        this.items = this.items.filter((item:any)=>item.itemId!=itemId);
        alert("Item deleted");
      }
    )
  }


}
