import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard-update-profil',
  templateUrl: './dashboard-update-profil.component.html',
  styleUrls: ['./dashboard-update-profil.component.scss']
})
export class DashboardUpdateProfilComponent implements OnInit {
  id:number;
  myForm: FormGroup;
  user: User = new User();
  profession: any = ['Docteur', 'ingenieur', 'etudiant', 'commercial','cadre','autre']
  constructor(private builder: FormBuilder ,private userService:UserService,private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem("loggedUserId"));
    this.userService.getClientById(this.id).subscribe((data)=>{
      this.user =data;
    })
    this.myForm = new FormGroup({
      'firstName': new FormControl(localStorage.getItem("loggedUserFirstName"),[ Validators.required ,Validators.minLength(3)]),
      'lastName' : new FormControl(localStorage.getItem("loggedUserLastName"),[Validators.required, Validators.minLength(3)] ),
      'email': new FormControl(localStorage.getItem("loggedUserEmail"),[ Validators.required, Validators.email]),
      'birthDate': new FormControl(localStorage.getItem("loggedUserBirthDate"),Validators.required),
      'profession': new FormControl(localStorage.getItem("loggedUserProfession"),Validators.required)
    });
    console.log(localStorage.getItem("loggedUserEmail"))
  }

  update(myForm: FormGroup) {
    //console.log(this.user)
    if (myForm.valid){
      this.user.idClient=this.id;
      this.user.nom= myForm.get('lastName').value;
      this.user.prenom= myForm.get('firstName').value;
      this.user.email= myForm.get('email').value;
      this.user.dateNaissance= myForm.get('birthDate').value;
      this.user.profession= this.myForm.get('profession').value;
      this.user.categorieClient= localStorage.getItem("loggedUserAccountCategory");
      localStorage.setItem("loggedUserFirstName",myForm.get('firstName').value)
      localStorage.setItem("loggedUserLastName",myForm.get('lastName').value)
      localStorage.setItem("loggedUserEmail",myForm.get('email').value)
      localStorage.setItem("loggedUserBirthDate",myForm.get('birthDate').value)
      localStorage.setItem("loggedUserProfession",this.myForm.get('profession').value)
      this.userService.updateClient(this.user).subscribe(()=>console.log("update succes"));
      this.router.navigate(['/dashboard/profile'])
    }

    //this.userService.updateClient(this.user).subscribe();


  }
}
