import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = 'http://localhost:8080/api/v1/employees'

  constructor(private http: HttpClient) { }

  getEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }


  getEmployee(id: number): Observable<Employee>{
    return this.http.get<Employee>(this.url + '/' + id);
  }

  createEmployee(post:Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, post);
  }

  deleteEmployee(id: number){
    return this.http.delete(this.url + '/' + id);
  }

  updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.url + '/' + employee.id, employee);

  }
}
