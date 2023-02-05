import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { take } from 'rxjs';
import { Product } from 'src/app/models/porduct.interface';
import { CdkLayoutService } from 'src/app/service/cdk-layout.service';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})


export class AdminProductFormComponent implements AfterViewInit {
  /* for resboncive  */
  cols: number = 3
  formLayout = { row: 7, col: 2 }
  cardLayout = { row: 4, col: 1 }
  /* component requiement  */
  categories$: any;
  productId: string | null;
  productForm = new FormGroup({
    'title': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'price': new FormControl('', [Validators.required, CustomValidators.number, CustomValidators.min(0)]),
    'category': new FormControl('', Validators.required),
    'imageUrl': new FormControl('', [Validators.required, CustomValidators.url])
  })

  constructor(public productService: ProductService, private router: ActivatedRoute, public layout: CdkLayoutService) {

    this.categories$ = this.productService.getCategories

    this.productId = this.router.snapshot.queryParamMap.get('id')

    this.productService.getProduct(<string>this.productId).pipe(take(1)).subscribe((product: any) => {
      this.productForm.controls.title.setValue(product.title)
      this.productForm.controls.price.setValue(product.price)
      this.productForm.controls.category.setValue(product.category)
      this.productForm.controls.imageUrl.setValue(product.imageUrl)
    })


  }

  get getProduct() {
    return <Product><unknown>this.productForm.value
  }
  add() {
    if (this.productForm.valid)
      this.productService.addProduct(this.productForm.value)
  }
  update() {
    if (this.productForm.valid)
      this.productService.update(<string>this.productId, this.productForm.value)
  }
  delete() {
    this.productService.delete(<string>this.productId)
  }

  ngAfterViewInit(): void {
    this.layout.state$.subscribe(state => {
      if (state.breakpoints[this.layout.breakPoints.XSmall]) {
        this.cols = 1
        this.formLayout.col = 1
        this.formLayout.row = 5
      } else if (state.breakpoints[this.layout.breakPoints.Small]) {
        this.cols = 2
        this.formLayout.col = 1
        this.formLayout.row = 7
        this.cardLayout.row = 4
      } else {
        this.cols = 3
        this.formLayout.col = 2
        this.formLayout.row = 6
        this.cardLayout.row = 4

      }

    })
  }
}
