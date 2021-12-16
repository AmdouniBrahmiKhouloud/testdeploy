import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-dashboard-stats-fournisseurs',
  templateUrl: './dashboard-stats-fournisseurs.component.html',
  styleUrls: ['./dashboard-stats-fournisseurs.component.scss']
})
export class DashboardStatsFournisseursComponent implements OnInit {
  constructor(private fournisseurService: FournisseurService) {}
  fournisseurs;
  result;
  result2;

  ngOnInit(): void {
    this.fournisseurService.statsfournisseur().subscribe(data => {
      this.fournisseurs = data;
      this.result = this.fournisseurs.map(a => a.count);
      this.result2 = this.fournisseurs.map(a => a.name);
      console.log(this.result);
      console.log(this.result2);

      const myChart = new Chart('myChart', {
        type: 'pie',
        data: {
          labels: this.result2,
          datasets: [
            {
              label: '# of Votes',
              data: this.result,
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
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      this.fournisseurs.forEach(e => {
        console.log(e);
      });
    });
  }
}
