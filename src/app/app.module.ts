import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeavesComponent } from './leaves/leaves.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpComponent } from './help/help.component';
import { AddprefixPipe } from './addprefix.pipe';

import { DataserviceService } from './dataservice.service';

const appRoutes: Routes = [
  {path: 'aboutus', component:  AboutusComponent},
  {path: '', component:  EmployeeComponent},
  {path: 'employee', component:  EmployeeComponent},
  {path: 'leaves', component:  LeavesComponent},
  {path: 'help', component:  HelpComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    LeavesComponent,
    AboutusComponent,
    HelpComponent,
    AddprefixPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BsDropdownModule.forRoot(),

  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
