import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Order } from 'shared/models/orders';
import { SkeletonMockData } from 'shared/service/skeleton.data';

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class OrderTableComponent implements OnInit, OnDestroy {
  @Input('orderList') orderList: Observable<Order[]> = new Observable<any>
  @Input('cansalOrder') cansalOrder: boolean = false
  @Output('OnDeleted') OnDeleted = new EventEmitter()

  dataSource: MatTableDataSource<any> = new MatTableDataSource(this.skeleton.setNoOfSkeleton(5))
  columnsToDisplay = ['index', 'name', 'address', 'date', 'totalPrice', 'expand']
  @ViewChild('paginator') paginator?: MatPaginator
  expandedElement: Order = <Order>{}

  orderSubscription!: Subscription

  constructor(private skeleton: SkeletonMockData) {

  }

  ngOnInit(): void {
    this.skeleton.waiting(
      () => {
        this.orderSubscription = this.orderList.subscribe(orders => {
          this.dataSource.data = orders;
          this.dataSource.paginator = <MatPaginator>this.paginator
        })
        this.cansalOrder ? this.columnsToDisplay.push('cansal') : null;
      })
  }

  cansal(key: string) {
    this.OnDeleted.emit(key)
  }

  ngOnDestroy(): void {
    this.orderSubscription.unsubscribe();
  }
}
