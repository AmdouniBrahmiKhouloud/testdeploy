import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { PromotionService } from '../../services/promotion.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {



  public SystemName = 'Months';
  // labels
  public lineChartLabels: Array<any> = ['[01-03]', '[04-06]', '[07-09]', '[09-12]'];


  public labelMFL: Array<any> = [];


  constructor(private promotionService: PromotionService) { }

  ngOnInit(): void {

    this.promotionService.stat().subscribe(d => {this.labelMFL = [
      {
        data: d,
        label: this.SystemName
      }
    ];
    });
  }

}
