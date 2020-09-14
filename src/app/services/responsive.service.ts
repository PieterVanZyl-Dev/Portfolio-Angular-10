import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {


  //private messageSource = new BehaviorSubject('default message');
  //currentMessage = this.messageSource.asObservable();


  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  isLarge$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Large])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  isXLarge$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XLarge])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  isBoth$: Observable<boolean> = (this.isXLarge$ || this.isLarge$).pipe(shareReplay());

  constructor(private breakpointObserver: BreakpointObserver) { }
}
