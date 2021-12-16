import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert, AlertPromise } from 'selenium-webdriver';
import { Fournisseur } from 'src/app/model/fournisseur';
import { Product } from 'src/app/model/product';
import { DetailProductService } from 'src/app/services/detailProduit.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProductService } from 'src/app/services/product.service';
import { StockService } from 'src/app/services/stock.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  detailProducts;
  stocks;
  userFile;
  public imagePath;
  imgURL: any;
  submitted = false;
  idstockSelected;

  public message: string;
  constructor(
    public productService: ProductService,
    private route: Router,
    private detailProductService: DetailProductService,
    private stockService: StockService,
    public fb: FormBuilder,
    private fournisseurService: FournisseurService
  ) {}
  selectOption(four: Fournisseur) {
    //getted from event
    this.idstockSelected = four;
    console.log(this.productService.dataForm.controls.stockName);

    //getted from binding
  }
  ngOnInit(): void {
    this.productService.dataForm = this.fb.group({
      idproduit: [0, Validators.required],
      image: ['', Validators.required],
      code: ['', Validators.required],
      libelle: ['', Validators.required],
      prixUnitaire: ['', Validators.required],
      stockName: ['', Validators.required],
      categoryName: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.detailProductService.getListDetailProducts().subscribe(data => {
      this.detailProducts = data;
      console.log((this.detailProducts = data));
    });
    this.stockService.getListStock().subscribe(data => {
      this.stocks = data;
      console.log((this.stocks = data));
    });
  }
  get f() {
    return this.productService.dataForm.controls;
  }

  onSubmit() {
    console.log(this.product);

    //this.onClick();
    this.submitted = true;

    // stop here if form is invalid
    if (this.productService.dataForm.invalid) {
      return;
    }

    // display form values on success
    //alert("Here's a message!", "It's pretty, isn't it?");
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.productService.dataForm.value, null, 4));

    this.saveProduct();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your insertion has been saved',
      showConfirmButton: false,
      timer: 1500
    });
    this.goToProductList();
  }

  saveProduct() {
    this.stockService.getstockById(this.idstockSelected).subscribe(data => {
      console.log(data);

      this.productService.dataForm.controls.stockName.setValue(data.libelleStock);
      const formData = new FormData();
      const produit = this.productService.dataForm.value;
      formData.append('produit', JSON.stringify(produit));
      formData.append('file', this.userFile);
      formData.append('idstock', this.idstockSelected);

      this.fournisseurService.getfournisseurById(data.idfourn.toString()).subscribe(data1 => {
        console.log(data1.idFournisseur) ;
        formData.append('fournisseur', data1.idFournisseur);

        console.log(this.productService.dataForm.value);
        this.productService.addProduct(formData).subscribe(
          data => {
            console.log(data);
          },
          error => console.error()
        );
      });
    });
  }
  goToProductList() {
    this.route.navigate(['/dashboard/product-list']);
  }
  onSelectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      //this.f['profile'].setValue(file);
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only imagages are supported.';
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = event => {
        this.imgURL = reader.result;
      };
    }
  }
  /*onClick() {
    const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {
    for (let index = 0; index < fileUpload.files.length; index++)
    {
     const file = fileUpload.files[index];
      this.fileName = file.name +" is uploaded"

     this.files.push({ data: file, inProgress: false, progress: 0});
    }
      this.uploadFiles();
    };
    fileUpload.click();
}*/
  /*private uploadFiles() {
  this.fileUpload.nativeElement.value = '';
  this.files.forEach(file => {
    this.uploadFile(file);
  });
}*/
  /*uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file.data);
  file.inProgress = true;
  this.productService.upload(formData).subscribe(
    rsp => {
      console.log(rsp.type)

},
    error => {
      console.log(error)
    });*/
}
