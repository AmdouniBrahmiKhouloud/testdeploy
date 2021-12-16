import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-dashboard-update-user',
  templateUrl: './dashboard-update-user.component.html',
  styleUrls: ['./dashboard-update-user.component.scss']
})
export class DashboardUpdateUserComponent implements OnInit {
  id:number;
  user: User;
  isChecked: boolean;

  constructor(private route : ActivatedRoute,
              private router : Router ,private userService:UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getClientById(this.id).subscribe(res=>this.user=res)
  }


  onChange($event: MatSlideToggleChange) {
    this.isChecked = $event.checked;
    this.user.active = this.isChecked;
    console.log(this.isChecked , this.user.active);

  }

  update() {
    this.userService.updateClient(this.user).
      subscribe(()=>console.log("update succes"))
    this.router.navigate(['/dashboard'])
  }
}
