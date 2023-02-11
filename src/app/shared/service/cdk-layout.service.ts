import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdkLayoutService {
  state$: Observable<any>
  breakPoints;
  constructor(private obsrever: BreakpointObserver) {
    this.state$ = this.obsrever.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
    this.breakPoints = Breakpoints
  }
}
