import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpipe',
  templateUrl: './cpipe.component.html'
})
export class CpipeComponent implements OnInit {
  employees:any[];
  constructor() {
    this.employees = [
      {name:"One", address:"Pune" , salary : "15000", doj:new Date(2017,1,3)},
      {name:"Two", address:"Mumbai" , salary : "12000", doj:new Date(2017,1,3)},
      {name:"Three", address:"Bengluru" , salary : "15000", doj:new Date(2017,1,3)},
      {name:"Four", address:"Hyderabad" , salary : "13000", doj:new Date(2017,1,3)},
    ]
  }

  ngOnInit(): void {
  }

}
