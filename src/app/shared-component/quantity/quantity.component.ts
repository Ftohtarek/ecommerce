import { Component, Input } from '@angular/core';
import { CartModel } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/porduct.interface';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent {
  @Input('quantity') quantity: number =0
  @Input('product') product: Product = <Product>{}

  constructor(private cartService: CartService) { }

  addation = () =>
    this.cartService.increment(<string>this.product?.key)

  subtract = () =>
    this.cartService.decrement(<string>this.product?.key)

}
