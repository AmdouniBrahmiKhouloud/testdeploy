import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/model/stock';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProductService } from 'src/app/services/product.service';
import { StockService } from 'src/app/services/stock.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss']
})
export class UpdateStockComponent implements OnInit {
  stock : Stock = new Stock();
  id:number;
  products;
  fournisseurs;
  constructor(private stockService : StockService
    , private route : ActivatedRoute, private productService : ProductService,
    private router : Router,private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.fournisseurService.getListfournisseur().subscribe(data => {
      this.fournisseurs = data;
      console.log((this.fournisseurs = data));
    });
  
    this.id = this.route.snapshot.params['id'];
    this.stockService.getStock( this.id).subscribe(data =>
      {this.stock = data}, error => console.log(error));

      this.productService.getListProduct().subscribe(
        (data)=> {
          this.products=data;
        console.log(this.products=data)
      } 
      ) ;
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
        this.stockService.updateStock(this.stock).subscribe(data => {
          this.goToProductList(); }
        , error => console.log(error));
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
   
    
    
  }
  goToProductList(){
    this.router.navigate(['/dashboard/list-stock']);
  }
}
