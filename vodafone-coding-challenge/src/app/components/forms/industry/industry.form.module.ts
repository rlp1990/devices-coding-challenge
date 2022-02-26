import { NgModule } from '@angular/core';
import { IndustryFormComponent } from './industry.form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    IndustryFormComponent
  ],
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  exports: [IndustryFormComponent],
  providers: []
})
export class IndustryFormModule { }
