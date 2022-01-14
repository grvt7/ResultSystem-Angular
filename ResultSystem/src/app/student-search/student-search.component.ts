import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  constructor(private router : Router, private service : ResultService) { }
  

  studentSearch(data:any){
    this.service.searchRollNumber = data.rollNumber;
    this.router.navigate(['result']);
  }


  ngOnInit(): void {
  }

}
