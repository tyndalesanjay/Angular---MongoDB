import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    let baseUrl = 'http://localhost:4000/api'
    return this.http.get(baseUrl)
  }

  getById(_id: any): Observable<any> {
    const baseUrl = 'http://localhost:4000/api/find'
    return this.http.get(`${baseUrl}/${_id}`)
  }

  createStudent(data: any): Observable<any> {
    const baseUrl = 'http://localhost:4000/api/create'
    return this.http.post(baseUrl, data)
  }

  deleteById(_id: any) {
    const baseUrl = 'http://localhost:4000/api/delete'
    return this.http.delete(`${baseUrl}/${_id}`)
  }

  updateStudent(_id:any, data: any): Observable<any> {
    const baseUrl = 'http://localhost:4000/api/update'
    return this.http.put(`${baseUrl}/${_id}`, data)
  }

  deleteAll(): Observable<any> {
    const baseUrl = 'http://localhost:4000/api/delete_all'
    return this.http.delete(baseUrl)
  }
}
