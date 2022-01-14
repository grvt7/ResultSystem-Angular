import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-teacher-result',
  templateUrl: './teacher-result.component.html',
  styleUrls: ['./teacher-result.component.css']
})
export class TeacherResultComponent implements OnInit {
  results : any;
  constructor(private router : Router, private service : ResultService) {
    this.fetchData();
  }
  fetchData(){
    this.service.getStudents().subscribe((data) => {
      this.results = data;
    });
  }
  getToAdd(){
    this.router.navigate(['tAdd'])
  }
  getEditResult(data : any){
    this.service.editRollnumber = data;
    this.router.navigate(['tEdit'])
  }
  deleteElement(data: string){
    this.service.deleteStudent(data).subscribe(()=>{
      this.fetchData();
    });
  }
  logout(){
    this.router.navigate(['tLogin'])
  }

  ngOnInit(): void {
  }

}
