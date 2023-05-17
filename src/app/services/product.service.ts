/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
  private baseUrl = 'http://localhost:8080';
 private categoryUrl = 'http://localhost:8080/product-category/';
  constructor(private httpClient: HttpClient) { }
  /* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
  

getProduct(theProductId: number): Observable<Product> {
  // need to build URL based on product id
  const productUrl = `${this.baseUrl}/products`;
 return this.httpClient.get<Product>(productUrl);
 }


   getProductList(theCategoryId: number): Observable<Product[]>{

   // need to build URL based on categoey id
   const productUrl = `${this.baseUrl}/products`;
   return this.httpClient.get<GetResponseProducts>(productUrl).pipe(
     map(response => response._embedded.products)
   );
 }
 getProductListPaginate(theCategoryId: number): Observable<GetResponseProducts>{

   // need to build URL based on category id, page and size
   const searchUrl = `product-category/${theCategoryId}/products`;
   ;
   
   return this.httpClient.get<GetResponseProducts>(searchUrl);
   }


 getProductCategories(): Observable<ProductCategory[]> {
   return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
     map(response => response._embedded.productCategory)
   );
 }
}

/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
interface GetResponseProducts{
  _embedded:{
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseProductCategory{
  _embedded:{
    productCategory: ProductCategory[];
  }
}
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/