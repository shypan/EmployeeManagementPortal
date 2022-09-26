import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CreateemployeeComponent } from './components/createemployee/createemployee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'createemployee',component:CreateemployeeComponent},
  {path:'contact', component:ContactusComponent},
  {path:'employee/:id',component:EmployeeComponent},
  {path:"**", component:NotFoundComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
