import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent, LoginComponent, AuthService } from './core/index';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from './shared/icons/icons.module';


@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, IconsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }

