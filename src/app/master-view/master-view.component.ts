import { Component, OnInit } from '@angular/core';
import { NorthwindRestService } from '../services/northwind-rest.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public northwindRestCustomers: any = null;
  public northwindRestOrders: any = null;

  constructor(
    private northwindRestService: NorthwindRestService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindRestService.getCustomers().subscribe(data => this.northwindRestCustomers = data);
    this.northwindRestService.getOrders().subscribe(data => this.northwindRestOrders = data);
  }
}
