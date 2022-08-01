import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  public addItem(item:any){
    return this.http.post("http://localhost:8080/admin/item/",item);
  }
}
