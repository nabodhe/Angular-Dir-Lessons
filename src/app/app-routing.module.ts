import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { DirComponent } from './dir/dir.component';
import { CpipeComponent } from './cpipe/cpipe.component';
import { AttrdirComponent } from './attrdir/attrdir.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'dir',
    component: DirComponent,
  },
  {
    path: 'cpipe',
    component: CpipeComponent,
  },
  {
    path: 'attrdir',
    component: AttrdirComponent,
  },
  {
    path : 'Product/:id',
    component : ProductComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
],
exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
