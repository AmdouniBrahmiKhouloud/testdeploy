import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private router:Router, private builder: FormBuilder , private auth: AuthService) { }

  ngOnInit(): void {
    this.myForm = this.builder.group({
      email:['',[ Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }

  signin(myForm: FormGroup) {
    if(this.auth.login(myForm.get('email').value, myForm.get('password').value)){
    }
  }
}
