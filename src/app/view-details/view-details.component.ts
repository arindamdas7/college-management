import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit{
  constructor(private authService: AuthServiceService, private router: Router, private route: ActivatedRoute){}

  id!: number;
  teacher: Teacher = new Teacher();

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.authService.getTeacherById(this.id).subscribe(data=>
      {this.teacher=data;})
  }
  
  
  goToTeacherList()
  {
    this.router.navigate(['/teachers']);
  }

}
  

