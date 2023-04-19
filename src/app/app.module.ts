import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { AssignComponent } from './assign/assign.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewCourseComponent } from './view-course/view-course.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    HomeComponent,
    CourseListComponent,
    CreateTeacherComponent,
    UpdateTeacherComponent,
    UpdateCourseComponent,
    CreateCourseComponent,
    AssignComponent,
    ViewDetailsComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
