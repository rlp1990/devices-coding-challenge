import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { IndustryComponent } from './industry.component';

@NgModule({
  declarations: [
    IndustryComponent
  ],
  imports: [SharedModule],
  exports: [IndustryComponent],
  providers: []
})
export class IndustryModule { }
