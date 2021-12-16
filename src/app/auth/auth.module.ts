import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, ResetpasswordComponent],
  imports: [
    MatSnackBarModule,
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class AuthModule { }
