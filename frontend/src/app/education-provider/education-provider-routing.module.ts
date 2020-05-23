import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationProviderComponent } from './education-provider.component';

const routes: Routes = [{ path: 'edu', component: EducationProviderComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EducationProviderRoutingModule { }
