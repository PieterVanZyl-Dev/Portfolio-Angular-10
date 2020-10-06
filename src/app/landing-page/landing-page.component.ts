import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from './../services/responsive.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private responsiveservice: ResponsiveService){}

  ngOnInit(): void {
  }

  showShell(): void {
    console.log('Showing Shell !');
    this.responsiveservice.setLandingPageValue('false')



  }

}
