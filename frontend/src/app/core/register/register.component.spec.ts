// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import {
//   FormsModule,
//   ReactiveFormsModule,
//   EmailValidator,
// } from '@angular/forms';
// import { BrowserModule, By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import { RegisterComponent } from './register.component';

// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [RegisterComponent],
//       imports: [BrowserModule, FormsModule, ReactiveFormsModule],
//     })
//       .compileComponents()
//       .then(() => {
//         fixture = TestBed.createComponent(RegisterComponent);

//         component = fixture.componentInstance; // ContactComponent test instance
//         // query for the title <h1> by CSS element selector
//         de = fixture.debugElement.query(By.css('form'));
//         el = de.nativeElement;
//       });
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it(`form should be invalid`, async(() => {
//     expect(component.registrationForm.valid).toBeFalsy();
//   }));

//   it(`email should be valid`, async(() => {
//     component.registrationForm.controls['email'].setValue('asd@asd.com');
//     expect(component.registrationForm.controls['email']).toBeTruthy();
//   }));

//   it('email field should have errors when empty', async(() => {
//     let errors = {};
//     const email = component.registrationForm.controls['email'];
//     errors = email.errors || {};
//     expect(errors['required']).toBeTruthy();
//     1;
//   }));

//   it('email field should match pattern', async(() => {
//     const email = component.registrationForm.controls['email'];
//     email.setValue('someone@gmail.com');
//     const errors = email.errors || {};
//     expect(errors['email']).toBeFalsy();
//   }));

//   it(`password should be valid`, async(() => {
//     component.registrationForm.controls['password'].setValue('somePassword*1');
//     expect(component.registrationForm.controls['password']).toBeTruthy();
//   }));

//   it('password field should have errors when empty', async(() => {
//     let errors = {};
//     const password = component.registrationForm.controls['password'];
//     errors = password.errors || {};
//     expect(errors['required']).toBeTruthy();
//     1;
//   }));

//   it('password field should match pattern', async(() => {
//     const password = component.registrationForm.controls['password'];
//     password.setValue('SomePassword*1');
//     const errors = password.errors || {};
//     expect(errors['pattern']).toBeFalsy();
//   }));
// });
