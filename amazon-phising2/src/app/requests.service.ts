import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    public http: HttpClient
  ) { }
  bbddUrl = environment.databaseUrl;

  saveControls(parameters: any){
    return this.http.post(`${this.bbddUrl}/saveUserData`, parameters,{headers: {'Content-Type':'application/json'}});
  }
}
