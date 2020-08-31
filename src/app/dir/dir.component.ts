import { Component, OnInit } from '@angular/core';
import { CEmployee, Employee } from "../employee"

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html'
})
export class DirComponent implements OnInit {
  num : number;
  alphabet : string;
  colors : any[];
  empObj:Employee;
  eName:string;
  eSalary:number;
  constructor() {
    this.num = 1;
    this.colors = ['red','blue','green'];
    this.empObj = new CEmployee();
    //this.empObj.getSalary(1000);
    //this.eSalary = this.empObj.getSalary(1000);
     this.eName = this.empObj.getManagerName(1);
  }

  ngOnInit(): void {
  }

}
