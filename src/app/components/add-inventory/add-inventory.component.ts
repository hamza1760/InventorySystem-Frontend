import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

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
    this.adminService.addInventory(this.Inventory).subscribe({
     next:(data:any)=>{
      Swal.fire('Success','Inventory added','success');
     },
     error:(error:any)=>{
        alert(error.error.message);
     }
    }

    )
  }

  

}
