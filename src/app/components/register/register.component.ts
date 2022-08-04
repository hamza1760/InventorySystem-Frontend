import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService) { }

  public User = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {
  }

  signUp(){
        this.userService.signup(this.User).subscribe({
          next:(data:any)=>{
            Swal.fire('Success','User Registered','success');
          },
          error:(error:any)=>{
            Swal.fire('Error',error.error.message,'error');
          }
  })
      }
  }
