import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NorthwindRestService {
  constructor(private http: HttpClient) { }
  orders: any[] = [];

  public getCustomers(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/a876482a-7805-4e41-6c8a-08da1411ad26`);
  }
  public getOrders(customerId: string): Observable<any> {
    const uri = "https://excel2json.io/api/share/6bfa9276-3d37-4d86-43f5-08da142f80b1";    
    if (this.orders.length === 0) {
      return this.http.get<any[]>(uri).pipe(
        tap(data => this.orders = data),
        map(data => data.filter(order => order.CustomerID === customerId))
        );
    }
    else
    {
      let data: any[] = this.orders.filter(order => order.CustomerID === customerId);
      return of(data);
    }
  }
}
