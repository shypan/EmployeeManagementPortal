import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  constructor(private router: Router, private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  cancel(){
    alert("You will be moving out of this page")
    this.router.navigate(['/employees']);
  
  }

  createEmployee(firstName:string, lastName:string, salary:string, state:string, country:string) {

    let employee:Employee = {
      id: 0,
      firstName:firstName,
      lastName:lastName,
	    salary:parseFloat(salary),
	    state:state,
	    country:country
    }
    this.employeeService.createEmployee(employee).subscribe(response=>{
      console.log(response);
      alert("The Employee has been created");
      this.router.navigate(['/employees'])
    })

  }

}
