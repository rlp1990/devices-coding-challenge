import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { DeviceComponent } from './device.component';

@NgModule({
  declarations: [DeviceComponent],
  imports: [SharedModule],
  exports: [DeviceComponent],
  providers: []
})
export class DeviceModule { }
