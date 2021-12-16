import { Component, OnInit } from '@angular/core';
import { menuList } from '../../data/menus';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../model/user';

@Component({
  selector: 'll-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navList = [];
  user:User = new User();
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.navList = menuList;
    this.user.nom=localStorage.getItem('loggedUserFirstName');
    this.user.categorieClient=localStorage.getItem('loggedUserAccountCategory');
  }

  onLogout() {
    this.auth.logOut();
  }
}
