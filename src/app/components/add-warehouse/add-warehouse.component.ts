import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  Warehouse ={
    warehouseId: '',
    warehouseName : '',
    address:{
      addressId: ''
    }
  }

  ngOnInit(): void {
  }
  public addWarehouse(){
    this.adminService.addWarehouse(this.Warehouse).subscribe(
      (data:any)=>{
        alert("Success");
        console.log(data);
      }
    )
  }

}
