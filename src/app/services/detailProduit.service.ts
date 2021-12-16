import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DetailProduct } from '../model/DetailProduct';



@Injectable({
  providedIn: 'root'
})
export class DetailProductService {
  url = environment.url + 'detailProduit/';
  constructor(private http: HttpClient) {}
  getListDetailProducts() : Observable<DetailProduct[]> {
    return this.http.get<DetailProduct[]>(this.url + 'retrieve-all-detailProducts');
    
  }

  addDetailProduct(detailproduct: DetailProduct) : Observable<Object> {
 
    return this.http.post(this.url + 'add-detailProduit', detailproduct);
  }

  deleteDetailProduct(id: number) {

    return this.http.delete(this.url + 'remove-detailProduit/' + id);
  }
  updateDetailProduct(detailproduct: DetailProduct) {
    
    return this.http.put(this.url + 'modify-detailProduit/', detailproduct);
  }
  
  
  getDetailProduct(id:number) : Observable<DetailProduct> {
    return this.http.get<DetailProduct>(this.url + 'retrieve-detailProduit/' + id);
    
  }

}
