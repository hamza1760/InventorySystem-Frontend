import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }
  Inventory ={
    inventoryId: '',
    itemSize: '',
    inStock: '',
    avlQty: '',
    inTransit: '',
    minOrderQuantity: '',
    quantityPerBox: '',
    reorderPoint: '',
    item:{
      itemId:'',
    },
    itemType:{
      itemTypeId: ''
    }
  }

  public addInventory(){
    this.adminService.addInventory(this.Inventory).subscribe(
      (data:any)=>{
        alert("Success");
        console.log(data);
      }
    )
  }

  

}
