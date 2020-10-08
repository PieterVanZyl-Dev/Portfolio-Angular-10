import { ResponsiveService } from './../services/responsive.service';
import { GithubUser } from './../model/github-user';
import { CoreResponse } from './../model/core-response';
import { Observable } from 'rxjs';
import { ApiHandlerService } from './../services/api-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
})
export class ApiPageComponent implements OnInit {

  constructor(private apiService: ApiHandlerService, private responsiveservice: ResponsiveService) { }

  githubResponse$: Observable<GithubUser>;
  coreResponse$: Observable<CoreResponse>;
  isHandset$: Observable<boolean>;

  ngOnInit(): void {

    this.isHandset$ = this.responsiveservice.isHandset$;

    this.apiService.sendGetRequestGit().subscribe({
      next: (result: any) => {
      console.log('GIT !: ')
      console.log(result);
      this.githubResponse$ = result;


      },
      error: (err: any) => {
      console.log(err);
      },
      complete: () => {
      console.log('complete');
      }
      });

      this.apiService.sendGetRequestCore().subscribe({
        next: (result: any) => {
        console.log('core !: ')
        console.log(result);
        this.coreResponse$ = result;


        },
        error: (err: any) => {
        console.log(err);
        },
        complete: () => {
        console.log('complete');
        }
        });


  }

}
