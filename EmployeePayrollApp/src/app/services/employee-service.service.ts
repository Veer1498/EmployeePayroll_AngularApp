import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  insertEmployee(employee : any){
    return this.http.post("http://localhost:8083/employeepayrollservice/create",employee);
  }
}
