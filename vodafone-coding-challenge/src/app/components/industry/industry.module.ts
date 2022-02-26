import { NgModule } from '@angular/core';
import { IndustryFormModule } from '../forms/industry/industry.form.module';
import { SharedModule } from '../shared.module';
import { IndustryComponent } from './industry.component';
import { IndustryService } from './services/industry.service';

@NgModule({
  declarations: [
    IndustryComponent
  ],
  imports: [SharedModule, IndustryFormModule],
  exports: [IndustryComponent],
  providers: [IndustryService],
})
export class IndustryModule { }
