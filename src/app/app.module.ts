import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactusComponent } from './components/contactus/contactus.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CreateemployeeComponent } from './components/createemployee/createemployee.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    NotFoundComponentComponent,
    NavbarComponent,
    ContactusComponent,
    EmployeesComponent,
    EmployeeComponent,
    CreateemployeeComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



