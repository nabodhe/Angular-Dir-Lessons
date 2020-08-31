import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  pid:number;


  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(p => { this.pid=p.id;});
  }

}
