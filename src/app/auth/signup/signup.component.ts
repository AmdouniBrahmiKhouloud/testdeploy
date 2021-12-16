import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import Validation from './Validation';
import {Router} from "@angular/router";
import { UserService } from '../../services/user.service';
import { Role } from '../../model/Role';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  user: User = new User();
  submitted = false;
  role : Role = new  Role();
  profession: any = ['Docteur', 'ingenieur', 'etudiant', 'commercial','cadre','autre']
  constructor(private builder: FormBuilder ,private userService:UserService,private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.myForm = this.builder.group({
      firstName: [this.user.nom,[ Validators.required ,Validators.minLength(3)]],
      lastName: [ this.user.prenom, [Validators.required, Validators.minLength(3)]],
      email: [ this.user.email,[ Validators.required, Validators.email]],
      birthDate: [ this.user.dateNaissance, Validators.required],
      password: [ this.user.password, Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      profession: [this.user.profession,Validators.required],


    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    }
    );
  }
  // tslint:disable-next-line:typedef
  signup(myForm: FormGroup) {
    this.submitted = true;
    this.user.nom= myForm.get('firstName').value;
    this.user.prenom= myForm.get('lastName').value;
    this.user.email= myForm.get('email').value;
    this.user.dateNaissance= myForm.get('birthDate').value;
    this.user.password= this.myForm.get('password').value;
    this.user.profession= this.myForm.get('profession').value;
    this.user.categorieClient= "ordinaire";
    this.user.active=false;
    //console.log(this.user);
    if(this.submitted && this.myForm.valid){
      this.userService.addNewClient(this.user).subscribe();
      this._snackBar.open("Please check your email to verify your account.","Done");
     // alert();
      this.router.navigate(['/auth/login'])
    }
  }
}
