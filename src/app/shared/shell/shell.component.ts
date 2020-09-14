import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

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

    scrollToElement($element:string): void {
      console.log($element);
      var element = document.getElementById($element);
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }


  constructor(private breakpointObserver: BreakpointObserver) {}

}

