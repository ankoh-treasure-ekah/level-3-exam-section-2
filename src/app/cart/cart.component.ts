import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() items: any[] = [];
  @Output() delete = new EventEmitter<any>();
  @Output() cartNum = new EventEmitter<boolean>();
  
  totalPrice: number = 0;
  totalPriceWithFees: number = 0;
  // items: any[] = [];
  
  ngOnInit(): void {
    
    for(let i=0;i<this.items.length;i++) {
      this.totalPrice += this.items[i].price;
      this.totalPriceWithFees += ((2/100) * this.items[i].price) + this.items[i].price;
    }
    
  }
  
  removeItem(item: any) {
    this.items = [...this.items.slice(0, this.items.indexOf(item)), ...this.items.slice(this.items.indexOf(item)+1, this.items.length)];
    this.totalPrice -= item.price;
    this.totalPriceWithFees -= ((2/100) * item.price) + item.price;

    this.delete.emit(item);
  }

  itemIncrement(item: any) {
    this.cartNum.emit(true);
    //recalculate price with fee
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].id == item.id) {
        this.items[i].amount++;
        this.totalPrice += item.price;
        this.totalPriceWithFees += ((2/100) * this.items[i].price) + this.items[i].price;

      }
    }
  }

  itemDecrement(item: any) {
    this.cartNum.emit(false);
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].id == item.id) {
        if(this.items[i].amount  == 1) {
          alert('are you sure young man');
          this.items = [...this.items.slice(0, this.items.indexOf(item)), ...this.items.slice(this.items.indexOf(item)+1, this.items.length)];
          this.totalPrice -= item.price;
          //re calculate price with fee
          this.totalPriceWithFees -= ((2/100) * item.price) + item.price;
          // for(let i=0;i<this.items.length;i++) {
          // }


          return
        }
        this.items[i].amount--;
        this.totalPrice -= item.price;
        // recalculate price with fee
        this.totalPriceWithFees -= ((2/100) * item.price) + item.price;
        // for(let i=0;i<this.items.length;i++) {
        // }

      }
    }
  }

}
