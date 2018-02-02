import { Injectable } from '@angular/core';
import { LoginUser } from '../../app/models/login';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ServiceProvider {
  logUser = {} as LoginUser;

  apiUrl = "http://189.126.143.60:8084/MWS/web/serviceMobile/";

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

  getLogar(use: LoginUser) {
    return this.http.get(this.apiUrl + "Login/" + use.login + "/" + use.senha);
  }







}
