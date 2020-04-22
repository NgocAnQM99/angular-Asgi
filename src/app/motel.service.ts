import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://5e7fa5367a92ed0016560842.mockapi.io/motels';
const apiUrl2 = 'https://5e7fa5367a92ed0016560842.mockapi.io/students';
@Injectable()
export class MotelService {

  constructor(private http: HttpClient) { }

  getMotels(): Observable<any>{
    return this.http.get<any>(apiUrl);
  }
  
  getMotelById(motelId): Observable<any>{
    let url = `${apiUrl}/${motelId}`;
    return this.http.get<any>(url);
  }

  removeMotelById(motelId): Observable<any>{
    let url = `${apiUrl}/${motelId}`;
    return this.http.delete<any>(url);
  }

  addNewMotel(motelObject): Observable<any>{
    return this.http.post<any>(apiUrl, motelObject);
  }

  updateMotel(motelObject): Observable<any>{
    let url = `${apiUrl}/${motelObject.id}`;
    return this.http.put<any>(url, motelObject);
  }

  
// Student 
getStudents(): Observable<any>{
    return this.http.get<any>(apiUrl2);
  }
  
  getStudentById(studentsid): Observable<any>{
    let url = `${apiUrl2}/${studentsid}`;
    return this.http.get<any>(url);
  }

  removeStudentById(studentsid): Observable<any>{
    let url = `${apiUrl2}/${studentsid}`;
    return this.http.delete<any>(url);
  }

  addNewStudent(studentObject): Observable<any>{
    return this.http.post<any>(apiUrl2, studentObject);
  }

  updateStudent(studentObject): Observable<any>{
    let url = `${apiUrl2}/${studentObject.id}`;
    return this.http.put<any>(url, studentObject);
  }


}