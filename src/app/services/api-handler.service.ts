import { CoreResponse} from './../model/core-response';
import { twitterResponse } from './../model/twitter-response';
import { GithubUser, Languages, Repo, RepoResponse } from './../model/github-user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {
  //updated cloud function
  private GIT_API_SERVER = "https://api.github.com";
  private GIT_USER_NAME = "PieterVanZyl-Dev"
  private GIT_USER = '/users/PieterVanZyl-Dev'
  private CORE_API = '  https://pietervanzylcvapi.azurewebsites.net/api/core?url=https://core.ac.uk:443/api-v2/search/title%3AGAN%20%20and%20%2BGenerative%20%2Badversarial%20%2Bnetworks?page=1%26pageSize=10'
  private BIRDAPP_API_SERVER = "https://pietervanzylcvapi.azurewebsites.net/api/twitter?url=https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=pieter_the%26count=3"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequestGit(){
    return this.httpClient.get<GithubUser[]>(`${this.GIT_API_SERVER}${this.GIT_USER}`);

  }


  public sendGetRequestGitUser(username: string): Observable<RepoResponse[]> {
    return this.httpClient.get<Repo[]>(`${this.GIT_API_SERVER}/users/${username}/repos`).pipe(
      // After the httpClient.get emits an array of Repos _switch_ to another forkJoin Observable to continue the pipeline.
      switchMap((response: Repo[]): Observable<RepoResponse[]> => forkJoin(
        // Convert the array of Repos to an array of Observables that emit an array of RepoLang objects
        response.map((repo: Repo): Observable<RepoResponse> => // Array.prototype,map
          // For each Repo object, do this request.
          this.httpClient.get<Record<string, number>[]>(repo.languages_url).pipe(
            // Once the request emits, merge the two data into a single object. I'm just guessing what you want here.
            map((Languages: Record<string, number>[]): RepoResponse => ({ ...repo, Languages })), // rxjs/operators map
        )),
      )),
    );
  }



  public GetLanguagesRequest(url:string){
    return this.httpClient.get<Languages[]>(`url`);

  }


  public sendGetRequestCore()
  {
    //return this.httpClient.get<CoreResponse[]>(`${this.CORE_API_SERVER}${this.CORE_API_KEY}`);
    return this.httpClient.get<CoreResponse[]>(`${this.CORE_API}`);

  }

  public SendGetRequestBirdapp(){
    return this.httpClient.get<twitterResponse[]>(`${this.BIRDAPP_API_SERVER}`);
}
}



