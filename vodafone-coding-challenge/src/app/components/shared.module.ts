import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { OverlayService } from './overlay/services/overlay.service';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatChipsModule,
    MatButtonModule,
    OverlayModule
  ],
  exports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatChipsModule,
    MatButtonModule,
    OverlayModule
  ],
  providers: [
    OverlayService,
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
