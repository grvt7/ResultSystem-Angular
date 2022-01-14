import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherLoginService } from '../services/teacher-login.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  cacheData : any;
  constructor(private login : TeacherLoginService, private router : Router) { }
  loginTeacher(data : any) {
    this.login.getUser(data.email).subscribe((returnData)=>{
      this.cacheData = returnData;
      if(this.cacheData.email === data.email && this.cacheData.password === data.password){
        this.router.navigate(['tResult'])
      }
    });
  }
  ngOnInit(): void {
  }

}
