import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherLoginService {
  url:string = 'http://localhost:9090/user/';
  constructor(private http : HttpClient) { }
  getUser(id : string){
    return this.http.get(this.url + id);
  }
}
