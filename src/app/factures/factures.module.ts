import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturesRoutingModule } from './factures-routing.module';
import { FacturesComponent } from './factures.component';
import { FactureComponent } from './facture/facture.component';
import {SharedModule} from '../shared/shared.module';
import { StatComponent } from './stat/stat.component';
import {MatMenuModule} from '@angular/material/menu';
import {NgChartsModule} from 'ng2-charts';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    FacturesComponent,
    FactureComponent,

    StatComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    FacturesRoutingModule,
    SharedModule,
    MatMenuModule,
    NgChartsModule
  ]
})
export class FacturesModule { }
