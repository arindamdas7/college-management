import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Teacher } from './teacher';
import { Course } from './course';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';

const TEACHER = 'http://localhost:8080/teacher/';
const deleteTeach = 'http://localhost:8080/teacher/deleteTeacherById/';
const COURSE = 'http://localhost:8080/course/';
const deleteCourse = 'http://localhost:8080/course/deleteCourseById/';
const updateTeach = 'http://localhost:8080/teacher/updateTeacher';
const getTeachById ='http://localhost:8080/teacher/getTeacherById';
const updateCourse ='http://localhost:8080/course/updateCourse';
const getCourseById = 'http://localhost:8080/course/getCourseById';
const assigning = 'http://localhost:8080/course/assignTeacherToCourse';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<Teacher[]>
  {
    return this.http.get<Teacher[]>(TEACHER+'getAllTeachers',httpOptions);
  }

  deleteTeacherById(id: number):Observable<Object>
  {
    return this.http.delete(`${deleteTeach}/${id}`);
  }

  createTeacher(teacher: Teacher): Observable<Object>
  {
    return this.http.post<any>(TEACHER+'createTeacher', teacher,httpOptions);
  }

  updateTeacherById(id: number, teacher: Teacher): Observable<Object>
  {
    return this.http.put(`${updateTeach}/${id}`,teacher);
  }

  getTeacherById(id: number): Observable<Teacher>
  {
    return this.http.get<Teacher>(`${getTeachById}/${id}`);
  }

  getAllCourse(): Observable<Course[]>
  {
    return this.http.get<Course[]>(COURSE+'getAllCourses',httpOptions);
  }

  deleteCourseById(id: number):Observable<Object>
  {
    return this.http.delete(`${deleteCourse}/${id}`);
  }

  createCourse(course: Course): Observable<Object>
  {
    return this.http.post<any>(COURSE+'createCourse', course,httpOptions);
  }

  updateCourseById(id: number, course: Course): Observable<Object>
  {
    return this.http.put(`${updateCourse}/${id}`,course);
  }

  getCourseById(id: number): Observable<Course>
  {
    return this.http.get<Course>(`${getCourseById}/${id}`);
  }

  assign(teacherId: number, courseId: number): Observable<Params>
  {
    return this.http.post(`${assigning}/${teacherId}/${courseId}`,httpOptions);
  }

}
