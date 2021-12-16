import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { menuList as staticMenuList } from '../../data/menus';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../model/user';
import {Router} from "@angular/router";

@Component({
  selector: 'll-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() numbersOrder ;
  @Input() topFixed: boolean;
  @Output() toggleSidenav = new EventEmitter();
  isScrolled: boolean;
  menuList = [];
  isLessThenLargeDevice;
  user:User = new User();
  constructor(private breakpointObserver: BreakpointObserver,private auth:AuthService , private route: Router) {}

  ngOnInit(): void {
    this.menuList = staticMenuList;
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
    this.user.nom=localStorage.getItem('loggedUserFirstName');
    this.user.categorieClient=localStorage.getItem('loggedUserAccountCategory');
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 15;
  }

  onLogout() {
    this.auth.logOut();
  }

  makeToOrders() {
    this.route.navigate(['/dashboard/orders']) ;
  }
}
