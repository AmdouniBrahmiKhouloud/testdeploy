import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailFournisseur } from 'src/app/model/mailFournisseur';
import { Product } from 'src/app/model/product';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard-produit-par-fournisseur',
  templateUrl: './dashboard-produit-par-fournisseur.component.html',
  styleUrls: ['./dashboard-produit-par-fournisseur.component.scss']
})
export class DashboardProduitParFournisseurComponent implements OnInit {
  id;
  products;
  definedUrl = this.productService.url + 'Imgproduits/';

  mf = new MailFournisseur();
  constructor(
    private productService: ProductService,
    private _Activatedroute: ActivatedRoute,
    private fournisseurService: FournisseurService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.listeProdPerFournisseur(this.id);
      console.log(this.id);
    });
  }

  showProduct(id: number) {
    this.route.navigate(['/dashboard/show-produit', id]);
  }

  listeProdPerFournisseur(id) {
    this.fournisseurService.listeProdPerFournisseur(id).subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  sendMail(prod: any) {
    console.log(prod);

    this.fournisseurService.getfournisseurById(this.id).subscribe(data => {
      this.mf.description = 'bonjour Veuillez augmentez notre stock';
      this.mf.email = data.email;
      this.mf.productName = prod.libelle;
      this.mf.name = data.libelle;
      console.log(this.mf);

      this.fournisseurService.Sendmail(this.mf).subscribe(data => {
        console.log('succes');
      });
    });
  }
}
