import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Product } from 'shared/models/porduct.interface';
import { ProductService } from 'shared/service/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['title', 'price', 'options'];
  dataSource: MatTableDataSource<any> = <any>[]
  @ViewChild('paginator') paginator?: MatPaginator

  products: Product[] = []
  loading: boolean = true;
  subscription!: Subscription
  constructor(public productsService: ProductService) { }

  ngOnInit() {
    this.subscription = this.productsService.getAllProducts.subscribe(products => {
      this.products = <Product[]>products
      this.loading = false;

      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = <MatPaginator>this.paginator
    })
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
