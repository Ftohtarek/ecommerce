import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { Product } from "../models/porduct.interface";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    productsRef;
    // loading:obser 
    constructor(private db: AngularFireDatabase, private route: Router) {
        this.productsRef = this.db.list('products')
    }

    get getCategories() {
        return this.db.list('categories').snapshotChanges().pipe(
            map(change =>
                change.map(category =>
                    ({ key: category.key, ...<any>category.payload.val() })))
        )
    }

    get getAll(): Observable<Product[]> {
        return this.productsRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(products =>
                    (<Product>{ key: products.key, ...<object>products.payload.val() }))))
    }


    getProduct = (id: string) => this.db.object('products/' + id).valueChanges()

    addProduct(product: any) {
        this.productsRef.push({ ...product })
        this.route.navigate(['admin/products'])
    }

    update(id: string, product: any) {
        this.productsRef.update(id, { ...product })
        this.route.navigate(['admin/products'])
    }
    delete(id: string) {
        this.productsRef.remove(id)
        this.route.navigate(['admin/products'])
    }

}