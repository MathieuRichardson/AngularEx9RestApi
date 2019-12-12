import { Injectable } from '@angular/core';
import { SharedService, API_URL } from './shared.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends SharedService{

  constructor(private http : HttpClient) { super(); }

  public getDepartments() : Observable<Department[]>{
    const apiMethod = `${API_URL}/api/Department`;
    return this.http.get<Department[]>(apiMethod).pipe(catchError(super.handleError));
  }

  public  getDepartment( id: number) : Observable<Department>{
    const apiMethod = `${API_URL}/api/Department/Details/${id}`;
    return this.http.get<Department>(apiMethod).pipe(catchError(super.handleError)); 
  }

  public createDepartment (department : Department): Observable<Department>{
    const apiMethod = `${API_URL}/api/Department/Create`;

    return this.http.post<Department>(apiMethod, department, super.httpOptions()).pipe(catchError(super.handleError)); 
  }

  public updateDepartment (department: Department): Observable<number>{
    const apiMethod = `${API_URL}/api/Department/Edit`;

    return this.http.post<number>(apiMethod, department, super.httpOptions()).pipe(catchError(super.handleError)); 
  }

  public deleteDepartment (id:number): Observable<boolean>{
    const apiMethod = `${API_URL}/api/Department/Delete/${id}`;

    return this.http.post<boolean>(apiMethod, id, super.httpOptions()).pipe(catchError(super.handleError)); 
  }
}
