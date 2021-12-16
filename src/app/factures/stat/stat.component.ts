import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../services/facture.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  public labelMFL: Array<any> = [] ;
  public SystemName = 'Months';
  // labels
  public lineChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];





  constructor(private factureService: FactureService) { }

  ngOnInit(): void {

    this.factureService.getFactureStatMonth().subscribe(d => {
      this.labelMFL = [
        {
          data: d,
          label: this.SystemName
        }
      ];
    });
  }

}
