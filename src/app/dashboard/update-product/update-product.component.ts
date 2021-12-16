import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { DetailProductService } from 'src/app/services/detailProduit.service';
import { ProductService } from 'src/app/services/product.service';
import { StockService } from 'src/app/services/stock.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  product : Product = new Product();
  id:number;
  detailProducts;
  stocks;
  definedUrl = this.productService.url+'Imgproduits/';
  imgURL: any;
  public message: string;
  userFile ;
  public imagePath ;

  constructor(public  productService : ProductService
    , private route : ActivatedRoute,
    private router : Router ,private detailProductService : DetailProductService ,
    private stockService : StockService , public fb: FormBuilder) { }

  ngOnInit(): void {
   

    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct( this.id).subscribe(data =>
      {this.product = data
        this.productService.dataForm = this.fb.group({
          //idproduit:[0],
          image: [this.product.image],
          code: [this.product.code],
          libelle: [this.product.libelle],
          prixUnitaire: [this.product.prixUnitaire],
          stockName: [this.product.stockName],
          categoryName: [this.product.categoryName],
          description: [this.product.description],
    
        });
       
    
      }, error => console.log(error)
      );
    

     
      this.detailProductService.getListDetailProducts().subscribe(
        (data)=> {
          this.detailProducts=data;
        console.log(this.detailProducts=data)
        }
      ) ;
      this.stockService.getListStock().subscribe(
        (data)=> {
          this.stocks=data;
        console.log(this.stocks=data)
        }
      );
  }
  onSubmit(){
   
    this.updateProduct();
   
  }

     updateProduct() 
     {  Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const formData  = new FormData();
        const produit = this.productService.dataForm.value;
        formData.append('produit',JSON.stringify(produit));
        formData.append('file',this.userFile);
         this.productService.updatProduct(this.product.idproduit,formData).
         subscribe( data => {
           //this.dialogRef.close();
          
            this.router.navigate(['/dashboard/product-list']); 
         });
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
      
     }
 /* goToProductList(){
    this.router.navigate(['/dashboard/product-list']);
  }*/
  onSelectFile(event){
    if(event.target.files.length > 0)
    { const file = event.target.files[0];
    this.userFile = file ; 
    //this.f['profile'].setValue(file);
    var mimeType = event.target.files[0].type ;
    if(mimeType.match(/image\/*/) == null)
    {this.message = "Only imagages are supported.";
    return;
     }
     var reader = new FileReader();
     this.imagePath = file ;
     reader.readAsDataURL(file);
     reader.onload = (event) => {
       this.imgURL = reader.result;
     }
     }
    }
}
