import { Product } from "./porduct.interface";

export class CartItem {
    constructor(public product: Product, public quantity: number) {
}
    get countItemPrice() {
        return this?.quantity * this.product?.price
    }
}


