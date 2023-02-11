import { Dialog } from '@angular/cdk/dialog';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { Subscription, take } from 'rxjs';
import { ConfirmPopupComponent } from 'shared/component/confirm-popup/confirm-popup.component';
import { Product } from 'shared/models/porduct.interface';
import { CdkLayoutService } from 'shared/service/cdk-layout.service';
import { ProductService } from 'shared/service/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})


export class AdminProductFormComponent implements OnInit, AfterViewInit, OnDestroy {
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
  subscription!: Subscription
  constructor(
    public productService: ProductService,
    private router: ActivatedRoute,
    public layout: CdkLayoutService,
    private _sb: MatSnackBar,
    private dialog: Dialog
  ) {
    this.categories$ = this.productService.getCategories
    this.productId = this.router.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    this.subscription = this.productService.getProduct(<string>this.productId).pipe(take(1)).subscribe((product: any) => {
      for (let key in this.productForm.controls)
        this.productForm.get(key)?.setValue(product[key])
    })
  }
  get getProduct() {
    return <Product><unknown>this.productForm.value
  }
  add() {
    if (this.productForm.valid)
      this.productService.addProduct(<Product><unknown>this.productForm.value).noteifiy(this._sb, 'Add')
  }
  update() {
    if (this.productForm.valid)
      this.productService.update(<string>this.productId, this.productForm.value).noteifiy(this._sb, 'Update')
  }
  delete() {
    this.confirm().subscribe(confirm =>
      confirm ? this.productService.delete(<string>this.productId).noteifiy(this._sb, this.title.value + ' Delete') : null
    )
  }

  confirm() {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      width: '250px',
      data: { deletedElement: this.title.value }
    })
    return dialogRef.closed
  }
  
  get title() { return this.productForm.controls.title }

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
        this.formLayout.row = 7
        this.cardLayout.row = 4
      }

    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.dialog.ngOnDestroy()
  }
}
