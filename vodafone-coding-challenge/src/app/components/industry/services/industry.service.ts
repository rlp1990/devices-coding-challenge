import { Injectable } from '@angular/core';
import { IndustryFormComponent } from '../../forms/industry/industry.form.component';
import { DialogRef } from '../../overlay/overlay-ref';
import { OverlayService } from '../../overlay/services/overlay.service';


@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor(private overlayService: OverlayService) {}

  openCreateIndustry(): DialogRef {
    return this.overlayService.open(IndustryFormComponent);
  }
}
