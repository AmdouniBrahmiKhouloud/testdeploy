import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HttpClient } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule, DatePipe } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, NgxSkeletonLoaderModule, NgChartsModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule, MatPaginatorModule, CommonModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
