import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  id: number = 0;
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    salary:0,
    state:'',
    country:''
  }
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    //Fetch the id from the URL
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      //Fetched the post using the ID
      this.employeeService.getEmployee(this.id).subscribe(response => {
        // fill the local object post with the received post
        this.employee = response;
      });

    });
  }

  updateEmployee(firstName: string, lastName:string, salary:string, state:string, country:string) {
    this.employee.firstName = firstName;
    this.employee.lastName = lastName;
    this.employee.salary = parseFloat(salary);
    this.employee.state = state;
    this.employee.country = country;
    this.employeeService.updateEmployee(this.employee).subscribe(response => {
      alert("The employee with id " + response.id + " has been updated");
      this.router.navigate(['/employees']);
    })
  }


  deleteEmployee(){
    this.employeeService.deleteEmployee(this.id).subscribe(response => {
      this.router.navigate(['/employees']);

    })
  }

}
