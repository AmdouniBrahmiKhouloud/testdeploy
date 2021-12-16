import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Promotion } from '../model/promotion';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  url = environment.url + 'promotion/';



  getListPromotion()
  {
    return this.http.get<Promotion[]>(this.url + 'getAll' );
  }

  getPromotionById(id)
  {
    return this.http.get<Promotion>(this.url + 'getById/' + id );
  }

  addPromotion(promotion: Promotion, id: number)
  {
    const urll = this.url + 'add/' + id ;
    return this.http.post(urll, promotion);
  }

  deletePromotion(id: number)
  {
    let urll = this.url + 'delete/' + id ;
    return this.http.delete(urll);
  }

  updatePromotion(promotion: Promotion, id: number)
  {
    let urll = this.url + 'modify/' + id ;
    console.log(promotion) ;
    return this.http.put(urll, promotion);
  }

  stat()
  {
    let urll = this.url + 'stat/' ;
    return this.http.get(urll);
  }
  sendMail()
  {

    let urll = 'http://localhost:8089/send_mail/' ;
    return this.http.get(urll);
  }
}
