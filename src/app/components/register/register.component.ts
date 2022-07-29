import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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
        this.userService.signup(this.User).subscribe(
          (data)=>{
            alert("success");
          }
        )
      }
  }
