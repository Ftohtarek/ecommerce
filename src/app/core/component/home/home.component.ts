import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { CartModel } from 'shared/models/cart.model';
import { Product } from 'shared/models/porduct.interface';
import { CartService } from 'shared/service/cart.service';
import { CdkLayoutService } from 'shared/service/cdk-layout.service';
import { ProductService } from 'shared/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  loading: boolean = true;
  products: Product[] = [];
  filteredProducts?: Product[];

  categories?: any[];
  category?: string;

  @ViewChild(MatDrawer) sideNav!: MatSidenav
  matGrid?: MatGridList;
  cols: number = 4

  cartShopping: CartModel = <CartModel>{}

  subscription?: Subscription[]
  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private layout: CdkLayoutService,
    private cartSevice: CartService
  ) {
    const CategoriesSubscription =
      productService.getCategories.subscribe(categories => this.categories = categories)

    const productsAndRoutingAndFilterSubscription =
      this.productService.getAllProducts.pipe(switchMap(
        product => {
          this.products = product
          return this.router.queryParamMap
        }))
        .subscribe(
          param => {
            this.category = <string>param.get('category')
            this.filteredProducts = this.category ? this.products.filter(product => product.category == this.category) : this.products
          })

    const CartSubscription =
      cartSevice.getCartObject.subscribe(cart => this.cartShopping = cart)

    this.subscription?.push(...[CartSubscription, productsAndRoutingAndFilterSubscription, CategoriesSubscription])
  }
  Test() {

  }

  isLoaded(isLoad: boolean) {
    this.loading = !isLoad;
  }

  ngAfterViewInit() {
    this.layout.state$.subscribe(res => {
      if (res.breakpoints[this.layout.breakPoints.XSmall]) {
        this.cols = 2
        this.sideNav.mode = 'over'
        return this.sideNav.close()

      } else if (res.breakpoints[this.layout.breakPoints.Small])
        this.cols = 2

      else if (res.breakpoints[this.layout.breakPoints.Medium])
        this.cols = 3

      else
        this.cols = 4

      this.sideNav.mode = 'side'
      return this.sideNav.open()
    })
  }

  ngOnDestroy() {
    this.subscription?.forEach(subscription => subscription.unsubscribe())
  }
}

