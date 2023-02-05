import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/porduct.interface';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['title', 'price', 'options'];
  products: Product[] = []
  loading: boolean = true;
  dataSource: MatTableDataSource<any> = <any>[]
  @ViewChild('paginator') paginator?: MatPaginator
  constructor(public productsService: ProductService) {
    productsService.getAll.subscribe(products => {
      this.products = <any[]>products
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = <MatPaginator>this.paginator
      this.loading = false;

    })
  }

  applyFilter(value:string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = <MatPaginator>this.paginator
  }
  ngOnInit() { }
}
