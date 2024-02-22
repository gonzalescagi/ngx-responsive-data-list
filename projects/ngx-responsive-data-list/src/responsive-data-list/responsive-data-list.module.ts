import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveDataListComponent } from './reponsive-data-list/responsive-data-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ResponsiveDataListComponent
  ],
  exports:[ResponsiveDataListComponent]
})
export class ResponsiveDataListModule { }
