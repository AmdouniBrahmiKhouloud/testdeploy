import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgParticlesModule } from 'ng-particles';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHeroComponent } from './product-list/product-hero/product-hero.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app.component';

import { AddReviewDialog, ReviewComponent } from './product-details/Review/review.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionFormComponent } from './promotion-form/promotion-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgChartsModule } from 'ng2-charts';
import { UpdatePromotionFormComponent } from './update-promotion-form/update-promotion-form.component';




@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductHeroComponent,  ReviewComponent, AddReviewDialog,PromotionListComponent, PromotionComponent, PromotionFormComponent, StatisticsComponent, UpdatePromotionFormComponent],
  exports: [
    StatisticsComponent
  ],
  imports: [
    MatSnackBarModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MatExpansionModule,
    NgParticlesModule,
    NgxSkeletonLoaderModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
  ]
})
export class ProductModule {  }
