import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import Validation from '../signup/Validation';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  myForm: FormGroup;
  constructor(private router:Router, private builder: FormBuilder,private _snackBar:MatSnackBar ,private userService:UserService) { }

  ngOnInit(): void {
    this.myForm = this.builder.group({
        email: [ '',[ Validators.required, Validators.email]],
        newPassword: [ '', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('newPassword', 'confirmPassword')]
      }
    );
  }

  resetPassword(myForm: FormGroup) {
    console.log(myForm.value)
    if(myForm.valid){
      this.userService.resetPassword(myForm.get('email').value, myForm.get('newPassword').value).subscribe(
        (res)=>{
          if (res === true){
            this._snackBar.open(" your Password is updated.","Done");
            this.router.navigate(['/auth/login'])
          }else {
            this._snackBar.open(" Please verify  your email to change your password.","Done");
          }
        }
      )
    }


  }
}
