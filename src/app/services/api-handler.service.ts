import { CoreResponse, Datum, Repository,RepositoryDocument, Source } from './../model/core-response';
import { GithubUser } from './../model/github-user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  private GIT_API_SERVER = "https://api.github.com";
  private GIT_USER = '/users/PieterVanZyl-NWU'
  private CORE_API_SERVER_ML = "https://core.ac.uk:443/api-v2/search/title%3AMachine%20Learning%20and%20year%3A%3E2018?page=1&pageSize=10"
  private CORE_API_KEY = "&apiKey=Lmje2dyf0AxI3FYvWrBNhug5ztSbZOn1"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequestGit(){
    return this.httpClient.get<GithubUser[]>(`${this.GIT_API_SERVER}${this.GIT_USER}`);

  }

  public sendGetRequestCore()
  {
    return this.httpClient.get<CoreResponse[]>(`${this.CORE_API_SERVER_ML}${this.CORE_API_KEY}`);


  }
}



