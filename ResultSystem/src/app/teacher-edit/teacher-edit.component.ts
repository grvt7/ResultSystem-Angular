import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
  data : any;
  editForm : any;
  constructor(private router : Router, private service : ResultService) {
    this.service.getStudent().subscribe((data)=>{
      this.data = data;
      this.initForm()
    });
  }
  initForm(){
    this.editForm = new FormGroup({
      rollNumber : new FormControl(this.data.rollNumber),
      studentName : new FormControl(this.data.studentName),
      dateOfBirth : new FormControl(this.data.dateOfBirth),
      score : new FormControl(this.data.score)
    });
  }
  editStudent(){    
    this.service.putStudent(this.editForm.value).subscribe((data)=>{     
    });
    this.service.getStudents();
    this.router.navigate(['tResult']);
  }
  goBack(){
    this.router.navigate(['tResult']);
  }
  ngOnInit(): void {
    
  }

}
