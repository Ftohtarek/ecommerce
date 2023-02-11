import { Book } from "./book"
import { CartModel } from "./cart.model"
import { Destination } from "./destination"

export class Order {
    bookDate: string = ''
    totalPrice: number = 0
    booking: Book[] = []
    constructor(
        public userId: string, public destination: Destination, cart: CartModel
    ) {
        this.bookDate =String( new Date())
        this.booking = cart.items.map(item => ({
            product: {
                title: item.product.title,
                price: item.product.price
            },
            quantity: item.quantity,
            totalPrice: item.countItemPrice
        })
        )
        this.totalPrice = cart.totalCartPrice
    }


}
