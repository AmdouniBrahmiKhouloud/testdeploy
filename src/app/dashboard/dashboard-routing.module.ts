import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailProduitComponent } from './add-detail-produit/add-detail-produit.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { DashboardAjoutFournisseurComponent } from './dashboard-ajout-fournisseur/dashboard-ajout-fournisseur.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardListeFournisseurComponent } from './dashboard-liste-fournisseur/dashboard-liste-fournisseur.component';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { DashboardProduitParFournisseurComponent } from './dashboard-produit-par-fournisseur/dashboard-produit-par-fournisseur.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardSavedItemComponent } from './dashboard-saved-item/dashboard-saved-item.component';
import { DashboardUpdateProfilComponent } from './dashboard-update-profil/dashboard-update-profil.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { StatProductComponent } from './stat-product/stat-product.component';
import { UpdateDetailProduitComponent } from './update-detail-produit/update-detail-produit.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { DashboardStatsFournisseursComponent } from './dashboard-stats-fournisseurs/dashboard-stats-fournisseurs.component';
import { ListeReclamationComponent } from './liste-reclamation/liste-reclamation.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { DashboardUpdateUserComponent } from './dashboard-update-user/dashboard-update-user.component';
import {StatPromotionComponent} from './stat-promotion/stat-promotion.component';

const DashboardChildrenRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardIndexComponent
  },
  {
    path: 'add-detail-produit',
    component: AddDetailProduitComponent
  },
  {
    path: 'stat-product',
    component: StatProductComponent
  },
  {
    path: 'show-produit/:id',
    component: ShowProductComponent
  },
  {
    path: 'update-detail-produit/:id',
    component: UpdateDetailProduitComponent
  },
  {
    path: 'add-stock',
    component: AddStockComponent
  },
  {
    path: 'list-stock',
    component: ListStockComponent
  },
  {
    path: 'update-product/:id',
    component: UpdateProductComponent
  },
  {
    path: 'update-stock/:id',
    component: UpdateStockComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'product-list',
    component: DashboardSavedItemComponent
  },
  {
    path: 'profile',
    component: DashboardProfileComponent
  },  {
    path: 'stat',
    component: StatPromotionComponent
  },
  {
    path: 'orders',
    component: DashboardOrderComponent
  },{
    path:'update-profile',
    component: DashboardUpdateProfilComponent
  },
  {
    path: 'ajout-fournisseur',
    component: DashboardAjoutFournisseurComponent
  },
  {
    path: 'liste-fournisseur',
    component: DashboardListeFournisseurComponent
  },

  {
    path: 'reclamation',
    component: ReclamationComponent
  },

  {
    path: 'liste-reclamations',
    component: ListeReclamationComponent
  },
  {
    path: 'fournisseurProducts/:id',
    component: DashboardProduitParFournisseurComponent
  },
  {
    path: 'update-user/:id',
    component: DashboardUpdateUserComponent
  },

  {
    path: 'stats-fournisseurs',
    component: DashboardStatsFournisseursComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: DashboardChildrenRoute
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
