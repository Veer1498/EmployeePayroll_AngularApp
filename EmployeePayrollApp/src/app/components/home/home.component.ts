import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee1 } from 'src/app/model/employeeModel';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
    private service:EmployeeServiceService
  ) { }
  list:Employee1[] = [];
  ngOnInit(): void {
    
    this.service.getEmployee().subscribe(x =>{
      console.log(x);
      // this.list = x;
      // this.empList = x;
    });
    
  }

}
