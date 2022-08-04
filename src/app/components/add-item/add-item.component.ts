import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  Item={
    itemName: '',
    productType:{
      productTypeId: ''
    },
    brand:{
      brandId: ''
    }

  }

  ngOnInit(): void {
  }

  public addItem(){
    this.adminService.addItem(this.Item).subscribe({
      next(data:any){
        Swal.fire('Success','Item added','success');
      },
      error(error:any){
         alert(error.error.message);
      }
     }
    )
  }


}
