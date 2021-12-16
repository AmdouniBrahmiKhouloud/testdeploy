import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { toNumbers } from '@angular/compiler-cli/src/diagnostics/typescript_version';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../auth/signup/Validation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'll-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {
  user:User= new User();
  myForm: FormGroup;
  date:String;
  constructor(private builder: FormBuilder,private _snackBar:MatSnackBar ,private userService:UserService) { }

  ngOnInit(): void {
    console.log(toNumbers(localStorage.getItem('loggedUserId'))[0]);
    this.myForm = this.builder.group({
        currentPassword: [ ''],
        newPassword: [''],
      }
    );
    this.user.prenom=localStorage.getItem("loggedUserFirstName");
    this.user.nom=localStorage.getItem("loggedUserLastName");
    this.user.email=localStorage.getItem("loggedUserEmail");
    this.user.categorieClient=localStorage.getItem("loggedUserAccountCategory");
    this.date=localStorage.getItem("loggedUserBirthDate");
    this.user.profession=localStorage.getItem("loggedUserProfession");

  }

  updatePassword(myForm: FormGroup) {
  //console.log(myForm.value)
    if(myForm.valid){
      this.userService.updatPassword(toNumbers(localStorage.getItem('loggedUserId'))[0],
        myForm.get('currentPassword').value, myForm.get('newPassword').value).subscribe((res)=>{
          if (res === true){
            this._snackBar.open(" Your Password is updated.","Done");
            myForm.get('currentPassword').setValue('');
            myForm.get('newPassword').setValue('');
          }else {
            this._snackBar.open(" Please verify your current password.","Done");
            myForm.get('currentPassword').setValue('');
            myForm.get('newPassword').setValue('');
          }
      })
    }
  }
}
