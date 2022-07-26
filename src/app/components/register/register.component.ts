import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private signup:SignupService) { }

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

  formSubmit(){
        this.signup.addUser(this.User).subscribe(
          (data)=>{
            alert("success");
          }
        )
      }
  }
