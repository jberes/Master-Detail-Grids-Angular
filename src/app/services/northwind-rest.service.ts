import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NorthwindRestService {
  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/dcb51ae600934ecf93c02c9ffcda3c6f`);
  }
  public getOrders(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/de91435ece444635a9768cc507d82cd4`);
  }
}
