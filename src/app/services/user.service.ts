import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/