import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { AssignComponent } from './assign/assign.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const routes: Routes = [
  {path:"teachers", component: TeacherListComponent},
  {path:"home", component: HomeComponent},
  {path: '', redirectTo:"home",pathMatch:"full"},
  {path:"courses", component: CourseListComponent},
  {path:"create-teacher", component: CreateTeacherComponent},
  {path:"updateTeacher/:id", component:UpdateTeacherComponent}, 
  {path:"create-course", component: CreateCourseComponent},
  {path:"updateCourse/:subId", component:UpdateCourseComponent},
  {path:"assign", component:AssignComponent},
  {path:'viewTeacher/:id',component: ViewDetailsComponent},
  {path:'viewCourse/:subId',component: ViewCourseComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
