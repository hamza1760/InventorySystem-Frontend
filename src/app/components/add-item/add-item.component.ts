import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  Item={
    itemId: '',
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
    this.adminService.addItem(this.Item).subscribe(
        (data:any)=>{
          alert("Success")
          console.log(data);
        }
        
      )
  }


}
