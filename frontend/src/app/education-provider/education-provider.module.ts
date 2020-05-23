import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationProviderComponent } from './education-provider.component';
import { EducationProviderRoutingModule } from './education-provider-routing.module';



@NgModule({
  declarations: [EducationProviderComponent],
  imports: [
    CommonModule,
    EducationProviderRoutingModule
  ],
  exports: [EducationProviderComponent]
})
export class EducationProviderModule { }
