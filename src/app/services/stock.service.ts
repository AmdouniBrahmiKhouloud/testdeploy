import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  url = environment.url + 'stock/';
  constructor(private http: HttpClient) {}
  getListStock(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.url + 'retrieve-all-stocks');
  }

  addStock(stock: Stock): Observable<Object> {
    return this.http.post(this.url + 'add-stock', stock);
  }

  getstockById(id: string) {
    return this.http.get<Stock>(this.url + 'retrieve-stock/' + id);
  }

  deleteStock(id: number) {
    return this.http.delete(this.url + 'remove-stock/' + id);
  }
  updateStock(stock: Stock) {
    return this.http.put(this.url + 'modify-stock/', stock);
  }

  getStock(id: number): Observable<Stock> {
    return this.http.get<Stock>(this.url + 'retrieve-stock/' + id);
  }
}
