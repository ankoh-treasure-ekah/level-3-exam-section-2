import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // @Output() notify
  @Output() notify = new EventEmitter<boolean>();

  items: any[] = [
    {
      name: 'item 1',
      amount: 0,
      id: 1,
      price: 200
    },
    {
      name: 'item 2',
      amount: 0,
      id: 2,
      price: 400
      
    },
    {
      name: 'item 3',
      amount: 0,
      id: 3,
      price: 100
    },
    {
      name: 'item 4',
      amount: 0,
      id: 4,
      price: 500
    },
    {
      name: 'item 5',
      amount: 0,
      id: 5,
      price: 600
    },
    {
      name: 'item 6',
      amount: 0,
      id: 6,
      price: 1000
    }
    
  ]

  addToCart(item: any) {
    this.notify.emit(item);
  }
}

