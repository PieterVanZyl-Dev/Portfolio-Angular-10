import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  private GIT_API_SERVER = "https://api.github.com";
  private GIT_USER = '/users/PieterVanZyl-NWU'

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    console.log(`${this.GIT_API_SERVER}`);
    return this.httpClient.get(`${this.GIT_API_SERVER}${this.GIT_USER}`);

  }
}



/* getOrders(){
  let token = localStorage.getItem('token');
   return this.http.get('/api/orders' , {headers:
  {'Authorization':'Bearer ' + token}});
   } */
