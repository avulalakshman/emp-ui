import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../emp/model/emp';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  empList:Employee[] = [];
  constructor(private empService:EmpService) { }

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees(){
      this.empService.getEmployees().subscribe(data=>{
        this.empList = data;
      })
  }


}
