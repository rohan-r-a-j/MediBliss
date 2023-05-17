/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../common/purchase';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
  private purchaseUrl = 'http://localhost:8080/api/checkout/purchase';
 
  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any>{
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);
  }
}
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/