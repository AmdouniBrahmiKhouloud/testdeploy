import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturesComponent } from './factures.component';
import {StatComponent} from './stat/stat.component';
import {DashboardLayoutComponent} from '../dashboard/dashboard-layout/dashboard-layout.component';
import {HistoryComponent} from './history/history.component';

const childrenRoutes: Routes = [
  { path: 'stat', component: StatComponent } ,
  { path: 'history', component: HistoryComponent }
];

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: childrenRoutes
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturesRoutingModule { }
