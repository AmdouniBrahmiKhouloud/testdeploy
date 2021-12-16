import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ProductService } from 'src/app/services/product.service';
import {FactureService} from "../../services/facture.service";

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product ;
  id:number;
  definedUrl = this.productService.url+'Imgproduits/';
  constructor(private productService : ProductService
    , private route : ActivatedRoute , private factureService : FactureService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct( this.id).subscribe(data =>
      {this.product = data}, error => console.log(error));
  }

  addItemToCard(product: any): void {
    console.log(product) ;
    this.factureService.addItem(product);
    this.factureService.orders.next(this.factureService.orders.value + 1) ;
  }


}
