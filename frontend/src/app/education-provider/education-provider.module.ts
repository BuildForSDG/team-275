import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationProviderComponent } from './education-provider.component';
import { EducationProviderRoutingModule } from './education-provider-routing.module';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [EducationProviderComponent],
  imports: [
    CommonModule,
    EducationProviderRoutingModule,
    ChartsModule
  ],
  exports: [EducationProviderComponent]
})
export class EducationProviderModule { }
