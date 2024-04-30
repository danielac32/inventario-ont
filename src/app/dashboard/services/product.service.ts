import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment.development'
import {productResponseUpdate,ProductUpdate,productResponseDelete,productResponseCreate,Product,productResponse} from '../interfaces/product.interface'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl = environment.apiUrl;//'http://localhost:4000';
constructor(private httpClient: HttpClient,private router: Router) { }
  
  

  updateStockAdd(id:string,stock:string):Observable<productResponseUpdate>{
    const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.post<productResponseUpdate>(`${ this.baseUrl }/producto/stockAdd/?id=${ id }&stock=${stock}`, {},{ headers });
      }

    return new Observable<productResponseUpdate>();
  }

  updateStockSub(id:string,stock:string):Observable<productResponseUpdate>{
    const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.post<productResponseUpdate>(`${ this.baseUrl }/producto/stockSub/?id=${ id }&stock=${stock}`, {},{ headers });
      }

    return new Observable<productResponseUpdate>();
  }

  findOne(id:string):Observable<productResponseUpdate>{
      const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.get<productResponseUpdate>(`${ this.baseUrl }/producto/${id}`,{ headers });
      }
      return new Observable<productResponseUpdate>();
  }


  update(id:string,producto:ProductUpdate):Observable<productResponseUpdate>{
  const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
         return this.httpClient.patch<productResponseUpdate>(`${ this.baseUrl }/producto/${id}`, {
              ...producto
          },{ headers });
      }
      return new Observable<productResponseUpdate>();
  }

  delete(id:string):Observable<productResponseDelete>{
     const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });

          return this.httpClient.delete<productResponseDelete>(`${ this.baseUrl }/producto/${id}`,{ headers });
      }
      return new Observable<productResponseDelete>();
  }

  create(product:Product):Observable<productResponseCreate>{
    const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.post<productResponseCreate>(`${ this.baseUrl }/producto`, {...product},{ headers });
      }

    return new Observable<productResponseCreate>();
  }
  findAll(limit: number = 10, page: number = 1):Observable<productResponse>{
    const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.get<productResponse>(`${ this.baseUrl }/producto?limit=${ limit }&page=${page}`,{ headers });
      }

    return new Observable<productResponse>();
  }

}
