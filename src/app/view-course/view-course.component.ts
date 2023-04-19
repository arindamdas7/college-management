import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit{
  course: Course = new Course();
  subId!:number;
  isSuccessful=false;
  isFailed=false;

  constructor(private authService: AuthServiceService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.subId = this.route.snapshot.params['subId'];
    this.authService.getCourseById(this.subId).subscribe(data=>
      {this.course=data;});
  }

  goToCourseList()
  {
    this.router.navigate(['/courses']);
  }
}
