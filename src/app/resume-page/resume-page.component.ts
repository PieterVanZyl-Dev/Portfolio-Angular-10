import { ResponsiveService } from './../services/responsive.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


export interface skill {
  name: string;
  logo?: string;
}

export interface card {
  title: string;
  date: string;
  company: string;
  paragraph: string;
}




@Component({
  selector: 'app-home-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit{

  skills: skill[] = [

    {name: 'Data Structures & Algorithms' , logo:'assets/svg/data.svg'},
    {name: 'Machine Learning & AI'},
    {name: 'System Analysis and Design'},
    {name: 'Git', logo:'assets/svg/github-1.svg'},
    {name: 'SQL', logo:'assets/svg/sql.svg'},
    {name: 'UI/UX'},
    {name: 'Oracle', logo:'assets/svg/oracle.svg'},
    {name: 'MongoDB', logo:'assets/svg/mongodb.svg'},
    {name: 'Restful APIs', logo:'assets/svg/api.svg'},
    {name: 'JSON', logo:'assets/svg/json.svg'},
    {name: 'ASP.Net & MVC', logo:'assets/svg/dotnet-icon.svg'},
    {name: 'Angular', logo:'assets/svg/angular-icon.svg'},
    {name: 'Electron', logo:'assets/svg/electron.svg'},

  ];

  programs: skill[] = [
    {name: 'TypeScript' , logo:'assets/svg/typescript.svg'},
    {name: 'Python', logo:'assets/svg/python-5.svg'},
    {name: 'C#', logo:'assets/svg/c--4.svg'},
    {name: 'C++', logo:'assets/svg/cplusplus.svg'},
    {name: 'Java', logo:'assets/svg/java.svg'},
    {name: 'HTML' , logo:'assets/svg/HTML5_badge.svg'},
    {name: 'CSS' , logo:'assets/svg/css3.svg'},
    {name: 'Javascript', logo:'assets/svg/javascript.svg'},

  ];

  workexperiences: card[] = [
    {title: 'Photography and Design' , date: '2017 - present', company: 'Pieter Creative Co.', paragraph:"• Created many designs, websites, posters and flyers for companies.<br>• Took professional photos for a wide variety of clientele.<br>• Worked on personal passion projects."},
    {title: 'IT Technician' , date: '2017 - 2020', company: 'Amazitech', paragraph:"• Technical support expert; Windows & Linux<br>• Server control and Networking + Sharing.<br>• Tool Development for Managing UNIFI Voucher system.(API)"},
  ];

  educationexperiences: card[] = [
    {title: 'NORTH-WEST UNIVERSITY' , date: '2018 - December 2020', company: 'Bachelor of Science in Information Technology', paragraph:"• Top 15% Performer - Year 1, 2, 3.<br>• Student Assistant (SA) - Year 2 & 3 <br>• Member, Golden Key Society."},
    {title: 'HIGH SCHOOL SASOLBURG' , date: 'Graduated Class of 2017', company: 'Top 25% Achiever', paragraph:"•   President and Founder, E-Sport Team -(LoL, National Finalists)<br>• 3 Years Coding in Delphi<br>• Actor part of the Theater production - 2 years"},
  ];




  isBoth$: Observable<boolean>;
  isLarge$: Observable<boolean>;
  isHandset$: Observable<boolean>;

  downloadFile()
  {
    let link = document.createElement("a");
    link.download = "PietervanZylResume.pdf";
    link.href = "assets/PietervanZylResume.pdf";
    link.click();
  }


  constructor(private responsiveservice: ResponsiveService){}

  ngOnInit() {
    this.isLarge$ = this.responsiveservice.isLarge$;
    this.isBoth$ = this.responsiveservice.isBoth$;
    this.isHandset$ = this.responsiveservice.isHandset$;

      }

}
