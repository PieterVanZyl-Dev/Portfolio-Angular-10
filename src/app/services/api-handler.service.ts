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
  private CORE_API_SERVER = "https://core.ac.uk:443/api-v2/search/title%3AGAN%20%20and%20%2BGenerative%20%2Badversarial%20%2Bnetworks?page=1&pageSize=10"
  private CORE_API_KEY = "&apiKey=Lmje2dyf0AxI3FYvWrBNhug5ztSbZOn1"
  private BIRDAPP_API_SERVER = "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=pieter_the&count=3"

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
    return this.httpClient.get<CoreResponse[]>(`${this.CORE_API_SERVER}${this.CORE_API_KEY}`);


  }

  public SendGetRequestBirdapp(){
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAI4MHgEAAAAAV1hz4TOY3yraG%2FsXSR6M9dO%2FtjY%3DYKVSWaVLt0ivIKScG26NQSesFiRV3SVLLrE2h49J0tx6zzqov1'
     });
    return this.httpClient.get<twitterResponse[]>(`${this.BIRDAPP_API_SERVER}`, { headers: reqHeader });
}
}



