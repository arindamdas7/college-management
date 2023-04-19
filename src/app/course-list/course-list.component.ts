import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  constructor(private authService: AuthServiceService, private router: Router){}
  courses : Course[] | undefined;
  
  ngOnInit(): void {
    this.getCourses();

}
private getCourses()
{
  this.authService.getAllCourse().subscribe(data=>
    {this.courses=data;});
}

deleteCourse(subId: number)
{
  this.authService.deleteCourseById(subId).subscribe(
  data=>
  {this.reloadpage();}    
  );
}

updateCourse(subId: number)
{
  this.router.navigate(['updateCourse',subId]);
}

reloadpage()
{
  window.location.reload();
}


viewCourse(id: number)
{
  this.router.navigate(['viewCourse',id]);
}
}
