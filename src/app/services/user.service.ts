import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  //registering user
  public signup(user:any){
    return this.http.post(`http://localhost:8080/signup`,user);
  }
  //generating token
  public login(loginData:any){
    return this.http.post(`http://localhost:8080/generate-token`,loginData)
  }

  //get logged in user
  public getCurrentUser(){
    return this.http.get(`http://localhost:8080/current-user`);
  }
  

  //saving token in local storage
   public saveToken(token:any){
     localStorage.setItem("token",token);
   }

   //checking that user is logged in
   public isLoggedIn(){
     let token = localStorage.getItem("token");
     if(token==null){
       return false;
     }
     else{
     return true;
     }
   }

   //logout - remove token from local storage
   public logout(){
     localStorage.removeItem("token");
     localStorage.removeItem("user")
     console.log("user logged out");
   }
   //getting token from local storage
   public getToken(){
     return localStorage.getItem("token");

   }

   //setting user in local storage
   public setUser(user:any){
     let info = {username: user.username, role: user.authorities[0].authority};
    localStorage.setItem("user",JSON.stringify(info));
   }
   //getting user from local storage
   public getUser(){
     let user =localStorage.getItem("user");
     if(user!=null){
       return JSON.parse(user);
     }
     return null;
   }

   //getting user role
   public getRole(){
    let user = this.getUser();
    return user.role;

}
}
