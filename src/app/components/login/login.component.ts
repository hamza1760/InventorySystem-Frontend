import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import {
  UserService
} from 'src/app/services/user.service';

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

  ngOnInit(): void {}

  logIn() {
    this.userService.login(this.loginData).subscribe(
      (data: any) => {
        this.userService.saveToken(data.token);
        this.userService.getCurrentUser().subscribe(
          (user: any) => {
            this.userService.setUser(user); 
            this.router.navigate(["home"]);
          }
        )
        
      } );
  }
}
