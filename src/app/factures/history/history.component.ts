import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../services/facture.service';
import {Facture} from '../../model/facture';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  factures: any[] ;
  constructor(private factureService: FactureService) {

  }

  ngOnInit(): void {
    this.factureService.getFactures().subscribe((data) => {
      this.factures = data ;
    }) ;
  }
  
}
