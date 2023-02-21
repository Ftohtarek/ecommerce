import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/porduct.interface';
import { CartService } from 'shared/service/cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent {
  @Input('quantity') quantity: number =0
  @Input('product') product?: Product 

  constructor(private cartService: CartService) { }

  addation = () =>
    this.cartService.increment(<string>this.product?.key)

  subtract = () =>
    this.cartService.decrement(<string>this.product?.key)

}
