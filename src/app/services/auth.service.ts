import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUser: Boolean = false;
  user:User = new User();
  public curUser= new BehaviorSubject(this.user);
  sharedUser = this.curUser.asObservable();
  url = environment.url + 'client';
  constructor(private http: HttpClient, private router: Router) { }
  getUser(email:string, password:string){
    return this.http.get<User>(this.url+'/login/'+ email+'/'+password);
  }
  login(email:string, password: string){
    this.getUser(email,password).subscribe((data:User)=>{
      if (data == null){
        //console.log(data)
        alert("please give a valid email and password")
        }
      else {
        if (data.active === true){
          this.user.idClient=data.idClient;
          this.user.nom=data.nom;
          this.user.prenom=data.prenom;
          this.user.email=data.email;
          this.user.password=data.password;
          this.user.dateNaissance=data.dateNaissance;
          this.user.categorieClient=data.categorieClient;
          this.user.profession=data.profession;
          if((this.user.email===email)){
            this.validUser= true;
            localStorage.setItem('loggedUserId',String(this.user.idClient));
            localStorage.setItem('loggedUserFirstName',this.user.nom);
            localStorage.setItem('loggedUserLastName',this.user.prenom);
            localStorage.setItem('loggedUserEmail',this.user.email);
            localStorage.setItem('loggedUserBirthDate',String(this.user.dateNaissance));
            localStorage.setItem('loggedUserAccountCategory',this.user.categorieClient);
            localStorage.setItem('loggedUserProfession',this.user.profession);
            localStorage.setItem('isloggedIn',String(this.validUser));
            this.curUser.next(this.user);
            if (this.user.categorieClient === "admin"){
              this.router.navigate(['/dashboard']);
            }else {
              this.router.navigate(['']);
            }
          }
        }else {
          alert("please active your account")
        }
      }
    });

    return this.validUser;
  }
  logOut(){
    this.validUser= false;
    this.curUser.complete();
    localStorage.removeItem('loggedUserId');
    localStorage.removeItem('loggedUserFirstName');
    localStorage.removeItem('loggedUserLastName');
    localStorage.removeItem('loggedUserEmail');
    localStorage.removeItem('loggedUserBirthDate');
    localStorage.removeItem('loggedUserAccountCategory');
    localStorage.removeItem('loggedUserProfession');
    localStorage.setItem('isloggedIn',String(this.validUser));
    this.router.navigate(['/auth/login']);
  }
  //this method will check if the connected user is an admin or not in order to active
  //the backOffice app
  isAdmin(user:User):boolean{
    if(user.categorieClient== 'admin')
      return  true;
    else return false;
  }
  register(user: User){
    //this method will cnx to the WS auth implemented in the BackEnd Side
  }
  checkConnectedUser(){
    let user = new User();
    if(localStorage.getItem('loggedUserid')!=null && localStorage.getItem('loggedUserid')!=''){
      user.nom=String(localStorage.getItem('loggedUserFirstName'));
      user.prenom=String(localStorage.getItem('loggedUserLastName'));
      return user;
    }
    return null;
  }
}
