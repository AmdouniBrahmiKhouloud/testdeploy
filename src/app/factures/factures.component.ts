import { Component, OnInit } from '@angular/core';
import {FactureService} from '../services/facture.service';
import {Product} from '../model/product';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.scss']
})
export class FacturesComponent implements OnInit {

  listFactures: Product[] ;
  numberFactures: number ;

  constructor(private factureService: FactureService) {

  }

  ngOnInit(): void {
    this.listFactures = this.factureService.listItems ;
    this.numberFactures = this.listFactures.length;
  }



}
