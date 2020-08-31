import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DirComponent } from './dir/dir.component';
import { AttrdirComponent } from './attrdir/attrdir.component';
import { CpipeComponent } from './cpipe/cpipe.component';
import { ReversePipe } from './reverse.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirComponent,
    AttrdirComponent,
    CpipeComponent,
    ReversePipe,
    ProductComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
