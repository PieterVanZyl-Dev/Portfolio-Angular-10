import { Component, OnInit } from '@angular/core';

export interface skill {
  name: string;
}


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  skills: skill[] = [
    {name: 'Machine Learning and AI'},
    {name: 'System Analysis and Design'},
    {name: 'Git'},
    {name: 'Data Structures'},
    {name: 'MySQL'},
    {name: 'Networking'},
    {name: 'Tech Support - Windows & Linux'},
    {name: 'UI/UX'},
    {name: 'Animation'},
    {name: 'HTML(5)'},
    {name: 'CSS(3)'},
    {name: 'JSON'},
    {name: 'Bulma Framework'},
    {name: 'Angular 10'},
    {name: 'TypeScript'},


  ];



  constructor() { }


  ngOnInit(): void {
}

}
