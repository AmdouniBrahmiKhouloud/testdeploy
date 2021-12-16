import { HttpClient } from '@angular/common/http';
import { Byte } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Fournisseur } from '../model/fournisseur';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.url + 'produit/';
 public dataForm: FormGroup;
  constructor(private http: HttpClient) {}
  getListProduct() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'retrieve-all-produits');

  }

   getListProductDesc() : Observable<Product[]> {
     return this.http.get<Product[]>(this.url + 'retrieve-all-produits-Desc');

   }
   getListProductAsc() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'retrieve-all-produits-Asc');

  }
  getListProductAlimentaire() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'retrieve-all-produits-Cat-Alimentaire');

  }
  getListProductElectromeanager() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'retrieve-all-produits-Cat-Electromeanger');

  }
  getListProductQuincaillerie() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'retrieve-all-produits-Cat-Quincaillerie');

  }
  getNbrsProdByCateg() : Observable<number[]> {
    return this.http.get<number[]>(this.url + 'get-produits-number-ByCateg');
  }
  //get-produits-pourcentage-ByCateg
  getPourcentageProdByCateg() : Observable<any[]> {
    return this.http.get<any[]>(this.url + 'get-produits-pourcentage-ByCateg');
  }
  /*addProduct(product: Product) {

    return this.http.post(this.url + 'add-produit',product );
  }*/
  addProduct(formData: FormData): Observable<any>{

    return this.http.post(this.url + 'add-produit',formData );
  }

  deleteProduct(id: number) {

    return this.http.delete(this.url + 'remove-produit/' + id);
  }

 /* updateProduct(formData: FormData): Observable<any> {

    return this.http.put(this.url + 'modify-produit/', formData);
  }*/
  updatProduct(id: number, formData: FormData): Observable<Object> {
    return this.http.put(this.url + 'modify-produit/' + id, formData);
  }
 /* updateProduct(formData: FormData) {

    return this.http.put(this.url +'modify-produit/',formData);
  }*/


  getProduct(id:number) : Observable<Product> {
    return this.http.get<Product>(this.url + 'retrieve-produit/' + id);

  }
  //get-all-Categories
  getCategories() : Observable<String[]> {
    return this.http.get<String[]>(this.url +'get-all-Categories');
  }
 /* getImage(id:number)
  {    return this.http.get<Byte[]>(this.url + 'Imgproduits/' + id);
}*/


  /*public upload(formData) {
    console.log("upload service function is called")
    console.log(formData)
    return this.http.post<FormData>(this.SERVER_URL, formData, {
        reportProgress: true,
        observe: 'events'
      });
  }*/


}
