import { Component, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DIALOG_DATA } from '../../overlay/tokens/dialog-tokens';
import { FormBaseComponent } from '../form.base.component';

@Component({
  selector: 'app-industry-form',
  templateUrl: './industry.form.component.html',
  styleUrls: ['./industry.form.component.scss']
})
export class IndustryFormComponent extends FormBaseComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor() {
    super();
  }

  submitFormHandle() {

  }

}
