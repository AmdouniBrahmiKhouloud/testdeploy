import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/model/stock';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProductService } from 'src/app/services/product.service';
import { StockService } from 'src/app/services/stock.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {
  stock: Stock = new Stock();
  products;
  fournisseurs;
  idfourSelected;
  fournisseursName;
  constructor(
    private stockService: StockService,
    private fournisseurService: FournisseurService,
    private route: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.fournisseurService.getListfournisseur().subscribe(data => {
      this.fournisseurs = data;
      console.log((this.fournisseurs = data));
    });

    this.productService.getListProduct().subscribe(data => {
      this.products = data;
      console.log((this.products = data));
    });
  }

  selectOption(id: any) {
    //getted from event
    this.idfourSelected = id;
    console.log(id);

    //getted from binding
  }
  onSubmit() {
    this.saveStock();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your insertion has been saved',
      showConfirmButton: false,
      timer: 1500
    });
    this.goToStockList();
  }

  saveStock() {
    console.log(this.idfourSelected);
    this.fournisseurService.getfournisseurById(this.idfourSelected).subscribe(data => {
      this.stock.fournisseursName = data.libelle;
      this.stock.fournisseur = data;

      this.stockService.addStock(this.stock).subscribe(
        data => {
          console.log(data);
        },
        error => console.error()
      );
    });
  }
  goToStockList() {
    this.route.navigate(['/dashboard/list-stock']);
  }
}
