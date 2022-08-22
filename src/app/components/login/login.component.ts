import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import {
  UserService
} from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: ''
  }

  constructor(public userService: UserService,private router:Router) {}

  ngOnInit(): void {
    if(this.userService.isLoggedIn()){
      this.router.navigate(['home']);
    }
  }

  logIn() {
    this.userService.login(this.loginData).subscribe({
      next:(data:any)=>{
        this.userService.saveToken(data.token);
        this.userService.getCurrentUser().subscribe(
          (user: any) => {
            this.userService.setUser(user); 
            this.router.navigate(["home"]);
          }
        )
      },
      error:(error:any)=>{
        Swal.fire('Error',error.error,'error');
      }
    })
  }
}
