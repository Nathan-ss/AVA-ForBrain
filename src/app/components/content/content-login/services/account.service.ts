import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private _Url = 'http://localhost:3000/login'
  //teste local
  constructor( private http: HttpClient) { 
    
   }

  async login(user : any){
    // const result = await this.http.post<any>(".../testelogin.json", user).toPromise();
    // if (result && result.acess_token) {
      //   window.localStorage.setItem('token',  result.acesss_token);
      //   return true;
      // } como estou tratando com um arquivo local .json para teste, n tenho um api que me de um acess_token
    const result = await this.http.get<any>(this._Url, user).toPromise();
    if (result) {
      window.localStorage.setItem('token',  'my-token');
      return true;
    }
    
    return false;
  }

  // login(user : any){
  //   return new Promise((resolve) =>{
  //     window.localStorage.setItem('token','my-token');
  //     resolve(true);
  //   })
  // }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }
}
