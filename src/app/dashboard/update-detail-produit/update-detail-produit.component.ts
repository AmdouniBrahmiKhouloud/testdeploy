import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailProduct } from 'src/app/model/DetailProduct';
import { DetailProductService } from 'src/app/services/detailProduit.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-detail-produit',
  templateUrl: './update-detail-produit.component.html',
  styleUrls: ['./update-detail-produit.component.scss']
})
export class UpdateDetailProduitComponent implements OnInit {
  detailProduct : DetailProduct = new DetailProduct();
  id:number;
  constructor(private detailProductService : DetailProductService
    , private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.detailProductService.getDetailProduct( this.id).subscribe(data =>
      {this.detailProduct = data}, error => console.log(error));
  }
  onSubmit(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.detailProductService.updateDetailProduct(this.detailProduct).subscribe(data => {
          this.goToProductList(); }
        , error => console.log(error));
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
   
    
    
  }
  goToProductList(){
    this.router.navigate(['/dashboard/product-list']);
  }
}
