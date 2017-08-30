import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class RestApiService {

  constructor(private http: Http) {}

  //REST Methods
  get(url,params){
    return this.http.get('/api/' + `${url}/${params}`)
      .map(res => {
        return res.json();
      })
      .catch(
        error => {
          return Observable.throw(error);
        });
  }

  post(url,params) {
    return this.http.post('/api' + `${url}`,params)
      .map(res => {
        return res.json();
      })
      .catch(
        error => {
          return Observable.throw(error);
        });
  }

  //App Methods
  verifySeconUsernameEmail(email){
    return this.get('verifySeconUsername', email);
  }
}
