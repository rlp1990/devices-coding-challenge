import { Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Directive()
export abstract class FormBaseComponent {

  form: FormGroup;

  matcher = new MyErrorStateMatcher();

  hasFieldError(name: string, validator: string): boolean {
    return this.form.controls[name].hasError(validator);
  }

}
