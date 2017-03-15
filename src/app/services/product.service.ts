import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {
  constructor(private http: Http) {}

  getProducts(): Observable<Product[]> {
    return this.http.get('api/products')
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }
}
