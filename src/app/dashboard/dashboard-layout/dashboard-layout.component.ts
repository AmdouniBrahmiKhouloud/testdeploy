import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';

@Component({
  selector: 'll-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  isLessThenLargeDevice;
  categorieClient: string=localStorage.getItem('loggedUserAccountCategory');
  constructor(private breakpointObserver: BreakpointObserver, private router: Router,private auth:AuthService) {}

  ngOnInit(): void {
    //this.user.nom =localStorage.getItem('loggedUserFirstName');
    //this.user.categorieClient=localStorage.getItem('loggedUserAccountCategory');
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
    //console.log(this.user)
  }
  onLogout(): void {
    this.auth.logOut();
    //this.router.navigate(['auth/login']);
  }
}
