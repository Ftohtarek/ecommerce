import { CartItem } from "./cart-item.model";

export class CartModel {
    
    items: CartItem[] = []

    constructor( private itemsMap: { [key: string]: CartItem }) {
        for (const key in itemsMap) {
            let item = itemsMap[key]
            this.items.push(new CartItem(item.product, item.quantity))
        }
    }

    get totalCartPrice() {
        return this.Counter('countItemPrice');
    }

    get totalItemCount() {
        return this.Counter('quantity');
    }

    getQuantity(product: any) {
        if (this.itemsMap)
            return this?.itemsMap[<string>product.key]?.quantity;
        return 0
    }

    private Counter(property: any): number {
        let count: number = 0
        this.items.forEach((item: any) => count += item[property])

        return count;
    }





}
