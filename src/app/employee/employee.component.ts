import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeData = [];

  constructor(private data: DataserviceService) { 
    this.employeeData = this.data.getEmployeesData();
  }

  ngOnInit() {
  }
  getColor(id) {
    return id % 2 == 0 ? 'blue' : 'black'; 
  }

}
