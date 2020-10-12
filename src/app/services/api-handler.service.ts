import { CoreResponse} from './../model/core-response';
import { twitterResponse } from './../model/twitter-response';
import { GithubUser, Languages, Repo } from './../model/github-user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  private GIT_API_SERVER = "https://api.github.com";
  private GIT_USER = '/users/PieterVanZyl-NWU'
  private CORE_API = 'https://pietervanzyl-cv-api.azurewebsites.net/api/core?url=https://core.ac.uk:443/api-v2/search/title%3AGAN%20%20and%20%2BGenerative%20%2Badversarial%20%2Bnetworks?page=1%26pageSize=10'
  private BIRDAPP_API_SERVER = "https://pietervanzyl-cv-api.azurewebsites.net/api/twitter?url=https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=pieter_the%26count=3"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequestGit(){
    return this.httpClient.get<GithubUser[]>(`${this.GIT_API_SERVER}${this.GIT_USER}`);

  }
  public sendGetRequestGitUser(Username:string){
    return this.httpClient.get<Repo[]>(`${this.GIT_API_SERVER}/users/${Username}/repos`);



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



