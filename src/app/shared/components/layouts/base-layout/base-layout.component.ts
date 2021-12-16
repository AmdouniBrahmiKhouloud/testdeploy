import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import { takeWhile } from 'rxjs/operators';
import {FactureService} from "../../../../services/facture.service";

@Component({
  selector: 'll-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit, OnDestroy {
  isAlive: boolean = true;
  orders = 0 ;
  @ViewChild('sidenav') sidenav;
  isSidenavExpand = false;
  isLessThenLargeDevice = true;

  constructor(private breakpointObserver: BreakpointObserver , private factureService: FactureService) {
    this.breakpointObserver.observe(['(max-width: 1199px)']).pipe(takeWhile(() => this.isAlive)).subscribe(({matches}) => {
      this.isLessThenLargeDevice = matches;
      if (!matches) {
        this.isSidenavExpand = false;
      }
    });
  }

  ngOnInit(): void {
    this.factureService.orders.subscribe(orders => this.orders = orders) ;
  }

  ngOnDestroy(): void{
    this.isAlive = false ;
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
    this.isSidenavExpand = this.sidenav.opened;
  }
}
