import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartModel } from 'shared/models/cart.model';
import { Product } from 'shared/models/porduct.interface';
import { CartService } from 'shared/service/cart.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('product') product: any;
  @Input('showAction') showAction: boolean = true
  @Output('load') isLoaded = new EventEmitter()
  @Input('cartModel') cartModel: CartModel = <CartModel>{}

  constructor(public cartService: CartService) { }

  addToCart = () =>
    this.cartService.addToCart(<Product>this.product)


} 
