import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent, LoginComponent, AuthService } from './core/index';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from './shared/icons/icons.module';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';


@NgModule({
  declarations: [MainComponent, RegisterComponent, LoginComponent, FooterComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, IconsModule],
  providers: [AuthService],
  bootstrap: [MainComponent],
})
export class AppModule { }

