import { ResponsiveService } from './../services/responsive.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface skill {
  name: string;
  logo?: string;
}



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  skills: skill[] = [
    {name: 'Machine Learning and AI', logo:'assets/svg/ML.svg'},
    {name: 'System Analysis and Design'},
    {name: 'Git', logo:'assets/svg/github-1.svg'},
    {name: 'Data Structures' , logo:'assets/svg/data.svg'},
    {name: 'MySQL', logo:'assets/svg/mysql.svg'},
    {name: 'Networking', logo:'assets/svg/network.svg'},
    {name: 'Tech Support - Windows & Linux'},
    {name: 'UI/UX'},
    {name: 'Animation'},
    {name: 'JSON'},
    {name: 'Angular 10', logo:'assets/svg/angular-icon.svg'},
    {name: 'Unifi Networking', logo:'assets/svg/unifi.svg'},

  ];

  programs: skill[] = [
    {name: 'HTML(5)' , logo:'assets/svg/HTML5_badge.svg'},
    {name: 'CSS(3)' , logo:'assets/svg/css3.svg'},
    {name: 'TypeScript' , logo:'assets/svg/typescript.svg'},
    {name: 'Python', logo:'assets/svg/python-5.svg'},
    {name: 'C#', logo:'assets/svg/c--4.svg'},
    {name: 'Javascript', logo:'assets/svg/javascript.svg'},


  ];




  isBoth$: Observable<boolean>;
  isLarge$: Observable<boolean>;
  isHandset$: Observable<boolean>;
  constructor(private service: ResponsiveService){}

  ngOnInit() {
    this.isLarge$ = this.service.isLarge$;
    this.isBoth$ = this.service.isBoth$;
    this.isHandset$ = this.service.isHandset$;


  }


}
