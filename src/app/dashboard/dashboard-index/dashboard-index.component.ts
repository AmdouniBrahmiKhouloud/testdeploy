import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Chart } from 'chart.js';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'll-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit {
  list: User[] = [];
  accountCategory: string;
  p:number = 1;
  constructor(private userService: UserService ,private router: Router) {}
  data:number[]=[];
  dataAccount:number[]=[];
  dataProfession: number[]=[];
  ngOnInit(): void {
    this.userService.getAllClient().subscribe(res => this.list=res);
    this.userService.getPremuim().subscribe(res=>{this.data.push(res)});
    this.userService.getOrdinaire().subscribe(res=>{this.data.push(res)});
    this.userService.getFidele().subscribe(res=>{
      this.data.push(res);
      console.log(this.data);
      let myChart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: ['Premuim', 'ordinaire', 'fidele'],
          datasets: [{
            label: 'Account Category',
            data: this.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
    this.userService.getActivateAccount().subscribe(res=>this.dataAccount.push(res));
    this.userService.getDesactivateAccount().subscribe(res=>{
      this.dataAccount.push(res);
      console.log(this.dataAccount);
      new Chart('chart', {
        type: 'doughnut',
        data: {
          labels: [
            'Account activate',
            'Account desactivate'
          ],
          datasets: [{
            label: 'Activate Account',
            data: this.dataAccount,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 205, 86)'
            ]
          }]
        }
      });
    })
    //Docteur,ingenieur,etudiant,commercial,cadre ,autre
    this.userService.getDocteur().subscribe(res=>this.dataProfession.push(res))
    this.userService.getIngenieur().subscribe(res=>this.dataProfession.push(res))
    this.userService.getEtudiant().subscribe(res=>this.dataProfession.push(res))
    this.userService.getCommercial().subscribe(res=>this.dataProfession.push(res))
    this.userService.getCadre().subscribe(res=>this.dataProfession.push(res))
    this.userService.getAutre().subscribe(res=>{
      this.dataProfession.push(res)
      console.log(this.dataProfession)
      new Chart('chartProfession', {
        type: 'polarArea',
        data: {
          labels: [
            'Docteur',
            'ingenieur',
            'etudiant',
            'commercial',
            'cadre',
            'autre'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: this.dataProfession,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)',
              'rgb(60, 162, 86)'
            ]
          }]
        }
      });
    })

  }
/*
* */
  delete(user: User) {
    let i = this.list.indexOf(user);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't to delete this user!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteClient(user.idClient).subscribe(()=>this.list.splice(i,1))
        Swal.fire(
          'Deleted!',
          'user has been deleted.',
          'success'
        )
      }
    })
  }

  search() {

    if (this.accountCategory === ""){
      this.ngOnInit()
    }else {
     // console.log(this.accountCategory)
      this.list = this.list.filter((res )=>{
        console.log("i'am search")
        return res.categorieClient.toLocaleLowerCase().includes(this.accountCategory.toLocaleLowerCase());
      })
    }
  }

  key ='firstName'
  reverse : boolean = false
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;

  }

  updateUser(idClient: number) {
    this.router.navigate(['/dashboard/update-user',idClient]);
  }
}
