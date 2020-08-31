import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attrdir',
  templateUrl: './attrdir.component.html'

})
export class AttrdirComponent implements OnInit {
  colors : any[];
  color: string = null;
  constructor() {
    this.colors = ['red','blue','green'];
   }

  ngOnInit(): void {
  }

}
