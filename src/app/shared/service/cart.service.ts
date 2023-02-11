import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { CartModel } from 'shared/models/cart.model';
import { Product } from 'shared/models/porduct.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey: string;

  private Ref = {
    cart: this.db.list('cart'),
    cartObject: () => this.db.object('cart/' + this.cartKey),
    cartItems: () => this.db.list('cart/' + this.cartKey + '/items'),
    item: (productKey: string) => this.db.object('cart/' + this.cartKey + '/items/' + productKey),
  }

  constructor(private db: AngularFireDatabase) {
    this.cartKey = <string>this.getCartKey
  }

  public removeCartItems() {
    this.Ref.cartItems().remove()
  }

  public addToCart(product: Product) {
    this.Ref.item(<string>product.key).set({ product, quantity: 1 })
  }

  public async increment(productKey: string) {
    let currentQuan = await this.getItemQuantity(productKey)
    this.Ref.item(productKey).update({ quantity: currentQuan + 1 })
  }

  public async decrement(productKey: string) {
    let currentQuan = await this.getItemQuantity(productKey)
    currentQuan - 1 == 0 ? this.Ref.item(productKey).remove() :
      this.Ref.item(productKey).update({ quantity: currentQuan - 1 })
  }

  public get getCartObject(): Observable<CartModel> {
    return this.Ref.cartObject().valueChanges().pipe(
      map((cartObj: any) => new CartModel(cartObj.items))
    )
  }

  private get createCart() {
    return this.Ref.cart.push({ 'lastUpdate': new Date().getTime() })
  }

  private get getCartKey() {
    let cartId = localStorage.getItem('cartId')
    if (cartId) return cartId

    let newCartId = this.createCart.key
    localStorage.setItem('cartId', <string>newCartId)
    return newCartId
  }

  private async getItemQuantity(itemKey: string) {
    return (await this.Ref.item(itemKey).query.get()).val().quantity
  }


}
