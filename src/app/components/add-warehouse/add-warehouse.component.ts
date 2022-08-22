import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  Warehouse ={
    warehouseName : '',
    address:{
      addressId: ''
    }
  }

  ngOnInit(): void {
  }
  public addWarehouse(){
    this.adminService.addWarehouse(this.Warehouse).subscribe({
      next:(data:any)=>{
        Swal.fire('Success','Warehouse added','success');
        
      },
      error:(error:any)=>{
         alert(error.error.message);
      }
     }
    )
  }

}
