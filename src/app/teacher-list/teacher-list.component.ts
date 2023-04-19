import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit{
  
  constructor(private authService: AuthServiceService, private router: Router){}
  teachers : Teacher[] | undefined;
  
  ngOnInit(): void {
    this.getTeachers();

}

private getTeachers()
{
  this.authService.getAllTeachers().subscribe(data=>
    {this.teachers=data;});
}

deleteTeacher(id: number)
{
  this.authService.deleteTeacherById(id).subscribe(
  data=>
  {this.reloadpage();}    
  );
}

updateTeacher(id: number)
{
  this.router.navigate(['updateTeacher',id]);
}


reloadpage()
{
  window.location.reload();
}

viewTeacher(id: number)
{
  this.router.navigate(['viewTeacher',id]);
}

}
