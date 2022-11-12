import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee1 } from '../model/employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  insertEmployee(employee : any){
    return this.http.post("http://localhost:8083/employeepayrollservice/create",employee);
  }
  getEmployee():Observable<object>{
    return this.http.get("http://localhost:8083/employeepayrollservice/getAll")
  }

  deleteEmployeeById(id :Number){
    return this.http.delete("http://localhost:8083/employeepayrollservice/delete/"+id)
  }
}
