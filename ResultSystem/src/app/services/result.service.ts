import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url = "http://localhost:9090/";
  searchRollNumber : string = '';
  editRollnumber:string = '';
  constructor(private http : HttpClient) { }
  getStudents(){
    return this.http.get(this.url + "students");
  }

  getStudent(){
    return this.http.get(this.url + "students/" + this.editRollnumber)
  }

  postStudent(data: any){
    return this.http.post(this.url + "students", data);
  }

  putStudent(data: any){
    return this.http.put(this.url + "students", data);
  }

  deleteStudent(value : string){
    return this.http.delete(this.url + "students/" + value);
  }

  getstudentSearch(value : string){
    return this.http.get(this.url + "students/" + value);
  }
}
