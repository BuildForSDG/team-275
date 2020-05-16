import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { PasswordValidator } from '../password.validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  options = ['Education Provider', 'Institution'];
  registrationForm: FormGroup;
  registeras: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  success: boolean;
  error: any;

  // getters to prevent cluttering template with repetitive code

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        registeras: this.registeras = new FormControl(''),
        email: this.email = new FormControl('', [Validators.required, Validators.email]),
        password: this.password = new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
            ),
          ],
        ),
        confirmPassword: this.confirmPassword = new FormControl(''),
      },
      { validator: PasswordValidator }
    );
   }
  saveUser(formValues: any) {
    console.log(formValues);
    this.auth.register(formValues).subscribe(result => {
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
