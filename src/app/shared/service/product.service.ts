import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { Product } from "shared/models/porduct.interface";
import { ProductWithNavigator } from "shared/models/product-navigator";


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsRef = this.db.list('products')
    constructor(private db: AngularFireDatabase, private route: Router) { }

    public get getCategories() {
        return this.db.list('categories').snapshotChanges().pipe(
            map(change =>
                change.map(category =>
                    ({ key: category.key, ...<any>category.payload.val() })))
        )
    }

    public get getAllProducts(): Observable<Product[]> {
        return this.productsRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(products =>
                    (<Product>{ key: products.key, ...<object>products.payload.val() }))))
    }

    public getProduct = (id: string) =>
        <Observable<Product>>this.db.object('products/' + id).valueChanges()

    public addProduct = (product: Product) =>
        new ProductWithNavigator(this.productsRef.push({ ...product }), this.route)

    public update = (id: string, product: any) =>
        new ProductWithNavigator(this.productsRef.update(id, { ...product }), this.route)

    public delete = (id: string) =>
        new ProductWithNavigator(this.productsRef.remove(id), this.route)


}