import { Component, EventEmitter, Input, Output, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartModel } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/porduct.interface';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('product') product: Product = <Product>{}
  @Input('showAction') showAction: boolean = true
  @Output('load') isLoaded = new EventEmitter()
  @Input('cartModel') cartModel: CartModel = <CartModel>{}

  constructor(public cartService: CartService) { }

  addToCart = () =>
    this.cartService.addToCart(<Product>this.product)



} 
