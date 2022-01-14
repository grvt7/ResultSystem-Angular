import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {
  data : any ;
  constructor(private router : Router, private service : ResultService) {
    this.service.getstudentSearch(this.service.searchRollNumber).subscribe((data)=>{
      this.data = data;
    })
  }

  goBack() {
    this.router.navigate(['search']);
  }
  ngOnInit(): void {
  }

}
