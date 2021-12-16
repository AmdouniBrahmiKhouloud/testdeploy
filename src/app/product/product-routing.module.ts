import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromotionFormComponent } from './promotion-form/promotion-form.component';
import { UpdatePromotionFormComponent } from './update-promotion-form/update-promotion-form.component';

const routes: Routes = [
  
  {
    
    path: '',
    component: ProductListComponent
  },
  
  {
    path: 'detail-produit/:id',
    component: ProductDetailsComponent
  },{
  
    path: 'formUpdate/:id',
    component: UpdatePromotionFormComponent
  },
  {
    path: 'form/:id',
    component: PromotionFormComponent
  },
  {
    path: ':id',
    component: ProductDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
