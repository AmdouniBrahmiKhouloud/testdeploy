import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../services/facture.service';
import { jsPDF } from 'jspdf';
// @ts-ignore
import autoTable from 'jspdf-autotable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.scss']
})
export class DashboardOrderComponent implements OnInit {
  list: any[] ;
  fullList: any[] = [];
  totalPrice: number ;

  constructor(private factureService: FactureService) {}

  ngOnInit(): void {
    this.list = this.factureService.listItems;
    this.totalPrice = this.factureService.totalPrice ;
    this.list.forEach(p => {
      let found = false ;
      this.fullList.forEach((fp) =>
      {
        if (fp.idproduit === p.idproduit )
        {
          found = true;
          fp.quantity += 1 ;
          fp.totalPrice += p.prixUnitaire ;
        }
      });

      if (!found) {
        const prod = {idproduit: p.idproduit , libelle: p.libelle , prixUnitaire: p.prixUnitaire , quantity: 1 , totalPrice : p.prixUnitaire} ;
        this.fullList.push(prod);
      }

    }) ;

  }

  deleteItem(product: any): void
  {
    const p = this.getProduct(product.idproduit) ;
    this.factureService.deleteItem(p);
    let totalPrice = 0 ;
    this.fullList.forEach((fp, index) =>
    {
      if (fp.idproduit === product.idproduit )
      {
          totalPrice = fp.totalPrice ;
          this.fullList.splice(index, 1) ;
      }
    });

    this.totalPrice -= totalPrice ;
    this.factureService.totalPrice = this.totalPrice ;
  }

  getProduct(id): any{
    for (let i = 0 ; i < this.list.length ; i++) {
        if (this.list[i].idproduit === id)
        {
          return this.list[i] ;
        }
    }
  }

  clearList(): void {
    this.totalPrice = 0;
    this.list = [] ;
    this.fullList = [] ;
    this.factureService.clearItems() ;
  }

  quantityChanged(input, id): void {
    const quantity = input.target.value ;
    const product = this.getProduct(id) ;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.fullList.length ; i++) {
      if (this.fullList[i].idproduit === id)
      {
        if (quantity > this.fullList[i].quantity)
        {
          this.factureService.addItem(product) ;
        } else
        {
          this.factureService.deleteItem(product) ;
        }
        this.totalPrice -= this.fullList[i].totalPrice ;
        this.fullList[i].quantity = quantity ;
        this.fullList[i].totalPrice = quantity * this.fullList[i].prixUnitaire ;
        this.totalPrice += this.fullList[i].totalPrice ;
      }
    }
  }

  addFacture(): void {
    this.factureService.orders.next(0 ) ;
    this.factureService.addFacture().subscribe((data: any) => {
      this.fullList.forEach(f => {
        this.factureService.addDetailFactures(data.idFacture, f.idproduit, f).subscribe((d: any) => console.log(d));
      }) ;
      this.clearList() ;

      this.factureService.sendMail().subscribe() ;

    } ) ;
  }

  exportPdf(): void {

    const doc = new jsPDF();

    const columns = [['name', 'price', 'quantity' , 'full price']];
    const data = [] ;
    this.fullList.forEach((item) => {
      data.push([item.libelle, item.prixUnitaire, item.quantity, item.totalPrice]) ;
    }) ;



    autoTable(doc, {
      head: columns,
      body: data,
      didDrawPage: (dataArg) => {
        doc.text('list of products', dataArg.settings.margin.left, 10);
      }
    });

    doc.save('res.pdf') ;
  }
}
