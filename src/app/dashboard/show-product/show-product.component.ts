import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {
  product ;
  id:number;
  definedUrl = this.productService.url+'Imgproduits/';

  constructor(private productService : ProductService
    , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct( this.id).subscribe(data =>
      {this.product = data}, error => console.log(error));
  }

}
