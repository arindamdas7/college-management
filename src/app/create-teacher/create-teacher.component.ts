import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { Teacher } from '../teacher';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent {
constructor(private authService: AuthServiceService, private router: Router){}

  teacher: Teacher = new Teacher();
  isSuccessful=false;
  isFailed=false;


  form = new FormGroup(
    {
      firstname: new FormControl("",[Validators.required,Validators.minLength(3)]),
      lastname: new FormControl("",[Validators.required,Validators.minLength(2)]),
      contact: new FormControl("",[Validators.required,Validators.minLength(10)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      username: new FormControl("",[Validators.required,Validators.minLength(6)]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)])
    }
  );
  get f()
  {
    return this.form.controls;
  }
  
  onSubmit()
  {
    this.authService.createTeacher(this.teacher).subscribe(
      data=>{
        console.log('SUCCESS',data);
        this.goToTeacherList();
        this.isFailed=false;
        this.isSuccessful=true;
      },
      error=>{
        console.log('FAILURE',error);
        this.isFailed=true;
        this.isSuccessful=false;
      }
    );
  };

  goToTeacherList()
  {
    this.router.navigate(['/teachers']);
  }

}
