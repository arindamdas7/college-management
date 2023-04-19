import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit{
  constructor(private authService: AuthServiceService, private router: Router){}

  teachId!: number;
  courseId!: number;  
  isSuccessful=false;
  isFailed=false;

ngOnInit(): void {
   
  }

  form = new FormGroup(
    {
      teachid: new FormControl("",[Validators.required,Validators.minLength(1)]),
      courseid : new FormControl("",[Validators.required,Validators.minLength(1)])
    }
  );

  get f()
  {
    return this.form.controls;
  }

  onSubmit()
  {
    this.authService.assign(this.teachId,this.courseId).subscribe(
      data=>{
        console.log('SUCCESS',data);
        this.goToCourseList();
        this.isSuccessful=true;
        this.isFailed=false;
      },
      error=>{
        console.log('FAILURE',error);
        this.isFailed=true;
        this.isSuccessful=false;
      }
    );
  };

  goToCourseList()
  {
    this.router.navigate(['/courses']);
  }

}
