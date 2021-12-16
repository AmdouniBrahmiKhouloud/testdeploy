import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardSavedItemComponent } from './dashboard-saved-item/dashboard-saved-item.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { DashboardUpdateProfilComponent } from './dashboard-update-profil/dashboard-update-profil.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchfilterPipe } from './searchfilter.pipe';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgChartsModule } from 'ng2-charts';
import { AddProductComponent } from './add-product/add-product.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { UpdateDetailProduitComponent } from './update-detail-produit/update-detail-produit.component';
import { AddDetailProduitComponent } from './add-detail-produit/add-detail-produit.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { Chart } from 'chart.js';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatProductComponent } from './stat-product/stat-product.component';

//import { NgChartsModule } from 'ng2-charts';
//import { Chart } from 'chart.js';


import { DashboardAjoutFournisseurComponent } from './dashboard-ajout-fournisseur/dashboard-ajout-fournisseur.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardListeFournisseurComponent } from './dashboard-liste-fournisseur/dashboard-liste-fournisseur.component';
import { UpdateDialogFournisseurComponent } from './dashboard-liste-fournisseur/update-dialog-fournisseur/update-dialog-fournisseur.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { DashboardProduitParFournisseurComponent } from './dashboard-produit-par-fournisseur/dashboard-produit-par-fournisseur.component';
import { DashboardStatsFournisseursComponent } from './dashboard-stats-fournisseurs/dashboard-stats-fournisseurs.component';
import { ListeReclamationComponent } from './liste-reclamation/liste-reclamation.component';
import { DashboardUpdateUserComponent } from './dashboard-update-user/dashboard-update-user.component';
import { ProductModule } from '../product/product.module';
import { StatPromotionComponent } from './stat-promotion/stat-promotion.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardIndexComponent,
    DashboardSavedItemComponent,
    DashboardProfileComponent,
    DashboardOrderComponent,
    AddProductComponent,
    ListStockComponent,
    UpdateProductComponent,
    AddStockComponent,
    UpdateStockComponent,
    UpdateDetailProduitComponent,
    AddDetailProduitComponent,
    ShowProductComponent,
    DashboardUpdateProfilComponent,
    ReclamationComponent,
    SearchfilterPipe,
    StatProductComponent,
    DashboardAjoutFournisseurComponent,
    DashboardListeFournisseurComponent,
    UpdateDialogFournisseurComponent,
    DashboardProduitParFournisseurComponent,
    DashboardStatsFournisseursComponent,
    ListeReclamationComponent,
    DashboardUpdateUserComponent,
    StatPromotionComponent,
  ],
  imports: [
    MatSnackBarModule,
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
    MatSlideToggleModule,
    NgChartsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatRippleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    CommonModule, DashboardRoutingModule, SharedModule, MatMenuModule, ProductModule
  ],
  exports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    MatMenuModule,
    MatRippleModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
  ],
})
// NgChartsModule,Chart
export class DashboardModule {}
