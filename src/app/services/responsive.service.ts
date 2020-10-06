import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {


  //private messageSource = new BehaviorSubject('default message');
  //currentMessage = this.messageSource.asObservable();
  private IsLandingPage$: BehaviorSubject<boolean>;

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



  setLandingPageValue(newValue): void {
    this.IsLandingPage$.next(newValue);
  }

  getLandingPageValue(): Observable<boolean> {
    return this.IsLandingPage$.asObservable();
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    this.IsLandingPage$ = new BehaviorSubject<boolean>(true);
   }
}
