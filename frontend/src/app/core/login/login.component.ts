import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ILogin } from 'src/app/shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  success: boolean;
  error: any;

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.email = new FormControl('', [Validators.required, Validators.email]),
      password: this.password = new FormControl('', Validators.required)
    });
  }
  send(formValues: ILogin) {
    this.auth.logIn(formValues).subscribe(result => {
      if (result) { this.success = true; this.onSuccess(); }
    }, err => {this.error = err; console.log(err); this.onError(); });
  }
  onSuccess() {
    setTimeout(() => {
      this.success = false;
    }, 5000);
    }
    onError() {
      setTimeout(() => {
        this.error = undefined;
      }, 5000);
    }
}
