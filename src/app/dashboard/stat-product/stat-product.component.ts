import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-stat-product',
  templateUrl: './stat-product.component.html',
  styleUrls: ['./stat-product.component.scss']
})
export class StatProductComponent implements OnInit {
  barChartData = [];
  barChart;
  nbrs ;
  products;
  pourcentages ;
  categories;
  detailProducts;
  public barChartLabels = [];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  //public barChartType = 'bar';
  public barChartLegend = true;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getListProduct().subscribe(
      (data)=> {
        this.products=data;
      console.log(this.products=data)
      this.barChartLabels = this.products;
    } 
    ) ;
    

    this.productService.getCategories().subscribe(
      (data)=> {
        this.categories=data;
      console.log(this.categories=data)
      this.barChartLabels = this.categories;
    } 
    ) ;
    this.productService.getNbrsProdByCateg().subscribe(
      (data)=> {
        this.nbrs=data;
      console.log(this.nbrs=data)
      this.barChart= this.nbrs;
    } 
    ) ;
    this.productService.getPourcentageProdByCateg().subscribe(
      (data)=> {
        this.pourcentages=data;
      console.log(this.pourcentages=data)
      this.barChartData = [{data: this.pourcentages , label : 'percentage of products by category in%' },
      {data: this.barChart, label: 'products number by category'}]  ;
    } 
    ) ;
  }

}
