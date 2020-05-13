import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  constructor(private fb: FormBuilder) {}
  
  loginForm = this.fb.group({
    registeras: [""],
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required, ,],
    confirmPassword: [""],
  });
  ngOnInit() {}
}
