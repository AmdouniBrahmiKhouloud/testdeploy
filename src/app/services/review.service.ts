import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Review } from '../model/review';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  url = environment.url + 'reviews';

  getListReviews() {
    return this.http.get<Review[]>(this.url);
  }

  getListReviewsByProduct(id: number) {
    return this.http.get<Review[]>(`${this.url}/product/${id}`);
  }

  addNewReview(review: Review) {
    return this.http.post(this.url + '/new', review);
  }

  getReview(client: number, product: number) {
    return this.http.get(`${this.url}/checkReview/${client}/${product}`);
  }

  update(review: Review) {
    return this.http.put(this.url + '/update', review);
  }

  delete(review: number) {
    return this.http.delete(`${this.url}/delete/${review}`);
  }
}
