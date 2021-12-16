import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailProduct } from 'src/app/model/DetailProduct';
import { DetailProductService } from 'src/app/services/detailProduit.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-detail-produit',
  templateUrl: './add-detail-produit.component.html',
  styleUrls: ['./add-detail-produit.component.scss']
})
export class AddDetailProduitComponent implements OnInit {
  detailProduct : DetailProduct = new DetailProduct();
  constructor(private detailProductService: DetailProductService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.detailProduct);
    this.saveDetailProduct();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your insertion has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    this.goToDetailProductList();
  }

  saveDetailProduct(){

    this.detailProductService.addDetailProduct(this.detailProduct).subscribe( data => 
      {console.log(data);},
     error => console.error());
       
  }
  goToDetailProductList(){
    this.route.navigate(['/dashboard/product-list']);
  

}

}
