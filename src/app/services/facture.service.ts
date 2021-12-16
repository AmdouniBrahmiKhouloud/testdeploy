import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  orders = new BehaviorSubject<number>(0);
  url = environment.url ;
  listItems: any[] ;
  totalPrice: number ;

  constructor(private http: HttpClient) {
    this.listItems = [] ;
    this.totalPrice = 0 ;
  }

  addItem(product: any): void
  {
    this.listItems.push(product);
    this.totalPrice += product.prixUnitaire ;
  }

  deleteItem(product: any): void {
      while (this.listItems.indexOf(product) > -1)
      {
        const index = this.listItems.indexOf(product) ;
        this.listItems.splice(index, 1);
      }
      console.log(this.listItems) ;
    }


  clearItems(): void {
    this.listItems = [] ;
    this.totalPrice = 0 ;
  }

  addFacture(): Observable<any> {
    const id = Number(localStorage.getItem('loggedUserId')) ;
    const url = this.url + 'facture/add-facture/' + id ;
    const facture = { montantFacture : this.totalPrice } ;
    console.log(url) ;
    return this.http.post(url, facture) ;
  }

  addDetailFactures(idFacture: number, idProduct: number , df: any): Observable<any> {
    const url = this.url + 'dtfacture/add-dtfacture/' + idFacture + '/' + idProduct;
    const res = { prixTotal : df.totalPrice , qte : df.quantity } ;
    return this.http.post(url, res) ;
  }

  getProductsForTesting(): Observable<any> {
    const url = 'http://localhost:8089/produit/retrieve-all-produits' ;
    return this.http.get(url) ;
  }

  getFactureStatMonth(): Observable<any> {
    const url = 'http://localhost:8089/facture/stat/year' ;
    return this.http.get(url) ;
  }

  sendMail(): Observable<any> {
    const id = Number(localStorage.getItem('loggedUserId')) ;
    const url = 'http://localhost:8089/send_mail/' + id ;
    return this.http.get(url) ;
  }

  // @ts-ignore
  getFactures(): Observable<any> {
    const url = 'http://localhost:8089/facture/retrieve-all-factures' ;
    return this.http.get(url) ;
  }

}
